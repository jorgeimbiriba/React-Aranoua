import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
    useCallback,
    useMemo,
} from 'react';
import { FavoritesContextData } from '../types';
import { saveFavorites, getFavorites } from '../services/storage';

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

interface FavoritesProviderProps {
    children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const loadFavorites = async (): Promise<void> => {
            try {
                const storedFavorites = await getFavorites();
                setFavorites(storedFavorites);
            } catch (error) {
                console.error('Erro ao carregar favoritos:', error);
            }
        };

        loadFavorites();
    }, []);

    const addFavorite = useCallback(
        async (userId: string): Promise<void> => {
            try {
                const newFavorites = [...favorites, userId];
                await saveFavorites(newFavorites);
                setFavorites(newFavorites);
            } catch (error) {
                console.error('Erro ao adicionar favorito:', error);
                throw error;
            }
        },
        [favorites]
    );

    const removeFavorite = useCallback(
        async (userId: string): Promise<void> => {
            try {
                const newFavorites = favorites.filter(id => id !== userId);
                await saveFavorites(newFavorites);
                setFavorites(newFavorites);
            } catch (error) {
                console.error('Erro ao remover favorito:', error);
                throw error;
            }
        },
        [favorites]
    );

    const isFavorite = useCallback(
        (userId: string): boolean => {
            return favorites.includes(userId);
        },
        [favorites]
    );

    const value = useMemo(
        () => ({
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite,
        }),
        [favorites, addFavorite, removeFavorite, isFavorite]
    );

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = (): FavoritesContextData => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
    }
    return context;
};