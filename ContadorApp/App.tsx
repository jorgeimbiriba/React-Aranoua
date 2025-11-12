import { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  //Declara estado
  const [contador, setContador] = useState(0);

  const getCorNumero = () => {
      if (contador > 0) return '#2ecc71';
      if (contador < 0) return '#e74c3c'
  };

  const incrementar = (valor: number) => {
      setContador(contador + valor);
  }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contador Avançado</Text>
            <Text style={[styles.numero, { color: getCorNumero() }]}>
                {contador}
            </Text>

            {/* Botões principais */}
            <View style={styles.botoesContainer}>
                <TouchableOpacity
                    style={[styles.botao, styles.botaoMenos]}
                    onPress={() => incrementar(-1)}
                >
                    <Text style={styles.textoBotao}>-1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, styles.botaoReset]}
                    onPress={() => setContador(0)}
                >
                    <Text style={styles.textoBotao}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, styles.botaoMais]}
                    onPress={() => incrementar(1)}
                >
                    <Text style={styles.textoBotao}>+1</Text>
                </TouchableOpacity>
            </View>

            {/* Botões extras */}
            <View style={[styles.botoesContainer, { marginTop: 20 }]}>
                <TouchableOpacity
                    style={[styles.botaoPequeno, styles.botaoMenos]}
                    onPress={() => incrementar(-5)}
                >
                    <Text style={styles.textoBotaoPequeno}>-5</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoPequeno, styles.botaoMenos]}
                    onPress={() => incrementar(-10)}
                >
                    <Text style={styles.textoBotaoPequeno}>-10</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoPequeno, styles.botaoMais]}
                    onPress={() => incrementar(5)}
                >
                    <Text style={styles.textoBotaoPequeno}>+5</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoPequeno, styles.botaoMais]}
                    onPress={() => incrementar(10)}
                >
                    <Text style={styles.textoBotaoPequeno}>+10</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <Text style={styles.infoTexto}>
                    {contador === 0 && '⚪ Neutro'}
                    {contador > 0 && '🟢 Positivo'}
                    {contador < 0 && '🔴 Negativo'}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
    numero: {
      fontSize: 120,
      fontWeight: 'bold',
      color: '#4a90e2',

    },
    botoesContainer: {
      flexDirection: 'row',
        gap: 20,
    },
    botao: {
      width: 80,
      height: 80,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaoPequeno: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoMenos: {
      backgroundColor: '#e74c3c',
    },
    botaoReset: {
      backgroundColor: '#96a5a6',
        width: 100,
    },
    botaoMais: {
      backgroundColor: '#2ecc71',
    },
    textoBotao: {
     fontSize: 32,
     fontWeight: 'bold',
     color: '#fff',
    },
    textoBotaoPequeno: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    info:{
      marginTop:30,
    },
    infoTexto: {
      fontSize: 20,
    }
});
