import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Details from '../screens/Details';
import configureStore from '../redux/store/store';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: Details
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    return {
      tabBarVisible: false,
    };
  }

  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarOptions: { activeTintColor: '#3d9970', },
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <Icon
          style={focused ? [{ color: '#3d9970' }] : [{ color: tintColor }]}
          size={20} name={'ios-home'}
        />
      </View>),
  };
}

HomeStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  }
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile'
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
