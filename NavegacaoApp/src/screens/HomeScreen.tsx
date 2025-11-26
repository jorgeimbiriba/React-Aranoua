import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }:any) {
    const usuarios = [
        { id: 1, nome: 'João Silva', idade: 25, profissao: 'Desenvolvedor', bio: 'Apaixonado por tecnologia' },
        { id: 2, nome: 'Maria Santos', idade: 28, profissao: 'Designer', bio: 'Criando experiências incríveis' },
        { id: 3, nome: 'Pedro Oliveira', idade: 30, profissao: 'Product Manager', bio: 'Construindo produtos que importam' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Bem-vindo! 🏠</Text>
                <Text style={styles.subtitulo}>Explore os perfis abaixo</Text>
            </View>

            <View style={styles.listaContainer}>
                {usuarios.map((usuario) => (
                    <TouchableOpacity
                        key={usuario.id}
                        style={styles.card}
                        onPress={() => navigation.navigate('Details', { usuario })}
                    >
                        <View style={styles.cardHeader}>
                            <Text style={styles.emoji}>👤</Text>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardNome}>{usuario.nome}</Text>
                                <Text style={styles.cardProfissao}>{usuario.profissao}</Text>
                            </View>
                        </View>
                        <Text style={styles.cardBio}>{usuario.bio}</Text>
                        <View style={styles.cardFooter}>
                            <Text style={styles.verMais}>Ver detalhes →</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={styles.botaoSettings}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.textoBotao}>⚙️ Ir para Configurações</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#4a90e2',
        padding: 30,
        paddingTop: 20,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subtitulo: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    listaContainer: {
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    emoji: {
        fontSize: 40,
        marginRight: 15,
    },
    cardInfo: {
        flex: 1,
    },
    cardNome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    cardProfissao: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    cardBio: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    verMais: {
        color: '#4a90e2',
        fontWeight: '600',
    },
    botaoSettings: {
        backgroundColor: '#666',
        margin: 15,
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});