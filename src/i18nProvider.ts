import I18n from './i18n';

interface I18NProviderType {
  setTranslations: (translations?: object, defaultLocale?: string) => void;
}

const I18NProvider: I18NProviderType = {
  setTranslations: (translations?: object, defaultLocale?: string) => {
    I18n.getInstance().init(translations, defaultLocale);
  },
};

export default I18NProvider;
