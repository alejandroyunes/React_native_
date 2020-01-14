import React from 'react';
import {ImageBackground, Dimensions, Text, TouchableOpacity} from 'react-native';

import {Container ,Button} from 'native-base';

const cardImage = require('../../Media/background.png');
import HeaderComponent from '../Header/HeaderComponent';

import { connect } from 'react-redux';


class SettingsScreen extends React.Component {
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

            <Button light>
              <Text> Light blue</Text>
            </Button>

            <TouchableOpacity onPress={() => this.props.increaseCounter()}>
              <Text style={{fontSize: 25, color: 'white'}}>Increase</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 25, color: 'white'}}>{this.props.counter}</Text>

            <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
              <Text style={{fontSize: 25, color: 'white'}}>Decrease</Text>
            </TouchableOpacity>
          </ImageBackground>
        </Container>
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch){
    return {
      increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
      decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);