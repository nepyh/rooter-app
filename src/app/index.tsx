import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1 pb-10 justify-end">
      <StatusBar style="auto" />
    </View>
  );
}
