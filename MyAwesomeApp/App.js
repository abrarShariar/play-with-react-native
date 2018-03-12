import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBox } from './ImageBox.js';
//componnets
export default class App extends React.Component {
  
  render() {
    return (
      <View>
        <ImageBox url="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"></ImageBox>
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
  text: {
    marginTop: '10px'
  }
});
