import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContent}>
        <Image style={{alignSelf:'center'}} source={require('../assets/senai-logo.png')} />
      </View>
      <Text style={styles.textAlign}>Lucas Manrick Teodoro da Fonseca</Text>
      <Text style={styles.textAlign}>Sumaré, 07/02/2024</Text>
      <Text style={styles.textAlign}>Escola SENAI Celso Charuri</Text>
      <Text style={styles.textAlign}>Técnico em Desenvolvimento de Sistemas</Text>
      <Text style={styles.textAlign}>INDMO - Interface para Dispositivos Móveis</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    backgroundColor:"white",
    justifyContent:'center'
  },
  textAlign: {
    textAlign:'center',
    color: '#474a51'
  },
  logoContent: {
    width:'100%',
    display:'flex',
  }
});