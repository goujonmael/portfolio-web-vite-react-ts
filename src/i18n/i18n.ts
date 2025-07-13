import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { frTranslations } from './locales/fr';
import { enTranslations } from './locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
