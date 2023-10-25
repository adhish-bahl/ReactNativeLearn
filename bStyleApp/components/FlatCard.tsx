import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.sectionHeading}>Flat Cards Section</Text>
      <View style={styles.cardContainer}>
        <Text style={[styles.card, styles.cardOne]}>Red</Text>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
  sectionHeading: {},
  cardContainer: {},
  card: {},
  cardOne: {},
})