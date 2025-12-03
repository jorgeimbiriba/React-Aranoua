import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { HomeScreenProps, UserProfile } from '../types';
import { useFavorites } from '../contexts/FavoritesContext';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    const usuarios: UserProfile[] = [
        {
            id: '1',
            nome: 'João Silva',
            idade: 25,
            profissao: 'Desenvolvedor',
            bio: 'Apaixonado por tecnologia e inovação'
        },
        {
            id: '2',
            nome: 'Maria Santos',
            idade: 28,
            profissao: 'Designer',
            bio: 'Criando experiências incríveis para usuários'
        },
        {
            id: '3',
            nome: 'Pedro Oliveira',
            idade: 30,
            profissao: 'Product Manager',
            bio: 'Construindo produtos que fazem a diferença'
        },
        {
            id: '4',
            nome: 'Ana Costa',
            idade: 26,
            profissao: 'UX Designer',
            bio: 'Design centrado no usuário'
        },
        {
            id: '5',
            nome: 'Carlos Mendes',
            idade: 32,
            profissao: 'Tech Lead',
            bio: 'Liderando equipes de alta performance'
        },
    ];

    const handleFavoriteToggle = async (userId: string): Promise<void> => {
        if (isFavorite(userId)) {
            await removeFavorite(userId);
        } else {
            await addFavorite(userId);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Bem-vindo! 🏠</Text>
                <Text style={styles.subtitulo}>Explore os perfis abaixo</Text>
            </View>

            <View style={styles.listaContainer}>
                {usuarios.map((usuario) => (
                    <View key={usuario.id} style={styles.card}>
                        <TouchableOpacity
                            style={styles.cardContent}
                            onPress={() => navigation.navigate('Details', { usuario })}
                            activeOpacity={0.7}
                        >
                            <View style={styles.cardHeader}>
                                <View style={styles.avatarContainer}>
                                    <Text style={styles.avatarText}>
                                        {usuario.nome.charAt(0)}
                                    </Text>
                                </View>
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

                        <TouchableOpacity
                            style={styles.favoriteButton}
                            onPress={() => handleFavoriteToggle(usuario.id)}
                        >
                            <Text style={styles.favoriteIcon}>
                                {isFavorite(usuario.id) ? '❤️' : '🤍'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

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
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'visible',
    },
    cardContent: {
        padding: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#4a90e2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
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
        marginBottom: 15,
        lineHeight: 20,
    },
    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 12,
    },
    verMais: {
        color: '#4a90e2',
        fontWeight: '600',
        fontSize: 14,
    },
    favoriteButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    favoriteIcon: {
        fontSize: 24,
    },
});

export default HomeScreen;