import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SoundButton  from './Sound.js'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render(){
    return (
      <View style={styles.container}>
        <SoundButton sound={'./assets/sfx/sound1.m4a'}></SoundButton>
        <SoundButton sound={'./assets/sfx/sound2.m4a'}></SoundButton>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
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