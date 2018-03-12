import React, { Component } from 'react';
import { Image } from 'react-native';

export class ImageBox extends Component {
  constructor()
  render() {
    return (
      <Image source={this.props.url} style={{width: 200, height: 200}}/>
    )
  }
}