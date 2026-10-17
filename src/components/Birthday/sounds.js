// Tiny synthesized sound effects, so the celebration needs no audio files.
let audioContext = null;
let muted = false;
let stopSong = null;

export const getAudioContext = () => {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    audioContext = new AudioContextClass();
  }
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  return audioContext;
};

export const stopBirthdaySong = () => {
  if (stopSong) stopSong();
  stopSong = null;
};

export const setMuted = (value) => {
  muted = value;
  if (muted) stopBirthdaySong();
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

const playTone = (context, destination, frequency, start, duration, volume, type = 'triangle') => {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain).connect(destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.05);
};

export const playChime = () => {
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  [784, 988, 1319].forEach((frequency, i) =>
    playTone(context, context.destination, frequency, now + i * 0.08, 0.6, 0.08, 'sine')
  );
};

const NOTES = { G4: 392, A4: 440, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99 };
const BEAT_SECONDS = 0.4;

// "Happy Birthday to You" (public domain) as [note, beats].
const SONG = [
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['C5', 1], ['B4', 2],
  ['G4', 0.75], ['G4', 0.25], ['A4', 1], ['G4', 1], ['D5', 1], ['C5', 2],
  ['G4', 0.75], ['G4', 0.25], ['G5', 1], ['E5', 1], ['C5', 1], ['B4', 1], ['A4', 2],
  ['F5', 0.75], ['F5', 0.25], ['E5', 1], ['C5', 1], ['D5', 1], ['C5', 2],
];

export const playBirthdaySong = () => {
  stopBirthdaySong();
  if (muted) return;
  const context = getAudioContext();
  if (!context) return;

  const songGain = context.createGain();
  songGain.connect(context.destination);

  let time = context.currentTime + 0.1;
  SONG.forEach(([note, beats]) => {
    const duration = beats * BEAT_SECONDS;
    playTone(context, songGain, NOTES[note], time, duration * 0.95, 0.14);
    time += duration;
  });

  stopSong = () => {
    songGain.gain.setTargetAtTime(0, context.currentTime, 0.05);
    setTimeout(() => songGain.disconnect(), 300);
  };
};
