import * as React from 'react';
import {Text, View} from 'react-native';
import {styles} from './avatar.styles';
import {globalColors, globalStyles} from '../../index.styles';

interface AvatarProps {
  initials: string;
  size?: 'small' | 'large';
}

const Avatar = ({initials, size = 'small'}: AvatarProps) => {
  const avatarSize = size === 'small' ? styles.small : styles.large;
  const initialsSize =
    size === 'small' ? styles.smallInitials : styles.largeInitials;

  return (
    <View
      style={[
        styles.initials,
        globalStyles.boxShadow,
        avatarSize,
        {
          backgroundColor: [globalColors.primary, globalColors.secondary][
            Math.floor(Math.random() * 2)
          ],
        },
      ]}>
      <Text style={[globalStyles.header, styles.initialsText, initialsSize]}>
        {initials}
      </Text>
    </View>
  );
};

export {Avatar};
