import * as React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import {Container, Button, StyleProvider} from 'native-base';
import HomeScreen from './src/Components/HomeScreen/HomeScreen';
import SettingsScreen from './src/Components/Screens/SettingsScreen';
      
import {createStore} from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  counter:0
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INCREASE_COUNTER':
          return{counter: state.counter + 1}
        case 'DECREASE_COUNTER':
           return {counter: state.counter - 1}
  }
  return state
}

const store = createStore(reducer);



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        height: 180,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('./src/Media/NavLogo.png')}
        style={{height: 120, width: 120, borderRadius: 60}}
      />
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const Drawer = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    contentComponent: CustomDrawerComponent,
  },
);


const AppContainer = createAppContainer(Drawer,RootStack);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer />
      </Provider>
    );
    
  }
}

