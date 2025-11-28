export interface News{
    id: string,
    title: string,
    description: string,
    author: string,
    publishedAt: string,
    urlToImage: string,
    content: string,
    category: string
}

export interface Category {
    id: string,
    name: string,
    emoji:string
}

export interface ApiResponse <T>{
    sucess: boolean,
    data?: T,
    error?: string
}

export type RootStackParamList = {
    List: undefined,
    Detail: {newsId: string}
}

//props tipados para navegação
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type NewsListScreenProps = NativeStackScreenProps <RootStackParamList, 'List'>
export type NewsDetailScreenProps = NativeStackScreenProps <RootStackParamList, 'Detail'>