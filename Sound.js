import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default class SoundButton extends Component {
  //constructor
  constructor(props){
    super(props);
    this.state ={
      sound: this.props.sound,
    }
  }

  //on mount load sound
  async componentDidMount() {
    try {
      const { sound } = this.props.sound;
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(sound);
      this.setState({ soundObject });
    } catch (error) {
      console.warn(`Failed to load sound file: ${this.props.sound}`, error);
    }
  }

  // unmount kill sound
  async componentWillUnmount(){
    const { soundObject } = this.state;
    if( soundObject ){
      soundObject.stopAsync();
      soundObject.unloadAsync(); 
    }
  }

  //Render Function
  render(){
    return (
      <Pressable style={styles.button}>
        <Text>Sound</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      width: 100,
      borderRadius: 20
    },
  });