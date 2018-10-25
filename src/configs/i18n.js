import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import tr from '@/translations/tr-TR.json';
import en from '@/translations/en-US.json';


i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      'tr-TR': { translations: tr },
      'en-US': { translations: en },
    },
    interpolation: { escapeValue: false },
    fallbackLng: 'en-US',
    ns: ['translations'],
    defaultNS: 'translations',
    react: {
      wait: true,
      omitBoundRerender: false,
      bindI18n: 'languageChanged',
    },
  });


export default i18n;
