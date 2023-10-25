import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Elevated Card Section</Text>
      <View style={styles.cardContainer}>
        <ScrollView horizontal={true}>
            <View style={styles.card}>
                <Text>Hello,</Text>
            </View>
            <View style={styles.card}>
                <Text>Tap</Text>
            </View>
            <View style={styles.card}>
                <Text>Me</Text>
            </View>
            <View style={styles.card}>
                <Text>And</Text>
            </View>
            <View style={styles.card}>
                <Text>Scroll</Text>
            </View>
            <View style={styles.card}>
                <Text>For</Text>
            </View>
            <View style={styles.card}>
                <Text>More</Text>
            </View>
            <View style={styles.card}>
                <Text>Content...</Text>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ElevatedCard

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
        backgroundColor: "gray",
        elevation: 4,
        shadowOffset :{
            width: 100,
            height: 100,
        },
        shadowColor: "black",
      },
})