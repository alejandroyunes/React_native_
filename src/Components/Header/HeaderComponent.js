import React from 'react';
import { Dimensions, View, Text, StatusBar} from 'react-native';

import {Container, StyleProvider, Button, Header, Title, Icon, Left, Right, Body} from 'native-base';

export default class HeaderComponent extends React.Component {
  render() {
    return (
   
   
    
            <Header androidStatusBarColor="lightgreen">
              <Left>
                <Button transparent>
                  <Icon
                    name="arrow-back"
                    onPress={() => this.props.Navigate.openDrawer()}
                  />
                </Button>
              </Left>
              <Body>
                <Title>Aprende React</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon
                    name="menu"
                    onPress={() => this.props.Navigate.openDrawer()}
                  />
                </Button>
              </Right>
            </Header>

    
   
    );
  }
}
