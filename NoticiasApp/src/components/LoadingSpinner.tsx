import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
                                                           message = 'Carregando...'
                                                       }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#4a90e2" />
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        marginTop: 15,
        fontSize: 16,
        color: '#666',
    },
});

export default LoadingSpinner;