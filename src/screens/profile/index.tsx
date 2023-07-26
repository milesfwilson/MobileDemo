import * as React from 'react';
import {FC} from 'react';
import {Alert, Linking, Platform, ScrollView, Text, View} from 'react-native';
import {User} from '../../api/users';
import {styles} from './profile.styles';
import {globalStyles} from '../../index.styles';
import {Avatar, Button} from '../../components';

const Profile: FC = ({route}: any) => {
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
      Alert.alert('Failed to open link');
    }
  };

  const fullAddress = `${user.address.street_address}
${user.address.city}, ${user.address.state} ${user.address.zip_code}
${user.address.country}`;

  return (
    <ScrollView>
      <View style={[styles.contactCard, globalStyles.boxShadow]}>
        <Avatar
          initials={`${user.first_name[0]}${user.last_name[0]}`}
          size="large"
        />
        <Text style={[globalStyles.header, styles.header]}>
          {user.first_name} {user.last_name}
        </Text>
        <Text>{user.employment.title}</Text>
        <View style={[styles.contactMethods]}>
          <Text style={globalStyles.header}>Email</Text>
          <Button onPress={handleEmail}>{user.email}</Button>

          <Text style={globalStyles.header}>Phone</Text>
          <Button onPress={handlePhone}>{user.phone_number}</Button>

          <Text style={globalStyles.header}>Address</Text>
          <Button onPress={handleAddress}>{fullAddress}</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
