import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.appHeading}>Styling Test App</Text>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appHeading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
})

export default App