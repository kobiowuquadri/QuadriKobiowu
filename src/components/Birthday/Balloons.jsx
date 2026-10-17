import React, { useCallback, useEffect, useState } from 'react';
import { burst, GOLD_COLORS } from './confetti';
import { playPop, playSparkle } from './sounds';

const COLORS = ['#F9A8D4', '#2DD4BF', '#E6D5B8', '#C4B5FD', '#FDE68A', '#FCA5A5', '#A7F3D0'];
const GOLDEN_CHANCE = 0.12;
const SPAWN_EVERY_MS = 2200;
const NOTE_LIFETIME_MS = 1400;

const POP_MESSAGES = [
  '200 OK 🎉',
  'Happy birthday, Quadri! 🎂',
  'git commit -m "another year"',
  'Zero race conditions today',
  'Idempotent happiness ✨',
  'Transaction committed ✓',
  '+1 year of uptime',
  'Deploy successful 🚀',
  'No bugs, only cake 🍰',
  'HBD QK! 🥳',
];

const pick = (items) => items[Math.floor(Math.random() * items.length)];
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

let nextId = 0;
const createBalloon = (delay = 0) => {
  const golden = Math.random() < GOLDEN_CHANCE;
  nextId += 1;
  return {
    id: nextId,
    golden,
    color: golden ? '#FACC15' : pick(COLORS),
    left: 6 + Math.random() * 88,
    size: golden ? 74 : 52 + Math.random() * 22,
    // Golden balloons rise faster, so they're harder to catch.
    riseSeconds: golden ? 8 + Math.random() * 2 : 12 + Math.random() * 8,
    swaySeconds: 2.4 + Math.random() * 1.8,
    delay,
  };
};

const BalloonShape = ({ color, label }) => (
  <svg viewBox="0 0 60 112" className="block h-auto w-full overflow-visible">
    {/* Only the balloon itself is clickable, not the string. */}
    <g style={{ pointerEvents: 'auto' }}>
      <ellipse cx="30" cy="34" rx="27" ry="33" fill={color} />
      <ellipse cx="30" cy="34" rx="27" ry="33" fill="url(#bday-balloon-shade)" />
      <ellipse cx="19" cy="21" rx="5" ry="9" fill="#FFFFFF" opacity="0.45" transform="rotate(-25 19 21)" />
      <path d="M30 66 L34 71 L26 71 Z" fill={color} />
      {label && (
        <text x="30" y="42" textAnchor="middle" fontSize="22" fontWeight="700" fill="#713F12" fontFamily="Poppins, sans-serif">
          {label}
        </text>
      )}
    </g>
    <path d="M30 71 C 24 82, 36 94, 30 112" fill="none" stroke="rgba(230, 213, 184, 0.45)" strokeWidth="1.2" />
  </svg>
);

const Balloons = ({ age, maxBalloons, onPop }) => {
  const [balloons, setBalloons] = useState(() =>
    Array.from({ length: Math.min(5, maxBalloons) }, (_, i) => createBalloon(i * 0.8))
  );
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((current) => (current.length >= maxBalloons ? current : [...current, createBalloon()]));
    }, SPAWN_EVERY_MS);
    return () => clearInterval(interval);
  }, [maxBalloons]);

  const removeBalloon = useCallback((id) => {
    setBalloons((current) => current.filter((balloon) => balloon.id !== id));
  }, []);

  const pop = (balloon, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.width * 0.55;

    removeBalloon(balloon.id);
    playPop();
    if (balloon.golden) {
      playSparkle();
      burst(x, y, { count: 130, speed: 13, colors: GOLD_COLORS });
    } else {
      burst(x, y, { count: 40, speed: 8, colors: [balloon.color, '#FFFFFF', '#E6D5B8'] });
    }

    const note = {
      id: balloon.id,
      x: clamp(x, 100, window.innerWidth - 100),
      y,
      golden: balloon.golden,
      text: balloon.golden ? 'Golden balloon! 🌟' : pick(POP_MESSAGES),
    };
    setNotes((current) => [...current, note]);
    setTimeout(() => setNotes((current) => current.filter((item) => item.id !== note.id)), NOTE_LIFETIME_MS);

    onPop(balloon);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[45] overflow-hidden" aria-hidden="true">
      <svg width="0" height="0" className="absolute" focusable="false">
        <defs>
          <radialGradient id="bday-balloon-shade" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
          </radialGradient>
        </defs>
      </svg>

      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="bday-balloon-rise absolute top-full"
          style={{
            left: `${balloon.left}%`,
            width: balloon.size,
            animationDuration: `${balloon.riseSeconds}s`,
            animationDelay: `${balloon.delay}s`,
          }}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) removeBalloon(balloon.id);
          }}
        >
          <div
            className="bday-balloon-sway cursor-pointer touch-manipulation"
            style={{ animationDuration: `${balloon.swaySeconds}s` }}
            onPointerDown={(event) => pop(balloon, event)}
          >
            <BalloonShape color={balloon.color} label={balloon.golden ? age : null} />
          </div>
        </div>
      ))}

      {notes.map((note) => (
        <span
          key={note.id}
          className={`bday-pop-text absolute whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs shadow-lg backdrop-blur-sm sm:text-sm ${
            note.golden
              ? 'border-[#FACC15]/60 bg-[#FACC15]/15 text-[#FDE68A]'
              : 'border-accent/30 bg-primary-bg/80 text-accent'
          }`}
          style={{ left: note.x, top: note.y }}
        >
          {note.text}
        </span>
      ))}
    </div>
  );
};

export default Balloons;
