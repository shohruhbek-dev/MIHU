// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from '/public/languages/uz.json';
import ruTranslation from '/public/languages/ru.json';
import enTranslation from '/public/languages/eng.json';

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(initReactI18next)
  .init({
    lng: language,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation },
      en: { translation: enTranslation },
    },
  });

export default i18n;
