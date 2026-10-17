import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { BirthdayContext } from './BirthdayContext';
import { getBirthdayInfo, getLagosDateKey, isPreviewRequested } from './birthdayConfig';

// Loaded only on the birthday, so the rest of the year ships none of it.
const BirthdayCelebration = lazy(() => import('./BirthdayCelebration'));

const BirthdayProvider = ({ children }) => {
  const [dateKey, setDateKey] = useState(getLagosDateKey);
  const [preview] = useState(isPreviewRequested);
  const [isOpen, setIsOpen] = useState(false);

  // Re-check the date every minute so the party starts and ends at midnight.
  useEffect(() => {
    const interval = setInterval(() => setDateKey(getLagosDateKey()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const { isBirthday, age } = getBirthdayInfo(dateKey, preview);
  const openCelebration = useCallback(() => setIsOpen(true), []);
  const closeCelebration = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isBirthday, age, isOpen: isBirthday && isOpen, openCelebration, closeCelebration }),
    [isBirthday, age, isOpen, openCelebration, closeCelebration]
  );

  return (
    <BirthdayContext.Provider value={value}>
      {children}
      {isBirthday && (
        <Suspense fallback={null}>
          <BirthdayCelebration />
        </Suspense>
      )}
    </BirthdayContext.Provider>
  );
};

export default BirthdayProvider;
