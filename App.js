import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { sendSms } from './src/sendSms';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bus App</Text>
      <StatusBar style="auto" />
      <Button title='Buy' onPress={() => console.log('Button pressed')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
