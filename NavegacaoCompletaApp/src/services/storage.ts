import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types';

// Objeto com as chaves usadas no AsyncStorage para evitar strings soltas no código
const STORAGE_KEYS = {
    USER: '@NavApp:user',
    FAVORITES: '@NavApp:favorites',
};

// Salvar usuário
export const saveUser = async (user: User): Promise<void> => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        throw error;
    }
};

// Buscar usuário
export const getUser = async (): Promise<User | null> => {
    try {
        const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER);
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return null;
    }
};

// Remover usuário
export const removeUser = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEYS.USER);
    } catch (error) {
        console.error('Erro ao remover usuário:', error);
        throw error;
    }
};

// Salvar favoritos
export const saveFavorites = async (favorites: string[]): Promise<void> => {
    try {
        await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
        console.error('Erro ao salvar favoritos:', error);
        throw error;
    }
};

// Buscar favoritos
export const getFavorites = async (): Promise<string[]> => {
    try {
        const favoritesData = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
        return favoritesData ? JSON.parse(favoritesData) : [];
    } catch (error) {
        console.error('Erro ao buscar favoritos:', error);
        return [];
    }
};
