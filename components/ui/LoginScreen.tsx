import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="container">
      <Text className="mb-4 text-2xl font-bold">Login</Text>
      <View className="flex flex-col items-center justify-center gap-4">
        <TextInput placeholder="Enter Emial" className="w-[15rem] rounded-lg border-2" />
        <TextInput
          secureTextEntry
          placeholder="Enter Password"
          className="w-[15rem] rounded-lg border-2"
        />
        <Button mode="contained" className="w-[15rem]" buttonColor="black" onPress={() => navigation.navigate('Home')}>
          {' '}
          Sign in{' '}
        </Button>
        <View className="space-between flex flex-row items-center justify-center gap-3">
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-blue-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
