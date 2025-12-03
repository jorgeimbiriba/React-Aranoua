import {NativeStackScreeenProps} from '@react-navigation/native-stack'
import {DrawerScreenProps} from '@react-navigation/drawer'

//modelo de Dados

//interface que representa um susário completo no sistema
export interface User{
    id: string,
    name: string,
    email: string,
    age: number,
    profession: string,
    bio: string,
    phone?: string,
    location?: string,
    avatar?: string,
}

//versao simplificada do usuario, usada em listas
export interface UserProfile {
    id: string,
    nome: string,
    idade: number,
    profissao: string,
    bio: string,
}

//interface que define o uso do AuthContext fornece para o App
export interface AuthContextData {
    user: User | null,
    isAuthenticated: boolean,
    login: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    updateProfie: (userData: Partial<User>) => Promise<void>,
}

//interface do contexto de favoritos
export interface FavoritesContextData {
    favorites: string[],
    addFavorite: (userId: string) => Promise<void>,
    removeFavorite: (userId: string) => Promise<void>,
    isFavorited: (userId: string) => boolean,
}

//tipos de navegação (Routes param lists)
//listas de rotas stack principal da aplicacao
export type RootStackParamList = {
    Auth: undefined;
    Main:undefined;
}

//lista de rotas do stack responsavel pela autenticacao
export type AuthStackParamList = {
    Login: undefined;
}

//lista de rotas do drawer
export type DrawerParamList = {
    HomeTabs: undefined;
    Favorites: undefined;
    Settings: undefined;
}

export type HomeStackParamList = {
    HomeMain:undefined;
    Details: {usuario:UserProfile};
}

export type ProfileStackParamList = {
    ProfileMain: undefined;
}

export type LoginScreenProps = NativeStackScreeenProps<AuthStackParamList, 'Login'>
export type HomeScreenProps = NativeStackScreeenProps<HomeStackParamList, 'Home'>
export type ProfileScreenProps = NativeStackScreeenProps<ProfileStackParamList, 'Profile'>
export type DetailScreenProps = NativeStackScreeenProps<DetailsStackParamList, 'Details'>
export type FavoritesScreenProps = DrawerScreenProps<DrawerScreenProps, 'Favorites'>
