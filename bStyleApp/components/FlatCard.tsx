import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Flat Cards Section</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Orange</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 10,
  },
  sectionHeading: {
    fontSize: 23,
  },
  cardContainer: {
    margin: 10,
    flexDirection: "row",
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  cardOne: {
    backgroundColor: "red",
  },
  cardTwo: {
    backgroundColor: "green",
  },
  cardThree: {
    backgroundColor: "blue",
  },
  cardFour: {
    backgroundColor: "orange",
  },
})