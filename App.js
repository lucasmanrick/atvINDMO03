import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import { Platform } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{width:'100%',height:'100%',paddingTop:Platform.OS === 'android' ? 10 : 0}}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
      <StatusBar/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center'
  }
});