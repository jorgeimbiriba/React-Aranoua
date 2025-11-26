import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen({ route, navigation }:any) {
    // Se vier de outra tela com parâmetros, usa eles. Senão, usa dados padrão
    const usuario = route.params?.usuario || {
        nome: 'Seu Nome',
        idade: 25,
        profissao: 'Sua Profissão',
        bio: 'Sua bio aqui'
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.avatarGrande}>👤</Text>
                <Text style={styles.nome}>{usuario.nome}</Text>
                <Text style={styles.profissao}>{usuario.profissao}</Text>
            </View>

            <View style={styles.conteudo}>
                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>📊 Informações</Text>
                    <View style={styles.infoCard}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Idade</Text>
                            <Text style={styles.infoValor}>{usuario.idade} anos</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Profissão</Text>
                            <Text style={styles.infoValor}>{usuario.profissao}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>✨ Sobre</Text>
                    <View style={styles.bioCard}>
                        <Text style={styles.bioTexto}>{usuario.bio}</Text>
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>⚡ Ações Rápidas</Text>
                    <TouchableOpacity
                        style={styles.acaoBotao}
                        onPress={() => navigation.navigate('Settings')}
                    >
                        <Text style={styles.acaoTexto}>⚙️ Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.acaoBotao, styles.acaoBotaoSecundario]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.acaoTexto}>🏠 Voltar ao Início</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#9b59b6',
        padding: 30,
        alignItems: 'center',
    },
    avatarGrande: {
        fontSize: 80,
        marginBottom: 15,
    },
    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    profissao: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
    },
    conteudo: {
        padding: 20,
    },
    secao: {
        marginBottom: 25,
    },
    secaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoItem: {
        alignItems: 'center',
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    infoValor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    bioCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    bioTexto: {
        fontSize: 15,
        color: '#333',
        lineHeight: 22,
    },
    acaoBotao: {
        backgroundColor: '#9b59b6',
        padding: 18,
        borderRadius: 10,
        marginBottom: 12,
        alignItems: 'center',
    },
    acaoBotaoSecundario: {
        backgroundColor: '#50c878',
    },
    acaoTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
