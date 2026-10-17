import { useCallback, useEffect, useRef, useState } from 'react';
import { getAudioContext } from './sounds';

const BLOW_THRESHOLD = 0.14; // loudness (RMS) that counts as blowing
const BLOW_HOLD_MS = 250; // how long a blow must last to put out one candle

// Listens to the microphone and calls onBlow each time someone blows into it.
// onLevel gets a 0-1 loudness every frame so the flames can lean with the breath.
// Audio is only analysed in the browser; nothing is recorded or sent anywhere.
const useBlowDetector = ({ onBlow, onLevel }) => {
  const [status, setStatus] = useState('idle'); // idle | starting | listening | denied | unsupported
  const handlers = useRef({ onBlow, onLevel });
  const session = useRef({ id: 0, cleanup: null });

  useEffect(() => {
    handlers.current = { onBlow, onLevel };
  }, [onBlow, onLevel]);

  const stop = useCallback(() => {
    session.current.id += 1;
    if (session.current.cleanup) session.current.cleanup();
    session.current.cleanup = null;
    setStatus((current) => (current === 'listening' || current === 'starting' ? 'idle' : current));
  }, []);

  const start = useCallback(async () => {
    // Created inside the click so mobile browsers allow audio.
    const audio = getAudioContext();
    if (!audio || !navigator.mediaDevices?.getUserMedia) {
      setStatus('unsupported');
      return;
    }

    session.current.id += 1;
    const id = session.current.id;
    setStatus('starting');

    let stream;
    try {
      // Noise suppression would filter out the sound of blowing.
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      });
    } catch (error) {
      if (id === session.current.id) setStatus(error?.name === 'NotAllowedError' ? 'denied' : 'unsupported');
      return;
    }

    // Stopped or unmounted while the permission prompt was open.
    if (id !== session.current.id) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }

    const source = audio.createMediaStreamSource(stream);
    const analyser = audio.createAnalyser();
    analyser.fftSize = 1024;
    source.connect(analyser);

    const samples = new Uint8Array(analyser.fftSize);
    let level = 0;
    let blowTime = 0;
    let lastTime = performance.now();
    let frame;

    const listen = (time) => {
      const elapsed = time - lastTime;
      lastTime = time;

      analyser.getByteTimeDomainData(samples);
      let sum = 0;
      for (let i = 0; i < samples.length; i += 1) {
        const value = (samples[i] - 128) / 128;
        sum += value * value;
      }
      level = level * 0.7 + Math.sqrt(sum / samples.length) * 0.3;
      handlers.current.onLevel?.(Math.min(level / BLOW_THRESHOLD, 1));

      blowTime = level > BLOW_THRESHOLD ? blowTime + elapsed : Math.max(0, blowTime - elapsed);
      if (blowTime >= BLOW_HOLD_MS) {
        blowTime = 0;
        handlers.current.onBlow?.();
      }
      frame = requestAnimationFrame(listen);
    };
    frame = requestAnimationFrame(listen);

    session.current.cleanup = () => {
      cancelAnimationFrame(frame);
      source.disconnect();
      stream.getTracks().forEach((track) => track.stop());
      handlers.current.onLevel?.(0);
    };
    setStatus('listening');
  }, []);

  useEffect(() => stop, [stop]);

  return { status, start, stop };
};

export default useBlowDetector;
