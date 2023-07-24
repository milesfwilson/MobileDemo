import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {GetAllUsers, User} from '../../api/users';

const Users: FC = ({navigation}) => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(false);
    GetAllUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(() => {
        console.error('Failed to fetch users');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleNavigation = (userInfo: User) => {
    navigation.navigate('Profile', {user: userInfo});
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading Users</Text>
      ) : (
        users?.map(u => {
          return <Text onPress={() => handleNavigation(u)}>{u.username}</Text>;
        })
      )}
    </View>
  );
};

export default Users;
