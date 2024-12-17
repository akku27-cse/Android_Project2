import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
    <View>
      <View>
        <Text style={styles.Heading}>About</Text>
      </View>
      <Text style={styles.Child}>
        Welcome to cBook Mobile Application, your ultimate destination for
        premium services and exceptional experiences. Our goal is to bring
        innovative solutions and unmatched quality to our customers. We believe
        in building trust and fostering long-term relationships.
      </Text>
      </View>
      

      <View style={styles.card}>
      <View>
        <Text style={styles.Heading}>Our Mission</Text>
      </View>
      <Text style={styles.Child}>
        Our mission is to inspire and empower businesses and individuals to
        achieve their goals through creativity, innovation, and a customer-first
        approach.
      </Text>
    </View>
    </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  Child: {
    fontSize: 25,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
