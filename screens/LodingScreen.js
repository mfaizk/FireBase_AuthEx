import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase'


export default class HomeScreen extends React.Component {

  static navigationOptions ={
    title:'Loading',
    headerShown:false
  
  }
  

componentDidMount(){
  firebase.auth().onAuthStateChanged((authenticate)=>{
    if (authenticate) {
      this,this.props.navigation.replace('Home')
    } else {
      this,this.props.navigation.replace('Signin')
    }
  })
}









  render(){
  return (
    <View style={styles.container}>
      <ActivityIndicator
      size='large'
      color='#45CE30'
      />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
