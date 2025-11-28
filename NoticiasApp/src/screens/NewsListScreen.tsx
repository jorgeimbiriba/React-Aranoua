import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    RefreshControl,
    TouchableOpacity,
    ScrollView,
    Alert,
    ListRenderItem,
} from 'react-native';
import { fetchNews, CATEGORIES } from '../services/newsApi';
import NewsCard from '../components/NewsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { News, Category, NewsListScreenProps } from '../types';

const NewsListScreen: React.FC<NewsListScreenProps> = ({ navigation }) => {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('todas');

    // useEffect: Executado quando o componente é montado
    useEffect(() => {
        loadNews();
    }, [selectedCategory]); // Recarrega quando a categoria muda

    // Função para carregar notícias
    const loadNews = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await fetchNews(selectedCategory);
            if (response.sucess && response.data) {
                setNews(response.data);
            } else {
                Alert.alert('Erro', response.error || 'Erro desconhecido');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível carregar as notícias');
        } finally {
            setLoading(false);
        }
    };

    // Função para atualizar (pull to refresh)
    const onRefresh = async (): Promise<void> => {
        setRefreshing(true);
        await loadNews();
        setRefreshing(false);
    };

    // Navegar para detalhes
    const handleNewsPress = (newsItem: News): void => {
        navigation.navigate('Detail', { newsId: newsItem.id });
    };

    // Renderizar item da lista
    const renderNewsItem: ListRenderItem<News> = ({ item }) => (
        <NewsCard news={item} onPress={() => handleNewsPress(item)} />
    );

    // Renderizar categorias
    const renderCategories = (): JSX.Element => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
            contentContainerStyle={styles.categoriesContent}
        >
            {CATEGORIES.map((category: Category) => (
                <TouchableOpacity
                    key={category.id}
                    style={[
                        styles.categoryButton,
                        selectedCategory === category.id && styles.categoryButtonActive,
                    ]}
                    onPress={() => setSelectedCategory(category.id)}
                >
                    <Text style={styles.categoryEmoji}>{category.emoji}</Text>
                    <Text
                        style={[
                            styles.categoryText,
                            selectedCategory === category.id && styles.categoryTextActive,
                        ]}
                    >
                        {category.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    // Header da lista
    const ListHeader = (): JSX.Element => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>📰 Notícias</Text>
            <Text style={styles.headerSubtitle}>
                {news.length} {news.length === 1 ? 'notícia' : 'notícias'}
            </Text>
        </View>
    );

    // Mensagem quando não há notícias
    const EmptyList = (): JSX.Element => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyText}>Nenhuma notícia encontrada</Text>
            <TouchableOpacity style={styles.retryButton} onPress={loadNews}>
                <Text style={styles.retryText}>Tentar novamente</Text>
            </TouchableOpacity>
        </View>
    );

    if (loading && news.length === 0) {
        return <LoadingSpinner message="Carregando notícias..." />;
    }

    return (
        <View style={styles.container}>
            {renderCategories()}
            <FlatList
                data={news}
                renderItem={renderNewsItem}
                keyExtractor={(item: News) => item.id}
                ListHeaderComponent={ListHeader}
                ListEmptyComponent={EmptyList}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#4a90e2']}
                        tintColor="#4a90e2"
                    />
                }
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    categoriesContainer: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    categoriesContent: {
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
    },
    categoryButtonActive: {
        backgroundColor: '#4a90e2',
    },
    categoryEmoji: {
        fontSize: 16,
        marginRight: 6,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    categoryTextActive: {
        color: '#fff',
    },
    header: {
        padding: 20,
        paddingBottom: 10,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#999',
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
    },
    emptyEmoji: {
        fontSize: 64,
        marginBottom: 15,
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        marginBottom: 20,
    },
    retryButton: {
        backgroundColor: '#4a90e2',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    retryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});

export default NewsListScreen;