import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MoreDetails from '../screens/MoreDetails';
import Details from '../screens/Details';
import Home from '../screens/Home';
import {globalStyles} from '../styles/Global';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: globalStyles.headerStyle,
        headerTitleStyle: globalStyles.headerTitleStyle,
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Covid-19 Dashboard'}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({title: route.params.item.country})}
      />
      <Stack.Screen
        name="More Details"
        component={MoreDetails}
        options={({route}) => ({title: 'More on ' + route.params.item.country})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
