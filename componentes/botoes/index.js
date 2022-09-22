import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Botoes(props) {
    return (
        <View style={styles.tela}>
            <View>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <View style={styles.boxBotoes}>
                    // Botão Amarelo
                            <TouchableOpacity
                                style={styles.botaoamarelo}
                                onPress={() => props.navigation.navigate("Rota")}
                                underlayColor='#fff'>
                                <Text style={styles.textobotaoamarelo}>Botão Amarelo</Text>
                            </TouchableOpacity>

                    // Botão Transparente
                            <TouchableOpacity
                                style={styles.botaotransparente}
                                onPress={() => props.navigation.navigate("Rota")}
                                underlayColor='#fff'>
                                <Text style={styles.textobotaotransparente}>Botão Transparente</Text>
                            </TouchableOpacity>

                    // Botão Desabilitado
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

