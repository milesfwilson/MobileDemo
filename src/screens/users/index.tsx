import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {GetAllUsers, User} from '../../api/users';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './users.styles';
import {globalColors, globalStyles} from '../../index.styles';

const Users: FC = ({navigation}) => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

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
      {/* TODO separate into component */}
      <TextInput
        value={searchText}
        onChangeText={s => setSearchText(s)}
        placeholder="Search"
        style={[styles.searchInput]}
      />
      <ScrollView>
        {users?.length ? (
          users
            ?.filter(u =>
              `${u.first_name}${u.last_name}`
                .toLowerCase()
                .includes(searchText.split(' ').join('').toLowerCase()),
            )
            .sort((a, b) => a.first_name.localeCompare(b.first_name))
            .map(u => {
              return (
                <Pressable
                  style={({pressed}) => [
                    styles.userItem,
                    pressed && styles.pressed,
                  ]}
                  key={u.uid}
                  onPress={() => handleNavigation(u)}>
                  <View
                    style={[
                      styles.initials,
                      globalStyles.boxShadow,
                      {
                        backgroundColor: [
                          globalColors.primary,
                          globalColors.secondary,
                        ][Math.floor(Math.random() * 2)],
                      },
                    ]}>
                    <Text style={[globalStyles.header, styles.initialsText]}>
                      {u.first_name[0]}
                      {u.last_name[0]}
                    </Text>
                  </View>
                  <Text style={[globalStyles.header]}>
                    {u.first_name} {u.last_name}
                  </Text>
                </Pressable>
              );
            })
        ) : (
          <Text>No users found</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Users;
