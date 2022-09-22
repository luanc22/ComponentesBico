import { View, TextInput } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.tela}>
      <View>
        <View style={styles.container}>
          <View style={styles.box}>
        // Input de Usuário
            <TextInput
              style={styles.input}
              placeholder="Usuário"
            />
        // Input de Senha
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
            />
          </View>
        </View>
      </View>
    </View >
  );
}
