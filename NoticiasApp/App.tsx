import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListScreen from './src/screens/NewsListScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#4a90e2',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="List"
                    component={NewsListScreen}
                    options={{title: 'Notícias do Dia'}}
                />
                <Stack.Screen
                    name="Detail"
                    component={NewsDetailScreen}
                    options={{title: 'Detalhes'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}