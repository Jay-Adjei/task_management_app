import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="relative flex-1 bg-slate-700">
      {/* "Hi, there" text positioned outside the white panel */}
      <View className="absolute bottom-[70%] left-0 right-0 mb-10 ml-5">
        <Text className="text-4xl font-bold text-white">Hi there</Text>
        <Text className="text-xl font-semibold text-white">Welcome to this app</Text>
      </View>
      {/* White login panel occupies the bottom 60% */}
      <View className="absolute bottom-0 h-[70%] w-full rounded-t-3xl bg-white p-8">
        <Text className="mb-4 text-2xl font-bold">Sign Up</Text>
        <View className="flex flex-col items-center justify-center gap-6">
          <TextInput placeholder="First Name" className="w-full rounded-lg border-2 p-4" />
          <TextInput placeholder="Last Name" className="w-full rounded-lg border-2 p-4" />
          <TextInput placeholder="Enter Email" className="w-full rounded-lg border-2 p-4" />
          <TextInput
            secureTextEntry
            placeholder="Enter Password"
            className="w-full rounded-lg border-2 p-4"
          />
          <Button
            mode="contained"
            className="w-full"
            buttonColor="black"
            onPress={() => navigation.navigate('Home')}>
            Sign Up
          </Button>
          <View className="flex flex-row items-center justify-center gap-3">
            <Text>Already have an aacount?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-blue-500">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
