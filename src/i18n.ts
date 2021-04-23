//@ts-ignore
import i18n from 'i18n-js';

// CHANGE THIS TO GET THE LANGUAGE FROM THE DEVICE
let currentLocale;
const setTranslations = (locales: object, defaultLocale: string) => {
  i18n.translations = locales;
  i18n.locale = defaultLocale;
  currentLocale = defaultLocale;
};
const changeCurrentLocale = (locale: string) => {
  i18n.locale = locale;
  currentLocale = locale;
};

export { changeCurrentLocale, currentLocale, setTranslations };
export default i18n;
