import nasheedUrl from '../../assets/birthday/alhamdulillah-nasheed.mp3';

// Sound effects are synthesized noise (no instruments, no audio files).
// The nasheed is the only recording, and it's vocals only.
let audioContext = null;
let muted = false;
let nasheed = null;
let wantsNasheed = false;

// "Alhamdulilah (Official Vocal Only Nasheed)" by Jawad Syed (SyedsLife),
// CC BY 3.0, so it must be credited wherever it plays.
export const NASHEED = {
  title: 'Alhamdulillah',
  artist: 'Jawad Syed',
  sourceUrl: 'https://www.youtube.com/watch?v=Xq0NZOssd5s',
  license: 'CC BY 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
};

export const getAudioContext = () => {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioContext = new AudioContextClass();
  }
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  return audioContext;
};

export const getNasheed = () => {
  if (!nasheed) {
    nasheed = new Audio(nasheedUrl);
    nasheed.preload = 'none';
    nasheed.volume = 0.7;
  }
  return nasheed;
};

// Resolves to false when the browser blocks playback (no tap/click yet).
export const playNasheed = () => {
  wantsNasheed = true;
  const audio = getNasheed();
  audio.muted = false;
  return audio
    .play()
    .then(() => true)
    .catch(() => false);
};

export const pauseNasheed = () => {
  wantsNasheed = false;
  if (nasheed) nasheed.pause();
};

export const stopNasheed = () => {
  pauseNasheed();
  if (nasheed && nasheed.readyState > 0) nasheed.currentTime = 0;
};

// Mobile Safari only lets audio start from a tap. The candles can be blown out
// by the mic (not a tap), so start and pause the nasheed silently during the
// mic-button tap; after that it's allowed to play.
export const primeNasheed = () => {
  const audio = getNasheed();
  if (wantsNasheed || !audio.paused) return;
  audio.muted = true;
  audio
    .play()
    .then(() => {
      if (!wantsNasheed) {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.muted = false;
    })
    .catch(() => {
      audio.muted = false;
    });
};

export const isMuted = () => muted;

export const setMuted = (value) => {
  muted = value;
  if (muted) pauseNasheed();
};

const playNoise = ({ duration, frequency, filterType, q, volume, decay }) => {
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;

  const length = Math.floor(context.sampleRate * duration);
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < length; i += 1) {
    samples[i] = (Math.random() * 2 - 1) * (1 - i / length) ** decay;
  }

  const source = context.createBufferSource();
  source.buffer = buffer;
  const filter = context.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.value = frequency;
  filter.Q.value = q;
  const gain = context.createGain();
  gain.gain.value = volume;

  source.connect(filter).connect(gain).connect(context.destination);
  source.start();
};

export const playPop = () =>
  playNoise({ duration: 0.14, frequency: 700 + Math.random() * 700, filterType: 'bandpass', q: 0.9, volume: 1, decay: 6 });

export const playPuff = () =>
  playNoise({ duration: 0.5, frequency: 600, filterType: 'lowpass', q: 0.3, volume: 0.45, decay: 1.5 });

// A bright fizz for golden balloons and milestones.
export const playSparkle = () =>
  playNoise({ duration: 0.7, frequency: 6000, filterType: 'highpass', q: 0.7, volume: 0.35, decay: 2.5 });
