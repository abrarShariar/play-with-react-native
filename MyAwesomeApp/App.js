import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ViewPagerAndroid, ActivityIndicator } from 'react-native';
import ImageBox from './ImageBox.js';
import MyTextBox from './MyTextBox.js';

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
      index: 0,
      showLoading: false
    };
    
    this.onClickMe = this.onClickMe.bind(this);
    
  }
  
  componentDidMount(){
    let newIndex = 0;
  }
  
  onClickMe(){
    this.setState({
      showLoading: !this.state.showLoading
    })
  }
  
  render() {
    const {imgList, index} = this.state;
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}
        onPageScroll={() => {console.log("YO")}}
        peekEnabled={true}
      >
        <View style={styles.pageStyle} key="1">
          <Text>First page</Text>
          
          <View style={styles.button}>
            <Button
              onPress={this.onClickMe}
              title="Click Me"
            ></Button>
          </View>
          
          <View>
            {this.state.showLoading ? <ActivityIndicator size="large" color="#0000ff"  /> : null}
          </View>
        </View>
        
        <View style={styles.pageStyle} key="2">
          <Text>Second page</Text>
        </View>
        
        <View style={styles.pageStyle} key="3">
          <Text>Third page</Text>
        </View>
      </ViewPagerAndroid>  
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 50
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
