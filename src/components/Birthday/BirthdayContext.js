import { createContext, useContext } from 'react';

export const BirthdayContext = createContext({
  isBirthday: false,
  age: null,
  isOpen: false,
  openCelebration: () => {},
  closeCelebration: () => {},
});

export const useBirthday = () => useContext(BirthdayContext);
