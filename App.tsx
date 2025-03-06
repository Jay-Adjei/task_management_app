//

//
// import { SafeAreaView } from 'react-native';
// import LoginScreen from 'components/ui/LoginScreen';

// export default function App() {
//   return (
//     <SafeAreaView >
//
//       <LoginScreen />
//     </SafeAreaView>
//   );
// }

// App.tsx or index.tsx
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'components/ui/LoginScreen';
import RegisterScreen from 'components/ui/RegisterScreen';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
