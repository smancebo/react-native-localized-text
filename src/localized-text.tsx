import React from 'react';
import { Text, TextProps } from 'react-native';

import i18n from './i18n';

export enum TextTransform {
  CAPITAL = 'capital',
  CAPITALIZE = 'capitalize',
  LOWERCASE = 'lowercase',
  UPPERCASE = 'uppercase',
  NONE = 'none',
}

export interface ILocalizedLabelProps extends TextProps {
  localeKey: string;
  textTransform?: TextTransform;
  locale?: string;
  interpolate?: object;
  defaultValue?: string;
}

export interface ITranslateOptions {
  locale?: string;
  interpolate?: object;
  defaultValue?: string;
}

const capitalize = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
const capital = (text: string) =>
  `${text.toLowerCase()[0].toUpperCase()}${text.slice(1)}`;
const lowercase = (text: string) => text.toLowerCase();
const uppercase = (text: string) => text.toUpperCase();

const transformText = (
  text: string,
  textTransformation: TextTransform = TextTransform.NONE
) => {
  switch (textTransformation) {
    case TextTransform.CAPITALIZE:
      return capitalize(text);
    case TextTransform.CAPITAL:
      return capital(text);
    case TextTransform.LOWERCASE:
      return lowercase(text);
    case TextTransform.UPPERCASE:
      return uppercase(text);
    case TextTransform.NONE:
      return text;
    default:
      return text;
  }
};

const getTranslatedText = (
  localeKey: string,
  defaultValue?: string,
  locale?: string,
  interpolate?: object
) =>
  i18n.t(localeKey, {
    ...(defaultValue ? { defaultValue } : {}),
    ...(locale ? { locale } : {}),
    ...(interpolate ? { ...interpolate } : {}),
  });

export const translate = (
  localeKey: string,
  textTransformation?: TextTransform,
  options?: ITranslateOptions
) => {
  const { locale, defaultValue, interpolate } =
    options || ({} as ITranslateOptions);

  return transformText(
    getTranslatedText(localeKey, defaultValue, locale, interpolate),
    textTransformation
  );
};

const LocalizedLabel = (props: ILocalizedLabelProps) => {
  const {
    localeKey,
    locale,
    interpolate = undefined,
    defaultValue,
    textTransform = TextTransform.NONE,
  } = props;

  const text = getTranslatedText(localeKey, defaultValue, locale, interpolate);
  return <Text {...props}>{transformText(text, textTransform)}</Text>;
};

export default LocalizedLabel;
