import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native';
import LoginScreen from 'components/ui/LoginScreen';

export default function App() {
  return (
    <SafeAreaView className="container" style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </SafeAreaView>
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
