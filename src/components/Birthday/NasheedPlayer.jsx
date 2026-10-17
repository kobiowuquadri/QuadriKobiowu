import React from 'react';
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { NASHEED, pauseNasheed, playNasheed } from './sounds';
import useNasheed from './useNasheed';

const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-bg';
const LINK = 'underline-offset-2 hover:text-accent hover:underline';

// Progress bars below scale with transform rather than width, so the browser
// can animate them without re-laying out the page while the nasheed plays.

// The license (CC BY 3.0) requires crediting the title, artist, source and license.
const Credit = ({ className }) => (
  <p className={className}>
    &ldquo;
    <a href={NASHEED.sourceUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
      {NASHEED.title}
    </a>
    &rdquo; by {NASHEED.artist},{' '}
    <a href={NASHEED.licenseUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
      {NASHEED.license}
    </a>
  </p>
);

// Player controls are marked with data-nasheed-control so the autoplay-on-first-tap
// listener leaves them alone and they behave exactly as pressed.
const NasheedPlayer = ({ compact = false, muted, onToggleMute }) => {
  const { playing, progress } = useNasheed();

  const toggle = () => {
    if (playing) pauseNasheed();
    else if (muted) onToggleMute(); // turning sound back on starts the nasheed
    else playNasheed();
  };

  const playButton = (size) => (
    <button
      type="button"
      onClick={toggle}
      data-nasheed-control
      aria-label={playing ? 'Pause nasheed' : 'Play nasheed'}
      className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-accent text-primary-bg transition-colors hover:bg-white ${FOCUS_RING}`}
    >
      {playing ? <FaPause size={11} /> : <FaPlay size={11} className="ml-0.5" />}
    </button>
  );

  if (compact) {
    return (
      <div className="relative flex max-w-[260px] items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-secondary-bg py-1.5 pl-1.5 pr-2 shadow-lg">
        {playButton('h-8 w-8')}
        <div className="min-w-0 flex-1 leading-tight">
          <a
            href={NASHEED.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block truncate text-xs font-medium text-primary-text ${LINK}`}
          >
            {NASHEED.title}
          </a>
          <p className="truncate text-[10px] text-secondary-text">
            {NASHEED.artist} ·{' '}
            <a href={NASHEED.licenseUrl} target="_blank" rel="noopener noreferrer" className={LINK}>
              {NASHEED.license}
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={onToggleMute}
          data-nasheed-control
          aria-label={muted ? 'Turn sound on' : 'Mute sound'}
          className={`rounded-full p-1.5 text-secondary-text transition-colors hover:text-accent ${FOCUS_RING}`}
        >
          {muted ? <FaVolumeMute size={13} /> : <FaVolumeUp size={13} />}
        </button>
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-accent/70 transition-transform duration-300 ease-linear"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <section aria-labelledby="nasheed-title">
      <h3 id="nasheed-title" className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-text">
        Nasheed
      </h3>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        {playButton('h-10 w-10')}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-primary-text">{NASHEED.title}</p>
          <p className="truncate text-xs text-secondary-text">{NASHEED.artist} · Vocals only</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div
              className="h-full w-full origin-left bg-accent transition-transform duration-300 ease-linear"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
      <Credit className="mt-2 text-[11px] leading-relaxed text-secondary-text/70" />
    </section>
  );
};

export default NasheedPlayer;
