
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Loginpage from './loginpage';

const Landingpage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'LexendDeca': require('../assets/fonts/LexendDeca-Black.ttf'),
    'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Come in</Text>
        <Text style={styles.textthin}>Please Select one of the below to continue:</Text>
        <TouchableOpacity onPress={()=>{
          navigation.replace("LoginPage");
          
          
        }} style={[styles.button,{margin:20,backgroundColor:'#3C1361'}]}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("SignUpPage");
          
          
        }} style={[styles.button,{backgroundColor:'white'}]}>
          <Text style={[styles.buttontext,{color:'#3C1361'}]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Landingpage

const styles = StyleSheet.create({
  button: {
    shadowColor: 'white', // IOS
    shadowOffset: { height: -1, width: 3 }, // IOS (negative width for left shadow)
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    borderRadius: 20,
    elevation: 10, // Android
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: '#474747',
    borderRadius: 10,
    height: 332,
    width: 264,
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: 'white',
    fontFamily: 'LexendDeca',
    fontSize: 30,
  },
  buttontext:{
    color:'white',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 15,

  },
  textthin: {
    margin: 20,
    color: 'white',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});