/* eslint-disable simple-import-sort/exports */
//@ts-ignore
import i18n from 'i18n-js';

class I18n {
  i18n: any;

  static instance: I18n;

  constructor(translations?: object, defaultLocale?: string) {
    this.init(translations, defaultLocale);
  }

  init(translations?: object, defaultLocale?: string) {
    this.i18n = i18n;
    this.i18n.translations = translations;
    this.i18n.locale = defaultLocale;
    this.i18n.defaultLocale = defaultLocale;
  }

  setTranslations(translations: object, defaultLocale: string) {
    this.init(translations, defaultLocale);
    I18n.instance = new I18n(translations, defaultLocale);
  }

  getTranslatedText(
    localeKey: string,
    defaultValue?: string,
    locale?: string,
    interpolate?: object
  ) {
    return this.i18n.t(localeKey, {
      ...(defaultValue ? { defaultValue } : {}),
      ...(locale ? { locale } : {}),
      ...(interpolate ? { ...interpolate } : {}),
    });
  }

  static getInstance() {
    if (!I18n.instance) {
      I18n.instance = new I18n();
    }
    return I18n.instance;
  }
}

export default I18n;
