import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../../assets/Colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import discoverData from '../../../assets/Data/discoverData';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter discoverData seachquery
  const filteredData = discoverData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.discoverItemWrapper}
        onPress={() => navigation.navigate('Details', { item: item })}
      >
        <ImageBackground
          source={item.image}
          style={styles.discover}
          imageStyle={styles.disCoverItemImage}
        >
          <View style={styles.discoverItemLocationWrapper}>
            <Text style={styles.discoverItemTitle}>{item.title}</Text>
            <Text style={styles.disCoverItemprice}>RS ₹ {item.price}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/** Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Text style={styles.logo}>
              c<Text style={{ color: 'black', fontSize: 42 }}>B</Text>ook
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => alert('Notifications clicked')}>
                <Feather name="bell" size={28} color={colors.black} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Settings clicked')}>
                <Feather name="settings" size={28} color={colors.black} />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        {/** Search Bar */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search car"
            autoCorrect={false}
            onChangeText={(query) => handleSearch(query)}
          />
          <TouchableOpacity>
            <Feather name="search" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>

        {/** Introduction */}
        <View>
          <Text style={styles.logoText}>
            Discover The easiest way to buy a car.
          </Text>
        </View>

        {/** Line */}
        <View style={styles.line} />

        {/** Data */}
        <View>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'blue' }}>
            Cars
          </Text>

          {/* Display filtered data based on search */}
          <FlatList
  data={filteredData} // Use filtered data here
  renderItem={renderDiscoverItem}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={true}
  contentContainerStyle={{ paddingHorizontal: 10 }}
/>

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

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
