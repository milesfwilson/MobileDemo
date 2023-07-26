import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, Users} from '../screens';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen
        name="Users"
        component={Users}
        options={{title: 'All Users'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
