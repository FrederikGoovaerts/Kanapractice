export const environment = {
  BASE_URL: process.env.BASE_URL || '',
};

export const routes = {
  about: '/about',
  hiragana: {
    path: '/hiragana',
    subpathFlashCards: '/flash-cards',
    subpathQuickReading: '/quick-reading',
  },
  katakana: {
    path: '/katakana',
    subpathFlashCards: '/flash-cards',
    subpathQuickReading: '/quick-reading',
  },
  numbers: '/numbers',
  root: '/',
};
