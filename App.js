import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import{createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from'./screens/HomeScreen'
import LoadingScreen from'./screens/LodingScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'

var firebaseConfig = {
 use Your Own From YOur account
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const MainNavigator =createStackNavigator(
  {
  Loading:{screen:LoadingScreen},
  Signin:{screen:SigninScreen},
  Signup:{screen:SignupScreen},
  Home:{screen:HomeScreen}
},{
  initialRouteName:'Loading'
}
)

const App =createAppContainer(MainNavigator)
export default App
