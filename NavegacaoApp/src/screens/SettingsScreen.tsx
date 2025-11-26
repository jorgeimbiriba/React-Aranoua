import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function SettingsScreen({ navigation }:any) {
    const [notificacoes, setNotificacoes] = useState(true);
    const [modoEscuro, setModoEscuro] = useState(false);
    const [localizacao, setLocalizacao] = useState(true);

    const handleSalvar = () => {
        Alert.alert(
            'Configurações Salvas! ✅',
            'Suas preferências foram atualizadas com sucesso.',
            [{ text: 'OK' }]
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.conteudo}>
                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>🔔 Notificações</Text>
                    <View style={styles.opcao}>
                        <View style={styles.opcaoInfo}>
                            <Text style={styles.opcaoTitulo}>Notificações Push</Text>
                            <Text style={styles.opcaoDescricao}>Receba alertas em tempo real</Text>
                        </View>
                        <Switch
                            value={notificacoes}
                            onValueChange={setNotificacoes}
                            trackColor={{ false: '#767577', true: '#4a90e2' }}
                            thumbColor={notificacoes ? '#fff' : '#f4f3f4'}
                        />
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>🎨 Aparência</Text>
                    <View style={styles.opcao}>
                        <View style={styles.opcaoInfo}>
                            <Text style={styles.opcaoTitulo}>Modo Escuro</Text>
                            <Text style={styles.opcaoDescricao}>Tema escuro para seus olhos</Text>
                        </View>
                        <Switch
                            value={modoEscuro}
                            onValueChange={setModoEscuro}
                            trackColor={{ false: '#767577', true: '#4a90e2' }}
                            thumbColor={modoEscuro ? '#fff' : '#f4f3f4'}
                        />
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>📍 Privacidade</Text>
                    <View style={styles.opcao}>
                        <View style={styles.opcaoInfo}>
                            <Text style={styles.opcaoTitulo}>Localização</Text>
                            <Text style={styles.opcaoDescricao}>Permitir acesso à localização</Text>
                        </View>
                        <Switch
                            value={localizacao}
                            onValueChange={setLocalizacao}
                            trackColor={{ false: '#767577', true: '#4a90e2' }}
                            thumbColor={localizacao ? '#fff' : '#f4f3f4'}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
                    <Text style={styles.textoBotaoSalvar}>💾 Salvar Configurações</Text>
                </TouchableOpacity>

                <View style={styles.navegacaoSecao}>
                    <Text style={styles.secaoTitulo}>🧭 Navegação</Text>
                    <TouchableOpacity
                        style={styles.navBotao}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.navTexto}>🏠 Ir para Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navBotao}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text style={styles.navTexto}>👤 Ir para Perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoTexto}>Versão do App: 1.0.0</Text>
                    <Text style={styles.infoTexto}>Tutorial React Navigation</Text>
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
    secao: {
        marginBottom: 25,
    },
    secaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 12,
    },
    opcao: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    opcaoInfo: {
        flex: 1,
        marginRight: 15,
    },
    opcaoTitulo: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    opcaoDescricao: {
        fontSize: 13,
        color: '#666',
    },
    botaoSalvar: {
        backgroundColor: '#4a90e2',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    textoBotaoSalvar: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navegacaoSecao: {
        marginTop: 10,
        marginBottom: 20,
    },
    navBotao: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    navTexto: {
        fontSize: 15,
        color: '#333',
        fontWeight: '600',
    },
    info: {
        alignItems: 'center',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    infoTexto: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5,
    },
});