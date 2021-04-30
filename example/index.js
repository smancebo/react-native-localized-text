/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { I18NProvider } from 'react-native-localized-text'

import { name as appName } from './app.json'
import App from './src/App'

import translations from './src/locales';

I18NProvider.setTranslations(translations, 'EN');


AppRegistry.registerComponent(appName, () => App)
