import React, {useState} from 'react';
import {StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform}
    from "react-native";

export default function App() {
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = ()=>{
        if(tarefa.trim()){
          const novaTarefa = {
              id: Date.now().toString(),
              texto: tarefa,
              concluida:false,
          };
          setTarefas([tarefas,novaTarefa]);
          setTarefa();
        }
    }
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <Text style={styles.titulo}>Minhas Tarefas</Text>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 60,
      paddingBottom: 20,
    },
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
});