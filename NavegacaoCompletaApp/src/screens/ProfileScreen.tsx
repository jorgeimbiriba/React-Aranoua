import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Modal,
} from 'react-native';
import { ProfileScreenProps } from '../types';
import { useAuth } from '../contexts/AuthContext';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {
    const { user, updateProfile } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);
    const [editedName, setEditedName] = useState(user?.name || '');
    const [editedBio, setEditedBio] = useState(user?.bio || '');
    const [editedPhone, setEditedPhone] = useState(user?.phone || '');
    const [editedLocation, setEditedLocation] = useState(user?.location || '');

    if (!user) {
        return null;
    }

    const handleSaveProfile = async (): Promise<void> => {
        try {
            await updateProfile({
                name: editedName,
                bio: editedBio,
                phone: editedPhone,
                location: editedLocation,
            });
            setModalVisible(false);
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
        }
    };

    const openEditModal = (): void => {
        setEditedName(user.name);
        setEditedBio(user.bio);
        setEditedPhone(user.phone || '');
        setEditedLocation(user.location || '');
        setModalVisible(true);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarLarge}>
                    <Text style={styles.avatarText}>
                        {user.name.charAt(0)}
                    </Text>
                </View>
                <Text style={styles.nome}>{user.name}</Text>
                <Text style={styles.profissao}>{user.profession}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.conteudo}>
                <View style={styles.secao}>
                    <View style={styles.secaoHeader}>
                        <Text style={styles.secaoTitulo}>📊 Informações</Text>
                        <TouchableOpacity onPress={openEditModal}>
                            <Text style={styles.editButton}>✏️ Editar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoCard}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Idade</Text>
                            <Text style={styles.infoValor}>{user.age} anos</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Profissão</Text>
                            <Text style={styles.infoValor}>{user.profession}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>✨ Sobre</Text>
                    <View style={styles.bioCard}>
                        <Text style={styles.bioTexto}>{user.bio}</Text>
                    </View>
                </View>

                {user.phone && (
                    <View style={styles.secao}>
                        <Text style={styles.secaoTitulo}>📞 Contato</Text>
                        <View style={styles.infoCard}>
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Telefone:</Text>
                                <Text style={styles.contactValue}>{user.phone}</Text>
                            </View>
                        </View>
                    </View>
                )}

                {user.location && (
                    <View style={styles.secao}>
                        <Text style={styles.secaoTitulo}>📍 Localização</Text>
                        <View style={styles.infoCard}>
                            <View style={styles.contactItem}>
                                <Text style={styles.contactLabel}>Local:</Text>
                                <Text style={styles.contactValue}>{user.location}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>

            {/* Modal de Edição */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar Perfil</Text>

                        <Text style={styles.inputLabel}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={editedName}
                            onChangeText={setEditedName}
                            placeholder="Seu nome"
                        />

                        <Text style={styles.inputLabel}>Bio</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            value={editedBio}
                            onChangeText={setEditedBio}
                            placeholder="Sua bio"
                            multiline
                            numberOfLines={3}
                        />

                        <Text style={styles.inputLabel}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            value={editedPhone}
                            onChangeText={setEditedPhone}
                            placeholder="(00) 00000-0000"
                            keyboardType="phone-pad"
                        />

                        <Text style={styles.inputLabel}>Localização</Text>
                        <TextInput
                            style={styles.input}
                            value={editedLocation}
                            onChangeText={setEditedLocation}
                            placeholder="Cidade, Estado"
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={handleSaveProfile}
                            >
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#9b59b6',
        padding: 30,
        alignItems: 'center',
    },
    avatarLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#9b59b6',
    },
    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    profissao: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.9,
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
    },
    conteudo: {
        padding: 20,
    },
    secao: {
        marginBottom: 25,
    },
    secaoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    secaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    editButton: {
        fontSize: 16,
        color: '#4a90e2',
        fontWeight: '600',
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    infoItem: {
        alignItems: 'center',
        marginBottom: 15,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    infoValor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    bioCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    bioTexto: {
        fontSize: 15,
        color: '#333',
        lineHeight: 22,
    },
    contactItem: {
        marginBottom: 10,
    },
    contactLabel: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    contactValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        width: '90%',
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginTop: 10,
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        gap: 10,
    },
    modalButton: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#f5f5f5',
    },
    cancelButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
    saveButton: {
        backgroundColor: '#4a90e2',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;