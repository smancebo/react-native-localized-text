import React, { useEffect } from 'react'
import { Text, SafeAreaView, Button } from 'react-native';
import { translate, TextTransform, changeCurrentLocale } from 'react-native-localized-text'


const App = () => {
 

  return (
    <SafeAreaView>
      <Text style={{ color: '#fff' }}>
        {translate('firstname', TextTransform.CAPITAL)}
      </Text>
      <Text style={{ color: '#fff' }}>
        {translate('lastname', TextTransform.CAPITAL)}
      </Text>

      <Button title="EN" onPress={() => changeCurrentLocale('EN')} />
      <Button title="ES" onPress={() => changeCurrentLocale('ES')} />
    </SafeAreaView>
  )
}

export default App
