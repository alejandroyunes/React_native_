import * as React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import {Container, Button, StyleProvider} from 'native-base';
import HomeScreen from './src/Components/HomeScreen/HomeScreen';
import SettingsScreen from './src/Components/Screens/SettingsScreen';
      


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
    return <AppContainer />;
  }
}

