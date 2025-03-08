import CustomTextInput from 'components/TextInput';
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="container">
      <Text className="mb-4 text-2xl font-bold">Sign Up</Text>
      <View className="flex flex-col items-center justify-center gap-4">
        <CustomTextInput placeholder="First Name" styles="w-[15rem]" />
        <CustomTextInput placeholder="Last Name" styles="w-[15rem]" />
        <CustomTextInput placeholder="Enter Email" styles="w-[15rem]" />
        <CustomTextInput placeholder="Enter Password" secureTextEntry styles="w-[15rem]" />
        <Button mode="contained" buttonColor='black' onPress={() => navigation.navigate('Home')}>
          Sign Up
        </Button> 
      </View>
    </View>
  );
};

export default RegisterScreen;
