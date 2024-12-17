/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../Details/Details';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import BikeDetails from '../payment/PayemntMetod';

import PaymentMethod from '../payment/PayemntMetod';


const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Cars"
          component={BikeDetails}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Payment"
          component={PaymentMethod}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  export default HomeStack;
