import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import config from './config';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    // Only attempt to load the base language, for example only attempt en and not en-US
    load: "languageOnly",
    namespaces: ['common', 'dashboard', 'footer', 'lists', 'location', 'login', 'query-log'],
    defaultNS: "common",
    fallbackNS: ['dashboard', 'footer', 'lists', 'location', 'login', 'query-log'],
    nsSeparator: false,
    keySeparator: false,
    debug: config.developmentMode,
    interpolation: {
      // Handled by React
      escapeValue: false
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + "/i18n/{{lng}}/{{ns}}.json"
    },
    react: {
      // Wait until translations are loaded before rendering
      wait: true
    }
  });

export default i18n;
