import { StyleSheet } from 'react-native';

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
      botaodesabilitado: {
        margin: 5,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#C3C7C5',
        
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
      textobotaodesabilitado: {
        color: '#5B5F5D',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: 'bold',
      },
});

export default styles;