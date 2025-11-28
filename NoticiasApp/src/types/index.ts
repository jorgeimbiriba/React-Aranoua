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

export type RootStackParamlist = {
    List: undefined,
    Detail: {newId: string}
}

//props tipados para navegação
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type NewsListScreenProps = NativeStackScreenProps <RootStackParamlist, 'List'>
export type NewsDetailScreenProps = NativeStackScreenProps <RootStackParamlist, 'Detail'>