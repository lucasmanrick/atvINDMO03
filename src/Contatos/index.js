import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function Contatos() {
  return (
    <View style={styles.container}>
        <Text style={[styles.textAlign, {fontSize:30}]}>Contato</Text>
        <TextInput placeholder='Nome' style={styles.InputStyle}></TextInput>
        <TextInput placeholder='email' style={styles.InputStyle}></TextInput>
        <TextInput placeholder='numero do celular' style={styles.InputStyle}></TextInput>
        <Button title='Enviar' onPress={()=> Alert.alert('novo contato registrado')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    backgroundColor:'white',
    gap: 15
  },
  textAlign: {
    textAlign:'center',
    color: '#ff0000'
  },
  logoContent: {
    width:'100%',
    display:'flex',
  },
  InputStyle: {
    width: '60%',
    backgroundColor:'white',
    alignSelf:'center',
    padding:20,
    textAlign:'center'
  }
});