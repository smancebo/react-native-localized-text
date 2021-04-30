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
        <Text style={styles.header} >English Translations</Text>
        
        {/* English */}
        <LocalizedText
          localeKey="firstname"
          style={styles.text}
          textTransform={TextTransform.CAPITAL}
        />
        <LocalizedText
          localeKey="lastname"
          style={styles.text}
          textTransform={TextTransform.CAPITALIZE}
        />
        <LocalizedText
          localeKey="age"
          style={styles.text}
        />
        <LocalizedText
          localeKey="address"
          style={styles.text}
        />
        
        <Text style={styles.header} >Spanish Translations</Text>
        
        {/* Spanish */}
        <LocalizedText localeKey="firstname" style={styles.text} locale="ES"  />
        <LocalizedText
          localeKey="lastname"
          style={styles.text}
          locale="ES"
          textTransform={TextTransform.LOWERCASE}
        />
        <LocalizedText localeKey="age" style={styles.text} locale="ES" />
        <LocalizedText
          localeKey="address"
          style={styles.text}
          locale="ES"
          textTransform={TextTransform.UPPERCASE}
        />

        <LocalizedText 
          localeKey="amountToPay"
          style={styles.text}
          interpolate={{
            amount: `100.00`
          }}
        />

        <LocalizedText
          localeKey="addressd"
          defaultValue="address"
          style={styles.text}
          locale="ES"
        />
      </View>
    </SafeAreaView>
  )
}

export default App
