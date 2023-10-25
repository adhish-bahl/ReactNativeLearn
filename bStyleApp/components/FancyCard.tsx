import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Fancy Card Section</Text>
      <View style={styles.cardContainer}>
        <ScrollView horizontal>
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:"https://images.unsplash.com/photo-1600304894683-cd9731d4e0eb?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
            <Text style={styles.cardHeading}>Lovely Landscape</Text>
            <Text style={styles.cardLabel}>Somewhere on Earth</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur alias magnam hic tenetur beatae asperiores praesentium eveniet, perspiciatis atque, sequi maxime eum vel? Deleniti harum et quisquam molestiae expedita.</Text>
            <Text style={styles.cardFooter}>Out of reach for you!</Text>
        </View>
        <View style={styles.card}>
            <Image style={styles.cardImage} source={{uri:"https://images.unsplash.com/photo-1600304894683-cd9731d4e0eb?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} />
            <Text style={styles.cardHeading}>Lovely Landscape</Text>
            <Text style={styles.cardLabel}>Somewhere on Earth</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur alias magnam hic tenetur beatae asperiores praesentium eveniet, perspiciatis atque, sequi maxime eum vel? Deleniti harum et quisquam molestiae expedita.</Text>
            <Text style={styles.cardFooter}>Out of reach for you!</Text>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default FancyCard

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
        borderRadius: 5,
        margin: 8,
        backgroundColor: "#632f0e",
        elevation: 4,
        shadowOffset :{
            width: 100,
            height: 100,
        },
        shadowColor: "black",
        paddingBottom: 15,
        width: "auto"
    },
    cardImage: {
        width: 400,
        height: 200,
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: "900",
        margin: 5,
    },
    cardLabel: {
        marginLeft: 10,
    },
    cardDescription: {
        margin: 8, 
        textAlign: "center"
    },
    cardFooter: {
        marginLeft: 10,
        fontWeight: "800",
        fontSize: 16
    }
})