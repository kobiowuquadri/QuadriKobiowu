import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck, FaCopy, FaEnvelope, FaGift, FaShareAlt, FaTimes, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import BirthdayCake from './BirthdayCake';
import { GIFT_ACCOUNT, WISH_EMAIL } from './birthdayConfig';
import { celebrate } from './confetti';
import { playBirthdaySong, stopBirthdaySong } from './sounds';

const formatAccountNumber = (number) => number.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3');

const wishHref = `mailto:${WISH_EMAIL}?subject=${encodeURIComponent('Happy birthday, Quadri! 🎉')}&body=${encodeURIComponent(
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

const CelebrationModal = ({ isOpen, onClose, age, popCount, muted, onToggleMute }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

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
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      stopBirthdaySong();
      previousFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleAllOut = useCallback(() => {
    celebrate();
    playBirthdaySong();
  }, []);

  const copyAccount = async () => {
    if (await copyText(GIFT_ACCOUNT.accountNumber)) setCopied('account');
  };

  const shareParty = async () => {
    const shareData = {
      title: 'It’s Quadri’s birthday! 🎂',
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
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
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
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 48 }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-2xl border border-border-color bg-secondary-bg px-5 pb-6 pt-4 shadow-2xl sm:rounded-2xl sm:px-7"
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onToggleMute}
                aria-label={muted ? 'Turn sound on' : 'Mute sound'}
                className="rounded-full p-2 text-secondary-text transition-colors hover:bg-white/5 hover:text-accent"
              >
                {muted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
              </button>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80">October 18</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-2 text-secondary-text transition-colors hover:bg-white/5 hover:text-accent"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <div className="mt-1 text-center">
              <h2 id="birthday-title" className="text-3xl font-light text-primary-text sm:text-4xl">
                It&apos;s my birthday! 🎂
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-secondary-text">
                I&apos;m turning <span className="font-semibold text-accent">{age}</span> today. Thanks for
                stopping by to celebrate with me.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-border-color bg-primary-bg/60 px-4 pb-5 pt-4">
              <BirthdayCake age={age} onAllOut={handleAllOut} />
            </div>

            <section className="mt-6" aria-labelledby="gift-title">
              <h3 id="gift-title" className="flex items-center gap-2 text-lg font-medium text-primary-text">
                <FaGift className="text-[#F9A8D4]" /> Send a birthday gift
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-secondary-text">
                If you&apos;d like to gift me something, you can send it to my {GIFT_ACCOUNT.bank} account. Every
                gift, big or small, means a lot. Thank you! 💛
              </p>

              <div className="mt-4 rounded-xl border border-[#2DD4BF]/30 bg-gradient-to-br from-[#2DD4BF]/10 via-transparent to-[#F9A8D4]/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A7F3D0]">
                  {GIFT_ACCOUNT.bank} · Account number
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="font-mono text-2xl font-bold tracking-wider text-primary-text sm:text-3xl">
                    {formatAccountNumber(GIFT_ACCOUNT.accountNumber)}
                  </p>
                  <button
                    type="button"
                    onClick={copyAccount}
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-primary-bg transition-colors hover:bg-white"
                  >
                    {copied === 'account' ? <FaCheck size={12} /> : <FaCopy size={12} />}
                    {copied === 'account' ? 'Copied' : 'Copy'}
                  </button>
                </div>
                {GIFT_ACCOUNT.accountName && (
                  <p className="mt-2 text-sm text-secondary-text">{GIFT_ACCOUNT.accountName}</p>
                )}
              </div>
            </section>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={wishHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent/40 px-3 py-2.5 text-sm font-semibold text-primary-text transition-colors hover:bg-accent/10"
              >
                <FaEnvelope size={13} /> Send a wish
              </a>
              <button
                type="button"
                onClick={shareParty}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2DD4BF]/50 px-3 py-2.5 text-sm font-semibold text-[#A7F3D0] transition-colors hover:bg-[#2DD4BF]/10"
              >
                <FaShareAlt size={13} /> {copied === 'link' ? 'Link copied!' : 'Share the party'}
              </button>
            </div>

            {popCount > 0 && (
              <p className="mt-4 text-center font-mono text-xs text-secondary-text">
                🎈 You&apos;ve popped {popCount} balloon{popCount === 1 ? '' : 's'} so far
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CelebrationModal;
