import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="container bg-slate">
      <Text className="mb-4 text-2xl font-bold">Hi there, Welcome</Text>
      <Button
        mode="outlined"
        style={{ width: '50%', borderColor: 'black' }}
        labelStyle={{ color: 'black' }}
        className="mb-4 outline-black"
        onPress={() => navigation.navigate('Login')}>
        Sign In
      </Button>
      <Button
        mode="outlined"
        style={{ width: '50%', borderColor: 'black' }}
        labelStyle={{ color: 'black' }}
        onPress={() => navigation.navigate('Register')}>
        Sign Up
      </Button>
    </View>
  );
};

export default LandingScreen;
