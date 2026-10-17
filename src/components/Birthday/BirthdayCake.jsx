import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaMicrophone, FaRedo } from 'react-icons/fa';
import useBlowDetector from './useBlowDetector';
import { playPuff } from './sounds';

const DRIP_DEPTHS = [12, 5, 9, 4, 11, 6, 8, 5];

// Frosting with a wavy, dripping bottom edge.
const dripPath = (x, y, width, height, drips) => {
  const step = width / drips;
  let path = `M${x} ${y + 6} Q${x} ${y} ${x + 6} ${y} H${x + width - 6} Q${x + width} ${y} ${x + width} ${y + 6} V${y + height}`;
  for (let i = drips - 1; i >= 0; i -= 1) {
    const left = x + i * step;
    const bottom = y + height + DRIP_DEPTHS[i % DRIP_DEPTHS.length];
    path += ` C${left + step} ${bottom} ${left} ${bottom} ${left} ${y + height}`;
  }
  return `${path} Z`;
};

// [x, y, color, rotation]
const SPRINKLES = [
  [74, 64, '#FFFFFF', 30], [92, 74, '#2DD4BF', -20], [110, 62, '#FDE68A', 60], [128, 75, '#FFFFFF', -45],
  [146, 63, '#C4B5FD', 15], [164, 73, '#2DD4BF', 50],
  [42, 128, '#F472B6', 20], [62, 133, '#2DD4BF', -30], [84, 126, '#8B5CF6', 45], [106, 133, '#F472B6', -15],
  [128, 127, '#2DD4BF', 35], [150, 133, '#F472B6', -50], [172, 126, '#8B5CF6', -40], [196, 131, '#2DD4BF', 25],
];

const MIC_ERRORS = {
  denied: 'Mic access was blocked. Tap the flames instead.',
  unsupported: 'Mic isn’t available here. Tap the flames instead.',
};

const CakeArt = () => (
  <svg className="absolute bottom-0 left-0" width="240" height="150" viewBox="0 0 240 150" aria-hidden="true">
    <ellipse cx="120" cy="141" rx="114" ry="8" fill="#1C1C1C" />
    <ellipse cx="120" cy="139" rx="106" ry="5" fill="#2A2A2A" />

    <rect x="28" y="78" width="184" height="61" rx="10" fill="#E6D5B8" />
    <rect x="28" y="112" width="184" height="7" fill="#2DD4BF" opacity="0.85" />
    <rect x="28" y="131" width="184" height="8" rx="4" fill="#000000" opacity="0.08" />
    <path d={dripPath(28, 78, 184, 12, 8)} fill="#FFF7ED" />

    <rect x="58" y="34" width="124" height="50" rx="8" fill="#F9A8D4" />
    <rect x="58" y="76" width="124" height="8" rx="4" fill="#000000" opacity="0.08" />
    <path d={dripPath(58, 34, 124, 10, 6)} fill="#FFF1F2" />

    {SPRINKLES.map(([x, y, color, rotation]) => (
      <rect key={`${x}-${y}`} x={x - 4} y={y - 1.5} width="8" height="3" rx="1.5" fill={color} transform={`rotate(${rotation} ${x} ${y})`} />
    ))}
  </svg>
);

const BirthdayCake = ({ age, onAllOut }) => {
  const digits = String(age).split('');
  const [lit, setLit] = useState(() => digits.map(() => true));
  const litRef = useRef(lit);
  const cakeRef = useRef(null);
  const onAllOutRef = useRef(onAllOut);
  const allOut = lit.every((flame) => !flame);
  const remaining = lit.filter(Boolean).length;

  useEffect(() => {
    onAllOutRef.current = onAllOut;
  }, [onAllOut]);

  const extinguish = useCallback((index) => {
    if (!litRef.current[index]) return;
    litRef.current = litRef.current.map((flame, i) => (i === index ? false : flame));
    setLit(litRef.current);
    playPuff();
  }, []);

  const blowNext = useCallback(() => {
    const index = litRef.current.indexOf(true);
    if (index !== -1) extinguish(index);
  }, [extinguish]);

  // Updated every frame, so it skips React and sets a CSS variable directly.
  const setLean = useCallback((level) => {
    cakeRef.current?.style.setProperty('--lean', level.toFixed(3));
  }, []);

  const { status, start, stop } = useBlowDetector({ onBlow: blowNext, onLevel: setLean });

  useEffect(() => {
    if (!allOut) return;
    stop();
    onAllOutRef.current?.();
  }, [allOut, stop]);

  const relight = () => {
    litRef.current = digits.map(() => true);
    setLit(litRef.current);
  };

  let hint = 'Make a wish, then tap the flames or blow into your mic.';
  if (allOut) hint = '🎉 Wish made! Hip hip hooray!';
  else if (remaining < digits.length) hint = remaining === 1 ? 'One more… 💨' : 'Keep going… 💨';

  return (
    <div className="text-center">
      <div ref={cakeRef} className="relative mx-auto h-[262px] w-[240px]">
        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-40 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,186,116,0.32)_0%,rgba(253,186,116,0)_65%)] transition-opacity duration-700 ${
            allOut ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <div className="absolute bottom-[110px] left-1/2 flex -translate-x-1/2 items-end gap-1">
          {digits.map((digit, index) => (
            <button
              key={index}
              type="button"
              onClick={() => extinguish(index)}
              disabled={!lit[index]}
              aria-label={lit[index] ? `Blow out the ${digit} candle` : `The ${digit} candle is out`}
              className="flex flex-col items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-default"
            >
              <span className="relative block h-10 w-8">
                {lit[index] ? (
                  <span className="bday-flame-wrap">
                    <span className="bday-flame" />
                  </span>
                ) : (
                  <span className="bday-smoke">
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </span>
              <span className="block h-2 w-0.5 bg-neutral-400" />
              <span className="bday-candle-digit text-[64px] font-extrabold leading-[0.85]">{digit}</span>
            </button>
          ))}
        </div>

        <CakeArt />
      </div>

      <p className="mt-4 min-h-[1.5rem] text-sm text-primary-text" aria-live="polite">
        {hint}
      </p>

      {allOut ? (
        <button
          type="button"
          onClick={relight}
          className="mt-3 inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 font-mono text-sm text-primary-text transition-colors hover:bg-accent/10"
        >
          <FaRedo size={12} /> Light them again
        </button>
      ) : (
        <div className="mt-3 flex flex-col items-center gap-2">
          {status === 'listening' ? (
            <button
              type="button"
              onClick={stop}
              className="inline-flex items-center gap-2 rounded-lg border border-[#F9A8D4]/60 bg-[#F9A8D4]/10 px-4 py-2 font-mono text-sm text-[#F9A8D4]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F9A8D4] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F9A8D4]" />
              </span>
              Listening… blow!
            </button>
          ) : (
            <button
              type="button"
              onClick={start}
              disabled={status === 'starting'}
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 px-4 py-2 font-mono text-sm text-primary-text transition-colors hover:bg-accent/10 disabled:opacity-60"
            >
              <FaMicrophone size={13} /> {status === 'starting' ? 'Waiting for your mic…' : 'Blow with your mic'}
            </button>
          )}
          <p className="text-xs text-secondary-text">
            {MIC_ERRORS[status] || 'Your mic audio never leaves your device.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default BirthdayCake;
