import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/users';
import Profile from '../screens/profile';

// const HomeScreen: React.FC = ({navigation}) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//     />
//   );
// };
// const ProfileScreen: React.FC = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

const Stack = createNativeStackNavigator();

const MyStack = () => {
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

export default MyStack;
