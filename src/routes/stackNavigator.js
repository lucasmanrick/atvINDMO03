import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import Description from '../Description';
import Cursos from '../Cursos';

const Stack = createStackNavigator()

export default function StackFunction() {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Cursos' component={Cursos} options={{headerShown:false}}/>
      <Stack.Screen name='Descrição do curso' component={Description}/>
    </Stack.Navigator>
  
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