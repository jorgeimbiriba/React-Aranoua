import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailsScreen({ route, navigation }: any) {
    const { usuario } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.conteudo}>
                <View style={styles.card}>
                    <Text style={styles.emoji}>👤</Text>
                    <Text style={styles.titulo}>Perfil Completo</Text>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Nome:</Text>
                        <Text style={styles.valor}>{usuario.nome}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Idade:</Text>
                        <Text style={styles.valor}>{usuario.idade} anos</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.label}>Profissão:</Text>
                        <Text style={styles.valor}>{usuario.profissao}</Text>
                    </View>

                    <View style={[styles.infoContainer, styles.bioContainer]}>
                        <Text style={styles.label}>Bio:</Text>
                        <Text style={styles.bioTexto}>{usuario.bio}</Text>
                    </View>
                </View>

                <View style={styles.botoesContainer}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.textoBotao}>← Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoProfile]}
                        onPress={() => navigation.navigate('Profile', { usuario })}
                    >
                        <Text style={styles.textoBotao}>Ver no Perfil 👤</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.botao, styles.botaoHome]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.textoBotao}>🏠 Voltar ao Início</Text>
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
    conteudo: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    emoji: {
        fontSize: 60,
        textAlign: 'center',
        marginBottom: 15,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 25,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    bioContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
        color: '#666',
        fontWeight: '600',
    },
    valor: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    bioTexto: {
        fontSize: 15,
        color: '#333',
        marginTop: 8,
        lineHeight: 22,
    },
    botoesContainer: {
        gap: 12,
    },
    botao: {
        backgroundColor: '#4a90e2',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    botaoProfile: {
        backgroundColor: '#9b59b6',
    },
    botaoHome: {
        backgroundColor: '#50c878',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});