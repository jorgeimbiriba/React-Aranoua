import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Componentes de ícones separados
function HomeIcon({ color, size }:any ){
    return <Text style={{ fontSize: size, color }}>🏠</Text>;
}

function ProfileIcon({ color, size }:any ){
    return <Text style={{ fontSize: size, color }}>👤</Text>;
}

function SettingsIcon({ color, size }:any ){
    return <Text style={{ fontSize: size, color }}>⚙️</Text>;
}

// Stack Navigator para Home (permite navegar para Details)
function HomeStack() {
    return (
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
                name="HomeMain"
                component={HomeScreen}
                options={{ title: 'Início' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Detalhes do Perfil' }}
            />
        </Stack.Navigator>
    );
}

// Stack Navigator para Perfil
function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#9b59b6',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="ProfileMain"
                component={ProfileScreen}
                options={{ title: 'Meu Perfil' }}
            />
        </Stack.Navigator>
    );
}

// Stack Navigator para Configurações
function SettingsStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#666',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="SettingsMain"
                component={SettingsScreen}
                options={{ title: 'Configurações' }}
            />
        </Stack.Navigator>
    );
}

// Tab Navigator Principal
export default function AppNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#4a90e2',
                tabBarInactiveTintColor: '#999',
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: HomeIcon,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ProfileIcon,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsStack}
                options={{
                    tabBarLabel: 'Configs',
                    tabBarIcon: SettingsIcon,
                }}
            />
        </Tab.Navigator>
    );
}