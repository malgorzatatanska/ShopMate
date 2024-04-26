import {Button as PaperButton} from 'react-native-paper';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress?: () => void;
  buttonStyles?: ViewStyle;
  isLoading?: boolean;
  blackText?: boolean;
  icon?: string;
  disabled?: boolean;
  labelStyles?: TextStyle;
}

export const Button = ({
  label,
  onPress,
  isLoading,
  blackText,
  icon,
  buttonStyles,
  disabled,
  labelStyles,
}: ButtonProps) => {
  const textColor = blackText ? 'black ' : 'white';

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <PaperButton
        loading={isLoading}
        mode="contained"
        style={[styles.button, buttonStyles]}
        icon={icon}
        labelStyle={{fontSize: 24, color: textColor}}>
        <Text
          style={[
            styles.label,
            {
              color: textColor,
            },
            labelStyles,
          ]}>
          {label}
        </Text>
      </PaperButton>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 2,
  },
  label: {
    // ...theme.font.textS,
  },
});
