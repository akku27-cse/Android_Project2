import {
  Alert,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../assets/Colors/colors';
//import { ScrollView } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
  // Fetch the list value that is assigned in Home.Jsx File
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground source={item.image} style={styles.backgroundImage}>
          {/* BacIcon */}
          <TouchableOpacity
            style={styles.BackIcon}
            onPress={() => navigation.goBack()}
          >
            <Entypo name="chevron-left" size={42} color={colors.orange} />
          </TouchableOpacity>

          {/* Title and Price */}
          <View style={styles.titleWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>RS ₹ {item.price}</Text>
            </View>
          </View>
        </ImageBackground>

        {/* Description */}
        <View style={styles.descriptionWrapper}>
          <Text style={styles.DescriptionItemTitle}>Description</Text>
          <Text style={styles.DescriptionItem}>{item.description}</Text>

          {/* Rating, Price, Mileage in Single Row */}
          <View style={styles.Info}>
            <View style={styles.InfoItem}>
              <Text style={styles.infoLabel}>Price</Text>
              <Text style={styles.infoValue}>RS ₹ {item.price}</Text>
            </View>
            <View style={styles.InfoItem}>
              <Text style={styles.infoLabel}>Mileage</Text>
              <Text style={styles.infoValue}>{item.milge} km</Text>
            </View>
            <View style={styles.InfoItem}>
              <Text style={styles.infoLabel}>Rating</Text>
              <Text style={styles.infoValue}>{item.rating} ★/5</Text>
            </View>
          </View>

          {/* Buy Now Button */}
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.ButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: 'space-between',
  },
  BackIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  priceWrapper: {
    marginTop: 24,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingBottom: 20, // Add padding for better spacing
  },
  DescriptionItemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  DescriptionItem: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
  Info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  InfoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'gray',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
