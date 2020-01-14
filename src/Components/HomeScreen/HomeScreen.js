import React from 'react';
import { ImageBackground, Dimensions, StyleSheet, Text} from 'react-native';

import {
  Container,
  Button,
  Icon,
} from 'native-base';

const cardImage = require('../../Media/background.png');

import HeaderComponent from '../Header/HeaderComponent';



export default class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <HeaderComponent Navigate={this.props.navigation} />
        <Container>
          <ImageBackground
            source={cardImage}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}>
            <Button
              light
              onPress={() => this.props.navigation.navigate('Settings')}>
              <Text style={{fontSize: 25, color: 'blue'}}>Go to Settings</Text>
            </Button>
            <Button>
              <Text>Info</Text>
            </Button>
            <Button
              title="Open Drawer"
              onPress={() => this.props.navigation.openDrawer()}></Button>

            <Icon
              style={{fontSize: 45, color: 'white'}}
              type="FontAwesome"
              name="home"
            />
         

            <Button
              light
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{ fontSize: 25, color: 'blue' }}>Login</Text>
            </Button>

            <Button
              light
              onPress={() => this.props.navigation.navigate('Loading')}>
              <Text style={{ fontSize: 25, color: 'blue' }}>Loading</Text>
            </Button>
      
          </ImageBackground>
        </Container>
      </>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#fff',
    borderWidth: 1,
  },
});