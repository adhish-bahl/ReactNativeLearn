import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function openWeb(siteURL) {
        Linking.openURL(siteURL);
    }
    
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeading}>Action Card</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card]}>
                    <Text style={styles.cardHeading}>What's new in JavaScript 21</Text>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGIzqmgH0LrZX6LcygJKMfG0D2UOOxCzVgw&usqp=CAU" }} style={styles.cardImage} />
                    <Text style={styles.cardBody}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus distinctio eveniet, amet numquam exercitationem harum veniam dicta incidunt excepturi neque nobis earum fuga rerum quasi sequi architecto velit beatae eos.</Text>
                    <View style={styles.cardFooter}>
                        <TouchableOpacity onPress={() => openWeb("https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2021-with-examples-3hfm")}>
                            <Text style={styles.cardButton}>Read More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

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
        // width: 100,
        // height: 100,
        borderRadius: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: "#e64a19",
        paddingBottom: 10,
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: '900',
        margin: 5,
    },
    cardImage: {
        width: 350,
        height: 200,
        borderRadius: 5,
    },
    cardBody: {
        margin: 8,
        fontSize: 18,
    },
    cardFooter: {
        margin: 5,
    },
    cardButton: {
        backgroundColor: "black",
        height: 40,
        width: 160,
        borderRadius: 6,
        fontSize: 16,
        margin: 0,
        textAlign: "center",
        textAlignVertical: "center",
    },
})