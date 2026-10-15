import { Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#33363F' }}>
      <View className="px-6 flex-1 bg-background-primary">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
