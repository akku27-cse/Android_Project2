import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

const ContactPage = () => {
  //createing a object of own details
  const contactDetails = {
    name: 'Santu Jana',
    email: 'santujana1827@gmail.com',
    address: 'Dakshin Narikelda, Nandakumar, Purba Medinipur, 721648',
    phone: '+91 8945007301',
  };

  const handleCall = () => {
    Linking.openURL(`tel:${contactDetails.phone}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${contactDetails.email}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contact Us</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{contactDetails.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{contactDetails.email}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{contactDetails.address}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{contactDetails.phone}</Text>
{/**For call And Email btn */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={handleCall}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleEmail}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  value: {
    fontSize: 24,
    marginTop: 4,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContactPage;
