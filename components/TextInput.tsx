import React from 'react';
import { View, TextInput as RNTextInput, TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  styles?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  styles,
  placeholder,
  ...otherProps
}) => {
  return (
    <View>
      <RNTextInput
        placeholder={placeholder}
        {...otherProps}
        className={`w-full rounded-lg border-2 ${styles}`}
      />
    </View>
  );
};

export default CustomTextInput;
