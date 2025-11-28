import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { News } from '../types';

interface NewsCardProps {
    news: News;
    onPress: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onPress }) => {
    // Formatar data
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <Image
                source={{ uri: news.urlToImage }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                <Text style={styles.category}>
                    {news.category?.toUpperCase() || 'GERAL'}
                </Text>
                <Text style={styles.title} numberOfLines={2}>
                    {news.title}
                </Text>
                <Text style={styles.description} numberOfLines={2}>
                    {news.description}
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.author}>{news.author}</Text>
                    <Text style={styles.date}>{formatDate(news.publishedAt)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginHorizontal: 15,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: '#e1e1e1',
    },
    content: {
        padding: 15,
    },
    category: {
        fontSize: 11,
        fontWeight: '700',
        color: '#4a90e2',
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        lineHeight: 24,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    author: {
        fontSize: 12,
        color: '#999',
        fontWeight: '600',
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
});

export default NewsCard;