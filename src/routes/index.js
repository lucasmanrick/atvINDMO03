import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../Inicio/index';
import Cursos from '../Cursos';
import Contatos from '../Contatos';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import StackFunction from './stackNavigator';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: 'red', tabBarInactiveTintColor: "#474a51" }}>
      <Tab.Screen name='Inicio' component={Inicio} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <FontAwesome name='home' color={color} size={size}></FontAwesome>
        }
      }}>
      </Tab.Screen>
      <Tab.Screen name='Tela de cursos' component={StackFunction} options={{
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name='book' color={color} size={size}></FontAwesome>
        }
      }}></Tab.Screen>
      <Tab.Screen name='Contatos' component={Contatos} options={{
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name='phone' color={color} size={size}></FontAwesome>
        }
      }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});