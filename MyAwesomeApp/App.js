import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBox } from './ImageBox.js';

//components
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imgList: [
          { uri: 'https://i.pinimg.com/originals/93/1e/b8/931eb89217edc0750c50bea2bed9613e.jpg' },
          { uri: 'https://reactjs.org/logo-og.png' }  ,
          { uri: 'https://vignette.wikia.nocookie.net/metin2/images/f/f9/Superman-logo.gif/revision/latest?cb=20100221080217&path-prefix=it' },
          { uri: 'http://www.vectortemplates.com/raster/batman-logo.gif'}  
        ],
      index: 0
    };
  }
  
  
  componentDidMount(){
    let newIndex = 0;
    // setInterval(() => {
    //   this.setState({
    //     index: newIndex
    //   });
    //   newIndex = this.state.index >= this.state.imgList.length - 1 ? 0 : this.state.index + 1;
    // }, 3000);
  }
  
  render() {
    const {imgList, index} = this.state;
    return (
      <View>
        <Text>Hello World</Text>
        <ImageBox pic={imgList[index]}></ImageBox>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'stretch'}}>
          <View style={{height: 50, backgroundColor: 'powderblue'}} > 
            <Text>Hello World</Text>
          </View>
          <View style={{height: 50, backgroundColor: 'skyblue'}}>
            <Text>Hello World</Text>
          </View>
          <View style={{height: 50, backgroundColor: 'steelblue'}}>
            <Text> Hello World</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        </View>
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
