import React from 'react';
import { Dimensions, View, Text, StatusBar} from 'react-native';

import {Container, StyleProvider, Button, Header, Title, Icon, Left, Right, Body} from 'native-base';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <>
        <StyleProvider style={getTheme(material)}>
          <Container>
            <Header>
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
          </Container>
        </StyleProvider>
      </>
    );
  }
}
