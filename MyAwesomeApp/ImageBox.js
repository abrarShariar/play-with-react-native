import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';

export class ImageBox extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Image source={this.props.pic} style={styles.img}/>
    )
  }
}


const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '60%'
  }
});
