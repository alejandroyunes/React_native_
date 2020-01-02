import React from 'react';
import {ImageBackground, Dimensions, View, Text, StatusBar} from 'react-native';

import {
  Container,
  StyleProvider,
  Button,
  Header,
  Title,
  Icon,
  Left,
  Right,
  Body,
} from 'native-base';

const cardImage = require('../../Media/background.png');

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

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
                <Text>Go to Settings</Text>
              </Button>
              <Button>
                <Text>Info</Text>
              </Button>
              <Button
                title="Open Drawer"
                onPress={() => this.props.navigation.openDrawer()}></Button>
            </ImageBackground>
          </Container>

      </>
    );
  }
}
