import I18n from './i18n';
import {
  ITranslateOptions,
  TextTransform,
  transformText,
} from './localized-text';

function getTranslator(translations: object, defaultLocale: string) {
  const i18n = I18n.getInstance();
  i18n.init(translations, defaultLocale);
  return (
    localeKey: string,
    textTransformation?: TextTransform,
    options?: ITranslateOptions
  ) => {
    const { locale, defaultValue, interpolate } =
      options || ({} as ITranslateOptions);
    return transformText(
      i18n.getTranslatedText(localeKey, defaultValue, locale, interpolate),
      textTransformation
    );
  };
}

export default getTranslator;
