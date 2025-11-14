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
    const[tarefa,setTarefa] = useState('');
    const[tarefas,setTarefas] = useState<Tarefa[]>([]); // Tipo explícito adicionado

    const adicionarTarefa = () =>{
        if(tarefa.trim()){
            const novaTarefa : Tarefa = {
                id : Date.now().toString(),
                texto : tarefa,
                concluida : false,
            };
            setTarefas([...tarefas, novaTarefa]);
            setTarefa('');  //limpar input
        }
    }

    const removerTarefa =(id:string) =>{
        setTarefas(tarefas.filter(item => item.id !== id)); // !== em vez de !=
    };

    const toggleTarefa = (id: string) =>{ // Corrigido o parâmetro
        setTarefas(tarefas.map(item =>
            item.id === id ? { ...item, concluida: !item.concluida} : item
        ));
    };

    // Tipagem correta para o renderItem
    const renderItem= ({item}: {item: Tarefa}) =>(
        <TouchableOpacity
            style={styles.itemTarefa}
            onPress={()=> toggleTarefa(item.id)}
        >
            <View style={styles.tarefaConteudo}>
                <View style={[
                    styles.checkbox,
                    item.concluida && styles.checkboxConcluida // Corrigido: concluida
                ]}>
                    {item.concluida && <Text style={styles.checkMark}>✓</Text>}
                </View>
                <Text style={[
                    styles.textoTarefa,
                    item.concluida && styles.textoTarefaConcluida
                ]}>
                    {item.texto}
                </Text>
            </View>
            <TouchableOpacity onPress={()=> removerTarefa(item.id)}>
                <Text style={styles.botaoRemover}>x</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    // Cálculo corrigido das tarefas concluídas
    const tarefasConcluidas = tarefas.filter(t => t.concluida).length;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <Text style={styles.titulo}>Minhas Tarefas</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite uma nova tarefa..."
                    placeholderTextColor="#999"
                    value={tarefa}
                    onChangeText={setTarefa}
                    onSubmitEditing={adicionarTarefa}
                />
                <TouchableOpacity
                    style={styles.botaoAdicionar}
                    onPress={adicionarTarefa}
                >
                    <Text style={styles.textoBotao}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.listaVazia}>
                        Nenhuma tarefa adicionada ainda.{'\n'}
                        Comece adicionando uma!
                    </Text>
                }
            />

            <View style={styles.footer}>
                <Text style={styles.footerTexto}>
                    Total: {tarefas.length} | Concluídas: {tarefasConcluidas}
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
    textoTarefaConcluida: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
    botaoRemover: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      paddingLeft: 10,
    },
    tarefaConteudo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#4a90e2',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxConcluida: {
        backgroundColor: '#4a90e2',
    },
    checkMark: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listaVazia: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 50,
    },
    footer: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    footerTexto: {
        fontSize: 14,
        color: '#666',
    },
});