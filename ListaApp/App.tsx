import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    View
}
    from "react-native";

interface Tarefa{
    id:string;
    texto:string;
    concluida:boolean
}

export default function App() {
    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = ()=>{
        if(tarefa.trim()){
          const novaTarefa : Tarefa ={
              id: Date.now().toString(),
              texto: tarefa,
              concluida:false,
          };
          setTarefas([...tarefas,novaTarefa]);
          setTarefa('');
        }
    }
    const removerTarefa = (id:string)=> {
        setTarefas(tarefas.filter(item => item.id != id));
    }

    const renderItem = ({item}) => (
    <View style={styles.itemTarefa}>
        <Text style={styles.textoTarefa}>X</Text>
        <TouchableOpacity onPress={() => removerTarefa(item.id)}></TouchableOpacity>
    </View>
    );

    const toggleTarefa = (item: string) => {
        setTarefas(tarefas.map(item =>
        item.id === id ? { ...item, concluida: item.concluida } : item)
        );
    }

    const rend = ({item}) =>(
        <TouchableOpacity
            style={styles.itemTarefa}
            onPress={() => rend(item)}>
        </TouchableOpacity>

        <View style={styles.tarefaConteudo}>
            <View style={[
                styles.checkbox,
                item.concluido && styles.textoTarefaConcluida
            ]}>
                {item.texto}
            </View>
        <TouchableOpacity onPress={()=> removerTarefa(item.id)}>
            <Text style={styles.botaoRemover}>X</Text>
        </TouchableOpacity>
        </View>
    )

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <Text style={styles.titulo}>Minhas Tarefas</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Digite uma nova tarefa"
                placeholderTextColor="#999"
                value={tarefa}
                onChangeText={setTarefa}
                onSubmitEditing={adicionarTarefa}
            ></TextInput>
            <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={adicionarTarefa}>
                <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
        </View>

            <FlatList
                data={tarefas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent = {
                    <Text style={styles.listaVazia}>
                     Nenhuma tarefa adicionada ainda. {'\n'}
                     Comece adicionando uma!
                     </Text>
                }
            >
            </FlatList>
            <View style={styles.footer}>
              <Text style={styles.footerTexto}>
                  Total: {tarefas.length} | Concluida: {tarefas.filter(t => t.concluidas)}
              </Text>
            </View>
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
    inputContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
    },
    input:{
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 10,
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ddd'
    },
    botaoAdicionar: {
      backgroundColor: '#4a90e2',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoBotao: {
      color: '#fff',
      fontSize: 28,
      fontWeight: 'bold',
    },
    itemTarefa: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    textoTarefa: {
      fontSize: 16,
      color: '#333',
      flex: 1,
    },
    botaoRemover: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: 10,
    }
});