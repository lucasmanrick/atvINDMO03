import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";

export default function Cursos() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View>
            <Pressable onPress={()=> navigation.navigate('Descrição do curso',{desc:'O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.'})}> 
              <Text style={[styles.TitleCourse]}>Desenvolvimento de Sistemas </Text>
            </Pressable>
        </View>
        <View>
            <Pressable  onPress={()=> navigation.navigate('Descrição do curso',{desc:'O Curso de Aperfeiçoamento Profissional Excel Avançado tem por objetivo o desenvolvimento de competências para elaborar planilhas automatizadas, utilizando funções aninhadas, controles de formulário, importação de dados, gravação de macros, considerando a organização e proteção dos dados. Criar tabelas e gráficos dinâmicos, subtotais e filtros avançados.'}) }>
              <Text style={styles.TitleCourse}>Excel Avançado</Text>
            </Pressable>
        </View>
        <View>
            <Pressable  onPress={()=> navigation.navigate('Descrição do curso',{desc:'O curso Mecânico de Transmissão Mecânica e Automatizada de Veículos Leves tem por objetivo o desenvolvimento de competências relativas a realização de manutenção em sistemas de transmissão mecânica e automatizada de veículos leves, diagnosticando e reparando defeitos, utilizando ferramentas e equipamentos, seguindo normas e procedimentos técnicos, ambientais e de saúde e segurança no trabalho.'}) } >
              <Text style={styles.TitleCourse}>Mecanica Automotiva</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    backgroundColor:"white",
    gap:3
  },
  TitleCourse: {
    fontSize:30,
    color:'#FF0000',
    backgroundColor:'darkgray'
  },
  textColor: {
    color: '#474a51'
  }
});