import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Contacts = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>Contacts Section</Text>
      <ScrollView style={styles.cardContainer}>
        {contacts.map(({ uid, name, status, imageUrl }) => {
          return (
            <View key={uid} style={[styles.card]}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.cardImage}
              />
              <View>
                <Text style={styles.cardHeading}>{name}</Text>
                <Text style={styles.cardBody}>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Contacts;

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
    width: 370,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 3,
    padding: 6,
    backgroundColor: "#3b0718",
    paddingBottom: 10,
    flexDirection: "row",
},
cardHeading: {
    fontSize: 26,
    fontWeight: '900',
    margin: 5,
},
cardImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
},
cardBody: {
    margin: 8,
    fontSize: 18,
},

});
