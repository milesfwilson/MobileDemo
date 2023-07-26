import * as React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './button.styles';
import {globalStyles} from '../../index.styles';

interface ButtonProps {
  children: string;
  onPress?: () => void;
}

const Button = ({children, onPress}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.pressable,
        globalStyles.row,
        pressed && styles.pressed,
      ]}>
      <Text>{children}</Text>
    </Pressable>
  );
};

export {Button};
