import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en-us.json'
import pt from './locales/pt-br.json'

const resources = {
  pt: {
    translations: pt
  },
  en: {
    translations: en
  }
}

i18n.use(LanguageDetector).init({
  // we init with resources
  resources,
  fallbackLng: 'pt',
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
})

export default i18n
