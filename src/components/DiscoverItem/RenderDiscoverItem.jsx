import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import colors from '../../../assets/Colors/colors';
import discoverData from '../../../assets/Data/discoverData';

    const RenderDiscoverItem = ({item,navigation}) => {
        return (
          <TouchableOpacity
            style={styles.discoverItemWrapper}
            onPress={() => navigation.navigate('Details', {item: item})}>
            <ImageBackground
              source={item.image}
              style={styles.discover}
              imageStyle={styles.disCoverItemImage}>
              <View style={styles.discoverItemLocationWrapper}>
                <Text style={styles.discoverItemTitle}>{item.title}</Text>
                <Text style={styles.disCoverItemprice}>RS ₹ {item.price}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      };


export default RenderDiscoverItem
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    menuWrapper: {
      marginHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    logo: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'red',
    },
    logoText: {
      fontSize: 35,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 40,
    },
    searchBar: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: 'gray',
      marginVertical: 10,
    },
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    button: {
      backgroundColor: colors.primary, // Use your primary color from colors.js
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    activeButton: {
      backgroundColor: 'green', // Change to green when the button is active
    },
    buttonText: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    discoverItemWrapper: {
      flex: 1,
      margin: 5,
    },
    discover: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 10,
      overflow: 'hidden',
    },
    disCoverItemImage: {
      borderRadius: 10,
    },
    discoverItemLocationWrapper: {
      position: 'absolute',
      bottom: 10,
      left: 10,
    },
    discoverItemTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    disCoverItemprice: {
      fontSize: 20,
      color: 'white',
      marginTop: 5,
    },
  });