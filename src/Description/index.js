import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";


export default function Description() {
  const route = useRoute();
  return (    
    <View style={styles.container}>
      <Text style={{width:'100%',height:'100%', fontSize:25,textAlign:'center'}}>{route.params?.desc}</Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'100%',
    height:'100%',
    flexDirection:'row'
  }
});