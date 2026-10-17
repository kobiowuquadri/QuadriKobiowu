import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaPause,
  FaPlay,
  FaShareAlt,
  FaTimes,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import BirthdayCake from './BirthdayCake';
import { GIFT_ACCOUNT, WISH_EMAIL } from './birthdayConfig';
import { celebrate } from './confetti';
import { isMuted, NASHEED, pauseNasheed, playNasheed, primeNasheed, stopNasheed } from './sounds';
import useNasheed from './useNasheed';

const FOCUS_RING =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-bg';
const ICON_BUTTON = `rounded-full p-2 text-secondary-text transition-colors hover:bg-white/5 hover:text-accent ${FOCUS_RING}`;
const OUTLINE_BUTTON = `inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-medium text-primary-text transition-colors hover:border-accent/40 hover:bg-white/5 ${FOCUS_RING}`;

const formatAccountNumber = (number) => number.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3');

const wishHref = `mailto:${WISH_EMAIL}?subject=${encodeURIComponent('Happy birthday, Quadri!')}&body=${encodeURIComponent(
  'Hi Quadri,\n\nHappy birthday! '
)}`;

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is missing on non-HTTPS pages and some older browsers.
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied;
  }
};

const NasheedPlayer = ({ muted, onUnmute }) => {
  const { playing, progress } = useNasheed();

  const toggle = () => {
    if (playing) {
      pauseNasheed();
      return;
    }
    if (muted) onUnmute();
    playNasheed();
  };

  return (
    <section aria-labelledby="nasheed-title">
      <h3 id="nasheed-title" className="text-xs font-medium uppercase tracking-[0.2em] text-secondary-text">
        Nasheed
      </h3>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause nasheed' : 'Play nasheed'}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary-bg transition-colors hover:bg-white ${FOCUS_RING}`}
        >
          {playing ? <FaPause size={12} /> : <FaPlay size={12} className="ml-0.5" />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-primary-text">{NASHEED.title}</p>
          <p className="truncate text-xs text-secondary-text">{NASHEED.artist} · Vocals only</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-300 ease-linear"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-secondary-text/70">
        &ldquo;
        <a href={NASHEED.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-accent hover:underline">
          {NASHEED.title}
        </a>
        &rdquo; by {NASHEED.artist}, licensed under{' '}
        <a href={NASHEED.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:text-accent hover:underline">
          {NASHEED.license}
        </a>
        .
      </p>
    </section>
  );
};

const CelebrationModal = ({ isOpen, onClose, age, muted, onToggleMute }) => {
  const dialogRef = useRef(null);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep keyboard focus inside the dialog.
      const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      stopNasheed();
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleMicStart = useCallback(() => {
    if (!isMuted()) primeNasheed();
  }, []);

  const handleAllOut = useCallback(() => {
    celebrate();
    if (!isMuted()) playNasheed();
  }, []);

  const copyAccount = async () => {
    if (await copyText(GIFT_ACCOUNT.accountNumber)) setCopied('account');
  };

  const shareParty = async () => {
    const shareData = {
      title: 'It’s Quadri’s birthday!',
      text: 'Come pop some balloons and blow out the candles with Quadri 🎈',
      url: window.location.origin,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Share sheet was closed.
      }
      return;
    }
    if (await copyText(shareData.url)) setCopied('link');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/75 backdrop-blur-sm md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="birthday-title"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            className="bday-scroll relative grid max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-white/10 bg-secondary-bg shadow-2xl focus:outline-none md:grid-cols-[1.1fr_1fr] md:rounded-2xl"
          >
            <div className="absolute right-3 top-3 z-10 flex items-center gap-1">
              <button
                type="button"
                onClick={onToggleMute}
                aria-label={muted ? 'Turn sound on' : 'Mute sound'}
                className={ICON_BUTTON}
              >
                {muted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
              </button>
              <button type="button" onClick={onClose} aria-label="Close" className={ICON_BUTTON}>
                <FaTimes size={15} />
              </button>
            </div>

            <div className="flex flex-col items-center border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(249,168,212,0.08),transparent_65%)] px-6 pb-8 pt-10 text-center md:border-b-0 md:border-r">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent/80">
                October 18 · Turning {age}
              </p>
              <h2 id="birthday-title" className="mt-3 text-3xl font-light text-primary-text sm:text-4xl">
                It&apos;s my birthday
              </h2>
              <p className="mt-2 max-w-xs text-balance text-sm leading-relaxed text-secondary-text">
                Thank you for stopping by to celebrate with me.
              </p>
              <div className="mt-6 w-full">
                <BirthdayCake age={age} onAllOut={handleAllOut} onMicStart={handleMicStart} />
              </div>
            </div>

            <div className="flex flex-col gap-8 px-6 pb-8 pt-8 md:pt-16">
              <section aria-labelledby="gift-title">
                <h3 id="gift-title" className="text-lg font-medium text-primary-text">
                  Send a birthday gift
                </h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-secondary-text">
                  If you&apos;d like to send a gift, here are my account details. Every gift, big or small,
                  means a lot to me.
                </p>

                <div className="mt-4 divide-y divide-white/5 rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs text-secondary-text">Bank</span>
                    <span className="text-sm font-medium text-primary-text">{GIFT_ACCOUNT.bank}</span>
                  </div>
                  {GIFT_ACCOUNT.accountName && (
                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                      <span className="text-xs text-secondary-text">Account name</span>
                      <span className="text-right text-sm font-medium text-primary-text">{GIFT_ACCOUNT.accountName}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <div>
                      <span className="text-xs text-secondary-text">Account number</span>
                      <p className="mt-0.5 font-mono text-xl font-semibold tracking-wider text-primary-text">
                        {formatAccountNumber(GIFT_ACCOUNT.accountNumber)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={copyAccount}
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-primary-bg transition-colors hover:bg-white ${FOCUS_RING}`}
                    >
                      {copied === 'account' ? <FaCheck size={11} /> : <FaCopy size={11} />}
                      {copied === 'account' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a href={wishHref} className={OUTLINE_BUTTON}>
                    <FaEnvelope size={13} /> Send a wish
                  </a>
                  <button type="button" onClick={shareParty} className={OUTLINE_BUTTON}>
                    <FaShareAlt size={13} /> {copied === 'link' ? 'Link copied' : 'Share'}
                  </button>
                </div>
              </section>

              <NasheedPlayer muted={muted} onUnmute={onToggleMute} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CelebrationModal;
