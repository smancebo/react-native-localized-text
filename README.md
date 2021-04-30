# react-native-localized-text
Simple to use React Native Text Translation component

## Installation

```bash
npm i react-native-localized-text
```

or

```bash
yarn add react-native-localized-text
```

## Initialization

First we need to create the dictionary we are going to use to translate the strings on the app, this dictionary are JavaScript object, each key of the object represent one string on the app

```javascript
//locales/en.js -> translations file for English
export default {
  firstname: 'first name',
  lastname: 'last name',
  age: 'age',
  address: 'address',
}

//locales/es.js -> translations file for Spanish
export default {
  firstname: 'nombre',
  lastname: 'apellido',
  age: 'edad',
  address: 'direccion',
}

//locales/index.js
import EN from './en';
import ES from './es';

export default {
  EN,
  ES
}
```

Then we need to initialize the library with this dictionaries in the __index.js__ root file

```javascript
//index.js
import { AppRegistry } from 'react-native';
import { I18NProvider } from 'react-native-localized-text';
import App from './App';
import { name as appName } from './app.json';
//import the dictionaries
import translations from './locales';

//set dictionaries to the library;
I18NProvider.setTranslations(
  translations, // Object with translations
  'EN' // Default language
);

AppRegistry.registerComponent(appName, () => App);
```


##  Usage

```js
import React, { useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { LocalizedText, TextTransform } from 'react-native-localized-text'

const styles = StyleSheet.create({
  text: { color: '#fff' },
  header: { color: '#fff', fontSize: 20, marginVertical: 30 },
  container: { paddingHorizontal: 20 }
})

const App = () => {
 
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header} >
          English Translations
        </Text>
        
        {/* English */}
        <LocalizedText
          localeKey="firstname"
          style={styles.text}
          textTransform={TextTransform.CAPITAL}
        />
        <LocalizedText
          localeKey="lastname"
          style={styles.text}
          textTransform="capitalize"
        />
        <LocalizedText
          localeKey="age"
          style={styles.text}
        />
        <LocalizedText
          localeKey="address"
          style={styles.text}
        />
        
        <Text style={styles.header}>
          Spanish Translations
        </Text>
        
        {/* Spanish */}
        <LocalizedText
          localeKey="firstname" 
          style={styles.text} 
          locale="ES"  
        />
        <LocalizedText
          localeKey="lastname"
          style={styles.text}
          locale="ES"
          textTransform="lowercase"
        />
        <LocalizedText 
          localeKey="age"
          style={styles.text}
          locale="ES"
        />
        <LocalizedText
          localeKey="address"
          style={styles.text}
          locale="ES"
          textTransform="uppercase"
        />
      </View>
    </SafeAreaView>
  )
}

export default App

```
![example1](https://i.imgur.com/cJK00NU.png)

## String Interpolation

This is a powerfull feature that let you replace some part text inside a __LocalizedText__ component

```javascript
//locales/en.js -> translations file for English
export default {
  firstname: 'first name',
  lastname: 'last name',
  age: 'age',
  address: 'address',
  amountToPay: 'total amount to pay is {{amount}} including taxes'
}

//locales/es.js -> translations file for Spanish
export default {
  firstname: 'nombre',
  lastname: 'apellido',
  age: 'edad',
  address: 'direccion',
  amountToPay: 'el monto total a pagar es de {{amount}} incluyendo impuestos'
}

//app.js
<LocalizedText 
  localeKey="amountToPay"
  style={styles.text}
  interpolate={{
    amount: `100.00`
  }}
/>
```

## Translate Function
Sometimes we need to do translations in other places outside a React components, for that reason we expose a __`getTranslator`__ factory function thet returns a __`translate`__ function loaded with the dictionaries

```javascript
type Options = {
  locale?: string;
  interpolate?: object;
  defaultValue?: string;
}

translate (
  localeKey: string,
  TextTransformation?: string,
  options?: Options
) => string
```

```javascript
//locales/index.js
import EN from './en';
import ES from './es';
import { getTranslator } from 'react-native-localized-text';

const TRANSLATIONS = {
  EN,
  ES
}

export const translate = getTranslator(TRANSLATIONS, 'EN');
export default TRANSLATIONS;


//app.js
import React, { useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextTransform } from 'react-native-localized-text'
import { translate } from './locales';

const options = [
  { name: translate('firstname', TextTransform.CAPITAL) },
  { 
    name: translate(
      'amountToPay',
      TextTransform.NONE, {
        interpolate: { amount: 100 }
      }) 
  },
]

const styles = StyleSheet.create({
  text: { color: '#fff' },
  header: { color: '#fff', fontSize: 20, marginVertical: 30 },
  container: { paddingHorizontal: 20 }
})


const App = () => {
 
  return (
    <SafeAreaView>
     <View style={style.container}>
      {
        options.map((item) => {
          return (
            <Text>{item.name}</Text>
          )
        })
      }
     </View>
      
    </SafeAreaView>
  )
}

export default App
```



## LocalizedText Props

| Prop               | Description                          | Type     | Default                                                   |
| :----------------- | :----------------------------------- | :------- | :-------------------------------------------------------- |
| localeKey          | Dictionary key to translate          | `string`   | __`required`__                                                     |
| locale             | Force specific locale on component   | `string`   | -                                                     |
| interpolate        | String interpolation object          | `Object`   | -                                                         |
| defaultValue       | Default key if supplied localeKey, is missing   | `string`   | -                       |
| textTransform      | Apply text transformation to returned text      | `none` or `uppercase` or `lowercase` or `capital` or `capitalize`   | `none` |
| ...textProps       | Support all React Native Text Props  | -        | -                                                     |                                               

## Contributing

Pull requests are welcome.