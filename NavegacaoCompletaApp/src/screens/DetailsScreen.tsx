import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { DetailsScreenProps } from '../types';
import { useFavorites } from '../contexts/FavoritesContext';

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route, navigation }) => {
    const { usuario } = route.params;
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const scaleAnim = React.useRef(new Animated.Value(1)).current;

    const handleFavoriteToggle = async (): Promise<void> => {
        // Animação ao clicar
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.3,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();

        if (isFavorite(usuario.id)) {
            await removeFavorite(usuario.id);
        } else {
            await addFavorite(usuario.id);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.conteudo}>
                <View style={styles.card}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarLarge}>
                            {usuario.nome.charAt(0)}
                        </Text>
                    </View>

                    <Animated.View style={[styles.favoriteContainer, { transform: [{ scale: scaleAnim }] }]}>
                        <TouchableOpacity
                            style={styles.favoriteButton}
                            onPress={handleFavoriteToggle}
                        >
                            <Text style={styles.favoriteIcon}>
                                {isFavorite(usuario.id) ? '❤️' : '🤍'}
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>

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

                    {isFavorite(usuario.id) && (
                        <View style={styles.favoriteBadge}>
                            <Text style={styles.favoriteBadgeText}>⭐ Nos Favoritos</Text>
                        </View>
                    )}
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
                        onPress={() =>
                            navigation.navigate('Profile', {
                                screen: 'ProfileMain',
                                params: { usuario },
                            })
                        }
                    >
                        <Text style={styles.textoBotao}>Ver no Perfil 👤</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

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
        alignItems: 'center',
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4a90e2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarLarge: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
    },
    favoriteContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    favoriteButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
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
        fontSize: 28,
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
        width: '100%',
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
    favoriteBadge: {
        backgroundColor: '#ffd700',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    favoriteBadgeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
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
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DetailsScreen;