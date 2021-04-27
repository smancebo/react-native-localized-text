import * as React from 'react';
import { Text, TextProps } from 'react-native';

import I18n from './i18n';

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

export const transformText = (
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

const LocalizedLabel = (props: ILocalizedLabelProps) => {
  const {
    localeKey,
    locale,
    interpolate = undefined,
    defaultValue,
    textTransform = TextTransform.NONE,
  } = props;

  const text = I18n.getInstance().getTranslatedText(
    localeKey,
    defaultValue,
    locale,
    interpolate
  );
  return <Text {...props}>{transformText(text, textTransform)}</Text>;
};

export default LocalizedLabel;
