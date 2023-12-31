import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import Contacts from './components/Contacts'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.appHeading}>Styling Test App</Text>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <Contacts />
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