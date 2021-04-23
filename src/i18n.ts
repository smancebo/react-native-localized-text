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

  i18n: any;

  constructor() {
    this.translations = {};
    this.currentLocale = '';
    this.i18n = i18n;
  }

  setTranslations(translations: object, defaultLocale: string) {
    this.translations = translations;
    this.currentLocale = defaultLocale.toString();
    this.i18n.translations = translations;
    this.i18n.defaultLocale = defaultLocale;
    this.i18n.locale = defaultLocale;
  }

  changeCurrentLocale(locale: string) {
    this.currentLocale = locale;
    this.i18n.defaultLocale = locale;
    this.i18n.locale = locale;
  }
}

function setTranslations(translations: object, defaultLocale: string) {
  const instance = I18N.getInstance();
  instance.setTranslations(translations, defaultLocale);
}

function changeCurrentLocale(locale: string) {
  const instance = I18N.getInstance();
  instance.changeCurrentLocale(locale);
}

function getI18n() {
  const instance = I18N.getInstance();
  return instance.i18n;
}

function getCurrentLocale() {
  const instance = I18N.getInstance();
  return instance.currentLocale;
}

export { setTranslations, changeCurrentLocale, getI18n, getCurrentLocale };
