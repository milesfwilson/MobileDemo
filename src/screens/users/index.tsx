import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {GetAllUsers, User} from '../../api/users';
import {styles} from './users.styles';
import {globalColors, globalStyles} from '../../index.styles';
import {Avatar, TextSearch} from '../../components';

const Users: FC = ({navigation}: any) => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    GetAllUsers()
      .then(response => {
        setUsers(response.data);
      })
      .catch(() => {
        Alert.alert('Failed to retrieve users');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleNavigation = (userInfo: User) => {
    navigation.navigate('Profile', {user: userInfo});
  };

  const filterString = (fullname: string) =>
    fullname
      .toLowerCase()
      .includes(searchText.split(' ').join('').toLowerCase());

  const sortCriteria = (a: string, b: string) => a.localeCompare(b);

  return (
    <View>
      <TextSearch searchText={searchText} setSearchText={setSearchText} />
      {isLoading ? (
        <ActivityIndicator size="large" color={globalColors.primary} />
      ) : (
        <ScrollView>
          {users
            ?.filter(u => filterString(`${u.first_name}${u.last_name}`))
            .sort((a, b) => sortCriteria(a.first_name, b.first_name))
            .map(u => {
              return (
                <Pressable
                  style={({pressed}) => [
                    styles.userItem,
                    pressed && styles.pressed,
                  ]}
                  key={u.uid}
                  onPress={() => handleNavigation(u)}>
                  <Avatar initials={`${u.first_name[0]}${u.last_name[0]}`} />
                  <Text style={[styles.header, globalStyles.header]}>
                    {u.first_name} {u.last_name}
                  </Text>
                </Pressable>
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};

export default Users;
