
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// eslint-disable-next-line no-unused-vars
import Home from './src/components/Home/Home'; // Replace with your Home component
import Contact from './src/components/Contact/Contact'; // Replace with your Contact component
import About from './src/components/About/About'; // Replace with your About component
// eslint-disable-next-line no-unused-vars
import Details from './src/components/Details/Details'; // Replace with your Details component
import Entypo from 'react-native-vector-icons/Entypo'; // Import icons for tabs
import colors from './assets/Colors/colors'; // Replace with your color file
import HomeStack from './src/components/HomeStack/HomeStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Home (including Details screen)
// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={Home}
//         options={{ headerShown: false }} // Hide header for Home screen
//       />
//       <Stack.Screen
//         name="Details"
//         component={Details}
//         options={{ headerShown: false }} // Hide header for Details screen
//       />
//     </Stack.Navigator>
//   );
// };

//  Tab Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.gray, 
          tabBarStyle: styles.tabBar, 
          headerShown: false, 
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} /> // Home tab icon
            ),
          }}
        />
      
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="info-with-circle" size={size} color={color} /> // About tab icon
            ),
          }}
        />
          <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="phone" size={size} color={color} /> // Contact tab icon
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black, 
    height: 60, 
    paddingBottom: 10, 
  },
});


