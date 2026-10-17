// Birthday celebration settings. The celebration only runs on the birthday
// (Nigeria time) and comes back on its own every year.
export const BIRTH_DATE = { year: 2003, month: 10, day: 18 };

export const GIFT_ACCOUNT = {
  bank: 'OPay',
  accountNumber: '9157750858',
  // Shown on the gift card when set, so people can confirm before sending.
  accountName: '',
};

export const WISH_EMAIL = 'kobiowuq@gmail.com';

// Nigeria (WAT) is UTC+1 all year, with no daylight saving.
const LAGOS_OFFSET_MS = 60 * 60 * 1000;

// Returns today's date in Lagos as "YYYY-MM-DD".
export const getLagosDateKey = (date = new Date()) =>
  new Date(date.getTime() + LAGOS_OFFSET_MS).toISOString().slice(0, 10);

export const getBirthdayInfo = (dateKey, preview = false) => {
  const [year, month, day] = dateKey.split('-').map(Number);
  const isBirthday = preview || (month === BIRTH_DATE.month && day === BIRTH_DATE.day);
  const hadBirthdayThisYear =
    month > BIRTH_DATE.month || (month === BIRTH_DATE.month && day >= BIRTH_DATE.day);
  const currentAge = year - BIRTH_DATE.year - (hadBirthdayThisYear ? 0 : 1);

  // While celebrating (including previews), show the age being celebrated this year.
  return { isBirthday, age: isBirthday ? year - BIRTH_DATE.year : currentAge };
};

// Add ?birthday to any URL to preview the celebration on other days.
export const isPreviewRequested = () =>
  new URLSearchParams(window.location.search).has('birthday');
