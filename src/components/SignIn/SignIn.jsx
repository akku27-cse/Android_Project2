/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

const SignIn = ({navigation}) => {
  return (
    <View style={style.mainView}>
      <ScrollView>
      <View style={style.topVIew}>
        <Text style={style.logo}>
          c<Text style={style.span}>Book</Text>
        </Text>
      </View>
      <View style={style.buttomVIew}>
        <Text style={style.heading}>Welcome Back</Text>
        <View style={style.formView}>
          <TextInput
            placeholder={'Enter Email *'}
            placeholderTextColor={'#fff'}
            style={style.textInput}
          />
          <TextInput
            placeholder={'Password *'}
            secureTextEntry={true}
            placeholderTextColor={'#fff'}
            style={style.textInput}
          />
          <TouchableOpacity style={style.button}>
            <Text style={style.Btn} onPress={()=>navigation.navigate('Payment')}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.DontAccount}> Don't Have An Account?</Text>
        <TouchableOpacity style={style.signUpBtn} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={style.sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: '#FF0000',
  },
  topVIew: {
    width: '100%',
    height: '20%',
    backgroundColor: '#FF0000',
    borderRadius: 30,
  },
  buttomVIew: {
    width: '100%',
    height: '80%',
    backgroundColor: '#000',
    borderRadius: 15,
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 110,
    marginTop: 80,
    //marginRight:60
  },
  span: {
    color: '#008000',
  },
  heading: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 39,
    marginRight: 60,
    marginTop: 30,
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 43,
  },
  textInput: {
    fontSize: 25,
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 62,
    borderRadius: 12,
    paddingLeft: 15,
    marginTop: 50,
    color: '#fff',
  },
  button: {
    width: '80%',
    color: '#000',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Btn: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  DontAccount: {
    marginTop: 40,
    fontSize: 25,
    color: 'gray',
    marginLeft: 67,
  },
  sign: {
    fontSize: 30,
    //backgroundColor:'#fff',
    color: 'gray',
  },
  signUpBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 3,
    marginTop: 15,
  },
});

export default SignIn;
