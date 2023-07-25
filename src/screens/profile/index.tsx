import * as React from 'react';
import {FC} from 'react';

import {
  Image,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {User} from '../../api/users';
import {styles} from './profile.styles';
import {globalStyles} from '../../index.styles';

const Profile: FC = ({navigation, route}) => {
  const user: User = route.params.user;

  const handleEmail = () => {
    Linking.openURL('mailto:' + user.email);
  };
  const handlePhone = () => {
    Linking.openURL('sms:' + user.phone_number);
  };

  const handleAddress = async () => {
    const destination = encodeURIComponent(
      `${user.address.street_address} ${user.address.zip_code}, ${user.address.city}`,
    );
    const provider = Platform.OS === 'ios' ? 'apple' : 'google';
    const link = `http://maps.${provider}.com/?daddr=${destination}`;
    try {
      const supported = await Linking.canOpenURL(link);

      if (supported) {
        Linking.openURL(link);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={[styles.contactCard, globalStyles.boxShadow]}>
        <View style={[styles.avatar, globalStyles.boxShadow]}>
          <Text style={[styles.avatarText, globalStyles.boxShadow]}>
            {user.first_name[0]}
            {user.last_name[0]}
          </Text>
        </View>
        <Text style={globalStyles.header}>
          {user.first_name} {user.last_name}
        </Text>
        <Text>{user.employment.title}</Text>
        <View style={[styles.contactMethods]}>
          <Text style={globalStyles.header}>Email</Text>
          <Pressable
            onPress={handleEmail}
            style={({pressed}) => [
              styles.pressable,
              globalStyles.row,
              pressed && styles.pressed,
            ]}>
            <Text>{user.email}</Text>
          </Pressable>
          <Text style={globalStyles.header}>Phone</Text>
          <Pressable
            onPress={handlePhone}
            style={({pressed}) => [
              styles.pressable,
              globalStyles.row,
              pressed && styles.pressed,
            ]}>
            <Text>{user.phone_number}</Text>
          </Pressable>
          <Text style={globalStyles.header}>Address</Text>
          <Pressable
            onPress={handleAddress}
            style={({pressed}) => [
              styles.pressable,
              pressed && styles.pressed,
            ]}>
            <Text>{user.address.street_address}</Text>
            <Text>
              {user.address.city}, {user.address.state} {user.address.zip_code}
            </Text>
            <Text>{user.address.country}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
