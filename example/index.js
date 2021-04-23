/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { setTranslations } from 'react-native-localized-text'

import { name as appName } from './app.json'
import App from './src/App'

setTranslations({
  EN: { firstname: 'first name', lastname: 'last name'},
  ES: { firstname: 'primer nombre', lastname: 'apellido'},
}, 'EN')

AppRegistry.registerComponent(appName, () => App)
