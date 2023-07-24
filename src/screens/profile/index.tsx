import * as React from 'react';
import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {User} from '../../api/users';
import {styles} from './profile.styles';

const Profile: FC = ({navigation, route}) => {
  const user: User = route.params.user;
  return (
    <View>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <Text>@{user.username}</Text>
      <Text>
        {user.first_name} {user.last_name}
      </Text>
      <Text>{user.employment.title}</Text>
      <Text>{user.employment.key_skill}</Text>
      <Text>{user.phone_number}</Text>
    </View>
  );
};

export default Profile;
