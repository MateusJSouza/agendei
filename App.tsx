import { View } from 'react-native';
import { Login } from './src/screens/login';
import { Signup } from './src/screens/signup';

export default function App() {
  return (
    <View className='h-screen'>
      <Signup />
    </View>
  );
}
