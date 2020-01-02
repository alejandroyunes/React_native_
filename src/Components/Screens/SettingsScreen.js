import React from 'react';
import {ImageBackground, Dimensions, View, Text} from 'react-native';

import {Container, StyleProvider, Button} from 'native-base';

const cardImage = require('../../Media/background.png');
import HeaderComponent from '../Header/HeaderComponent';

export default class SettingsScreen extends React.Component {
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
                success
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text>go to home</Text>
              </Button>
              <Button>
                <Text>Info</Text>
              </Button>
              <Button
                title="Open Drawer"
                onPress={() => this.props.navigation.openDrawer()}></Button>

              <Button light><Text> Light </Text></Button>
            </ImageBackground>
          </Container>

      </>
    );
  }
}
