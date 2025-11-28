import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Share,
} from 'react-native';
import { fetchNewsById } from '../services/newsApi';
import LoadingSpinner from '../components/LoadingSpinner';
import { News, NewsDetailScreenProps } from '../types';

const NewsDetailScreen: React.FC<NewsDetailScreenProps> = ({ route, navigation }) => {
    const { newsId } = route.params;
    const [news, setNews] = useState<News | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        loadNewsDetail();
    }, [newsId]);

    const loadNewsDetail = async (): Promise<void> => {
        setLoading(true);
        const response = await fetchNewsById(newsId);

        if (response.success && response.data) {
            setNews(response.data);
            setLoading(false);
        } else {
            setLoading(false);
            Alert.alert('Erro', response.error || 'Erro desconhecido', [
                { text: 'Voltar', onPress: () => navigation.goBack() },
            ]);
        }
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const handleShare = async (): Promise<void> => {
        if (!news) return;

        const result = await Share.share({
            message: `${news.title}\n\n${news.description}`,
            title: news.title,
        });

        // Opcional: você pode verificar se o compartilhamento foi bem-sucedido
        if (result.action === Share.dismissedAction) {
            // Usuário cancelou o compartilhamento
            console.log('Compartilhamento cancelado');
        }
    };

    if (loading) {
        return <LoadingSpinner message="Carregando detalhes..." />;
    }

    if (!news) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Notícia não encontrada</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: news.urlToImage }} style={styles.image} />

            <View style={styles.content}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.category}>
                        {news.category?.toUpperCase() || 'GERAL'}
                    </Text>
                </View>

                <Text style={styles.title}>{news.title}</Text>

                <View style={styles.metadata}>
                    <Text style={styles.author}>Por {news.author}</Text>
                    <Text style={styles.date}>{formatDate(news.publishedAt)}</Text>
                </View>

                <View style={styles.divider} />

                <Text style={styles.description}>{news.description}</Text>

                <Text style={styles.contentText}>{news.content}</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                        <Text style={styles.shareButtonText}>📤 Compartilhar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.backToListButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backToListText}>← Voltar para lista</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 300,
        backgroundColor: '#e1e1e1',
    },
    content: {
        padding: 20,
    },
    categoryContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#4a90e2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        marginBottom: 15,
    },
    category: {
        fontSize: 11,
        fontWeight: '700',
        color: '#fff',
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        lineHeight: 34,
        marginBottom: 15,
    },
    metadata: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    author: {
        fontSize: 14,
        color: '#666',
        fontWeight: '600',
    },
    date: {
        fontSize: 14,
        color: '#999',
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 20,
    },
    description: {
        fontSize: 18,
        color: '#555',
        lineHeight: 26,
        marginBottom: 20,
        fontWeight: '500',
    },
    contentText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 26,
        marginBottom: 30,
    },
    actions: {
        gap: 12,
        marginTop: 10,
    },
    shareButton: {
        backgroundColor: '#50c878',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    shareButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backToListButton: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    backToListText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 18,
        color: '#999',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#4a90e2',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default NewsDetailScreen;