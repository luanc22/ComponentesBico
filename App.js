import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

// Testando componentes

export default function App() {
  return (
    <View style={styles.tela}>
      <View>
        <View style={styles.container}>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
            />
            <View style={styles.boxBotoes}>
              <TouchableOpacity
                style={styles.botaoamarelo}
                onPress={() => props.navigation.navigate("Rota")}
                underlayColor='#fff'>
                <Text style={styles.textobotaoamarelo}>Botão Amarelo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botaotransparente}
                onPress={() => props.navigation.navigate("Rota")}
                underlayColor='#fff'>
                <Text style={styles.textobotaotransparente}>Botão Transparente</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botaodesabilitado}
                disabled={true}
                underlayColor='#fff'>
                <Text style={styles.textobotaodesabilitado}>Botão Desabilitado</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008037',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
  },
  tela: {
    flex: 1
  },
  box: {
    height: '100%',
    margin: 20,
  },
  boxBotoes: {
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  botaoamarelo: {
    margin: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFC700',
  },
  botaotransparente: {
    margin: 5,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  textobotaoamarelo: {
    color: '#775D00',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  textobotaotransparente: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  botaodesabilitado: {
    margin: 5,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#C3C7C5',
    
  },
  textobotaodesabilitado: {
    color: '#5B5F5D',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
  },
  input: {
    margin: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
});
