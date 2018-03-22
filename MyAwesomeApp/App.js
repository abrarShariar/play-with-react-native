import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBox } from './ImageBox.js';

//components
export default class App extends React.Component {
  constructor(){
    this.state = {
      imgList: [
          { pic: 'https://i.pinimg.com/originals/93/1e/b8/931eb89217edc0750c50bea2bed9613e.jpg' },
          { pic: 'https://reactjs.org/logo-og.png' }    
        ],
      index: 0
    };
  }
  
  
  componentDidMount(){
    setTimeout(() => {
      
    })
  }
  
  
  render() {
    const pic = {
      uri: ''
    }; 
    
    return (
      <View>
        <ImageBox pic={pic}></ImageBox>
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
