import React from 'react';


import { Button, Header, Title, Icon, Left, Right, Body} from 'native-base';


export default class HeaderComponent extends React.Component {
  render() {
    return (
      <Header
        androidStatusBarColor="lightgreen"
        style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgreen'}}>
        <Left>
          <Button transparent>
            <Icon
              style={{fontSize: 35}}
              type="FontAwesome"
              name="home"
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
