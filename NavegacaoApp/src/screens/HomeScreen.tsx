import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function HomeScreen({navigation}:any) {
    const usuarios = [
        {id: 1, nome: 'João Silva', idade: 25, profissao: 'Desenvolvedor', bio: 'Apaixonado por Tecnologia'},
        {id: 2, nome: 'Erika Matsui', idade: 35, profissao: 'Administração', bio: 'Apaixonada por Zumbis'},
        {id: 3, nome: 'Bruno Henrique Cardoso', idade: 34, profissao: 'Presidente', bio: 'Apaixonado por Urubus'},
    ]

    return (
        <ScrollView style={styles.conteiner}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Bem vindo!</Text>
                <Text style={styles.subtitulo}>Explore os perfis abaixo</Text>
            </View>

            <View style={styles.listaConteiner}>
                {usuarios.map((usuario) =>(
                    <TouchableOpacity
                    key={usuario.id}
                    style={styles.card}
                    onPress={() => navigation.navigate('Details',{usuario})}
                    >
                        <View style={styles.cardHeader}>
                            <Text style = {styles.emoji}>🧑</Text>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardNome}>{usuario.nome}</Text>
                                <Text style={styles.cardProfissao}>{usuario.profissao}</Text>
                            </View>
                        </View>
                        <Text style={styles.cardBio}>{usuario.bio}</Text>
                        <View style = {styles.cardFooter}>
                            <Text style = {styles.verMais}>Ver Detalhes</Text>
                        </View>
                    </TouchableOpacity>
                    ))}
            </View>
            <TouchableOpacity
                style={styles.botaoSettings}
                onPress={() => navigation.navigate('Settings')}
            ></TouchableOpacity>
            <Text style={styles.textoBotao}>⚙️ Ir para Configurações</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header:{
        backgroundColor: '#4a90e2'
    },
    titulo:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subtitulo:{
        fontSize:16,
        color:'fff',
        opacity:0.9
    },
    listaConteiner: {
        paddingTop: 15,
    },
    card:{
        backgroundColor:'#fff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset:{width:0, height:2},
        shadowRadius:4,
        elevation:3,
    },
    cardHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    emoji:{
        fontSize:40,
        marginLeft:15,
    },
    cardInfo:{
        flex: 1,
    },
    cardNome:{
        fontSize:14,
        color:'#666',
        marginTop:2,
    },
    cardProfissao:{
        fontSize:14,
        color:'#666',
        marginTop:2,
    },
    cardBio:{
        fontSize:14,
        color:'#888',
        marginBottom:5,
    },
    cardFooter:{
        borderTopLeftRadius:1,
        borderTopColor:'#eee',
        paddingTop:10,
    },
    verMais:{
        color: '#4a90e2',
        fontWeight:'600',
    },
    botaoSettings:{
        backgroundColor:'#666',
        margin:15,
        padding:18,
        borderRadius:10,
        alignItems: 'center',
    },
    textoBotao:{
        color: '#fff',
        fontWeight:'bold'
    }
})