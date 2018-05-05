import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class MyTextBox extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      inputText: ''
    }
  }
  
  _onChangeText = (text) => {
    this.setState({
      inputText: text
    });
  }
  
  render() {
    return (
      <View>
       <TextInput
          style={{padding: 10}} 
          placeholder="Type your text here"
          onChangeText={this._onChangeText}
        /> 
        <Text
          style={{padding: 10, color: 'blue'}}
        >
          {this.state.inputText}
        </Text>     
      </View>
    );
  }
}