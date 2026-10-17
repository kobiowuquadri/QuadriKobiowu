import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGift, FaTimes } from 'react-icons/fa';
import { useBirthday } from './BirthdayContext';
import Balloons from './Balloons';
import CelebrationModal from './CelebrationModal';
import NasheedPlayer from './NasheedPlayer';
import { celebrate, destroyConfetti } from './confetti';
import { getNasheed, isMuted, playNasheed, playSparkle, setMuted as setSoundMuted, stopNasheed } from './sounds';
import './birthday.css';

const WELCOME_SEEN_KEY = 'qk-birthday-welcome-seen';
const MUTED_KEY = 'qk-birthday-muted';
const INTERACTION_EVENTS = ['pointerdown', 'pointerup', 'touchend', 'keydown', 'click'];

const readStorage = (type, key) => {
  try {
    return window[type].getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (type, key, value) => {
  try {
    window[type].setItem(key, value);
  } catch {
    // Storage can be blocked (e.g. private browsing); the party still works.
  }
};

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const milestoneToast = (count, age) => {
  if (count === 10) return { message: '🎈 10 balloons down! Keep going…' };
  if (count === age) {
    return {
      message: `🥳 ${age} balloons for ${age} years! You're the life of the party.`,
      action: 'Send a gift 🎁',
      duration: 8000,
      big: true,
    };
  }
  if (count === 50) return { message: '50 balloons?! You really love balloons 😄' };
  return null;
};

const BirthdayCelebration = () => {
  const { age, isOpen, openCelebration, closeCelebration } = useBirthday();
  const [reducedMotion] = useState(prefersReducedMotion);
  const [maxBalloons] = useState(() => (window.innerWidth < 640 ? 5 : 8));
  const [popCount, setPopCount] = useState(0);
  const [toast, setToast] = useState(null);
  const [muted, setMuted] = useState(() => readStorage('localStorage', MUTED_KEY) === '1');

  useEffect(() => {
    setSoundMuted(muted);
    writeStorage('localStorage', MUTED_KEY, muted ? '1' : '0');
  }, [muted]);

  // Autoplay the nasheed on visit. Browsers block sound until the visitor
  // interacts with the page, so if that happens, start on their first tap,
  // click or key press instead.
  useEffect(() => {
    const audio = getNasheed();
    const stopListening = () => {
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, startOnInteraction, true));
      audio.removeEventListener('play', stopListening);
    };
    const startOnInteraction = (event) => {
      // The player's own buttons decide for themselves.
      if (event.target.closest?.('[data-nasheed-control]') || isMuted()) return;
      playNasheed();
    };

    if (isMuted()) return undefined;
    INTERACTION_EVENTS.forEach((event) => window.addEventListener(event, startOnInteraction, true));
    // Once it has played (by autoplay, a tap or the play button), never force it again.
    audio.addEventListener('play', stopListening);
    playNasheed();
    return stopListening;
  }, []);

  const showToast = useCallback((next) => setToast({ id: Date.now(), ...next }), []);

  // Opening confetti and a welcome note (once per visit).
  useEffect(() => {
    const timers = [];
    if (!reducedMotion) timers.push(setTimeout(celebrate, 700));
    if (!readStorage('sessionStorage', WELCOME_SEEN_KEY)) {
      timers.push(
        setTimeout(() => {
          writeStorage('sessionStorage', WELCOME_SEEN_KEY, '1');
          showToast({
            message: "🎉 It's my birthday today! Pop the balloons and blow out my candles.",
            action: 'Join the party',
            duration: 10000,
          });
        }, 1500)
      );
    }
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion, showToast]);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `🎂 ${originalTitle}`;
    return () => {
      document.title = originalTitle;
      destroyConfetti();
      stopNasheed();
    };
  }, []);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), toast.duration ?? 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const milestone = milestoneToast(popCount, age);
    if (!milestone) return;
    showToast(milestone);
    if (milestone.big) {
      celebrate();
      playSparkle();
    }
  }, [popCount, age, showToast]);

  const handlePop = useCallback(() => setPopCount((count) => count + 1), []);

  // Turning sound back on also starts the nasheed.
  const toggleMuted = useCallback(() => {
    if (muted) playNasheed();
    setMuted(!muted);
  }, [muted]);

  return (
    <>
      {!reducedMotion && <Balloons age={age} maxBalloons={maxBalloons} onPop={handlePop} paused={isOpen} />}

      <div className="pointer-events-none fixed inset-x-0 top-20 z-[55] flex justify-center px-4" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-xl border border-accent/30 bg-secondary-bg px-4 py-3 text-sm text-primary-text shadow-2xl"
            >
              <p className="flex-1 leading-snug">{toast.message}</p>
              {toast.action && (
                <button
                  type="button"
                  onClick={() => {
                    setToast(null);
                    openCelebration();
                  }}
                  className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-primary-bg transition-colors hover:bg-white"
                >
                  {toast.action}
                </button>
              )}
              <button
                type="button"
                onClick={() => setToast(null)}
                aria-label="Dismiss"
                className="shrink-0 p-1 text-secondary-text transition-colors hover:text-accent"
              >
                <FaTimes size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-8 left-4 z-[53] flex flex-col items-start gap-2">
        <AnimatePresence>
          {popCount > 0 && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="rounded-full border border-border-color bg-secondary-bg px-3 py-1 font-mono text-xs text-accent shadow-lg"
            >
              🎈 {popCount} popped
            </motion.span>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.4 } }}
        >
          <NasheedPlayer compact muted={muted} onToggleMute={toggleMuted} />
        </motion.div>
        <motion.button
          type="button"
          onClick={openCelebration}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 1, duration: 0.4 } }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F9A8D4] via-accent to-[#A7F3D0] px-4 py-3 font-bold text-primary-bg shadow-lg shadow-[#F9A8D4]/20"
        >
          <FaGift size={18} className="bday-wiggle" />
          <span className="hidden sm:inline">Send a birthday gift</span>
          <span className="sm:hidden">Gift</span>
        </motion.button>
      </div>

      <CelebrationModal
        isOpen={isOpen}
        onClose={closeCelebration}
        age={age}
        muted={muted}
        onToggleMute={toggleMuted}
      />
    </>
  );
};

export default BirthdayCelebration;
