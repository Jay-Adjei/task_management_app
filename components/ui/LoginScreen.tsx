import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex h-full w-full flex-col items-center justify-center">
      <Text className="mb-4 text-2xl">Login</Text>
      <View className="flex flex-col gap-4">
        <View className="flex flex-row items-center justify-center gap-3">
          <Text>Enter Username:</Text>
          <TextInput placeholder="Enter here" className="w-[10rem] rounded-lg border-2" />
        </View>
        <View className="flex flex-row items-center justify-center gap-3">
          <Text>Enter Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            className="w-[10rem] rounded-lg border-2"
          />
        </View>
        <View className="space-between flex flex-row items-center justify-center gap-3">
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-blue-500">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
