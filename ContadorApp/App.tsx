import { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  //Declara estado
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text style ={styles.titulo}>Contador</Text>
        <Text style ={styles.numero}>{contador}</Text>

        <View style={styles.botoesContainer}>
            <TouchableOpacity style = {[styles.botao, styles.botaoMenos]}
            onPress={() => setContador(contador - 1)}>
            <Text style = {styles.textoBotao}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.botao, styles.botaoReset]}
                              onPress={() => setContador(0)}>
                <Text style = {styles.textoBotao}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.botao, styles.botaoMais]}
                              onPress={() => setContador(contador + 1)}>
                <Text style = {styles.textoBotao}>+</Text>
            </TouchableOpacity>


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
    }
});
