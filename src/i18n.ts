/* eslint-disable simple-import-sort/exports */
//@ts-ignore
import i18n from 'i18n-js';

class I18N {
  static instance: I18N;

  static getInstance(): I18N {
    if (!this.instance) {
      this.instance = new I18N();
    }
    return this.instance;
  }

  translations: object;

  currentLocale: string;

  constructor() {
    this.translations = {};
    this.currentLocale = '';
  }

  setTranslations(translations: object, defaultLocale: string) {
    this.translations = translations;
    this.currentLocale = defaultLocale.toString();
  }

  changeCurrentLocale(locale: string) {
    this.currentLocale = locale;
  }
}

function setTranslations(translations: object, defaultLocale: string) {
  const instance = I18N.getInstance();
  console.log(translations);
  instance.setTranslations(translations, defaultLocale);
}

function changeCurrentLocale(locale: string) {
  const instance = I18N.getInstance();
  instance.changeCurrentLocale(locale);
}

function getI18n() {
  const instance = I18N.getInstance();
  i18n.translations = instance.translations;
  i18n.locale = instance.currentLocale;
  return i18n;
}

function getCurrentLocale() {
  const instance = I18N.getInstance();
  return instance.currentLocale;
}

export { setTranslations, changeCurrentLocale, getI18n, getCurrentLocale };
