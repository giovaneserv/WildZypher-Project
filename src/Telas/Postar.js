import React from "react-native";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image } from "react-native";
import Navbar from "./Navbar";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker'; // Importa o ImagePicker

function Postar() {
    const nav = useNavigation();
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState(null); // Estado para armazenar a imagem
    const user = auth.currentUser; // Obter o usuário autenticado

    const postarProjeto = async () => {
        if (user) {
            const userId = user.uid; // Pegar o UID do usuário logado
            try {
                const postData = {
                    descricao: descricao,
                    userId: userId, // Adicionar o ID do usuário logado ao documento
                    createdAt: serverTimestamp() // Adiciona o timestamp do servidor
                };
    
                // Se uma imagem foi selecionada, adicione-a aos dados do post
                if (image) {
                    postData.imageUrl = image; // Armazena a URI da imagem
                }
    
                await addDoc(collection(db, "posts"), postData);
                nav.navigate('Feed')
            } catch (e) {
                console.error("Erro ao adicionar o documento: ", e);
                alert('Erro ao postar. Tente novamente.');
            }
        } else {
            alert("Nenhum usuário logado. Faça login para postar.");
        }
    };

    // Função para selecionar imagem da galeria
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // Armazena a URI da imagem
        }
    };

    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar />
            <View style={{ alignItems: 'center' }}>
                <View style={estilos.viewTitulo}>
                    <Text style={estilos.titulo}>Poste seu Projeto</Text>
                </View>
                <View style={estilos.ViewInput}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>Descreva seu Projeto</Text>
                    <TextInput
                        style={estilos.TextInput}
                        placeholder="Descreva aqui seu projeto..."
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline={true} />
                    {/* Exibe a imagem selecionada, se houver */}
                    {image && <Image source={{ uri: image }} style={estilos.imagePreview} />}

                    <TouchableHighlight onPress={pickImage}>
                        <Icon name="image" size={30} color="#5200FF" />
                    </TouchableHighlight>
                    {/* Ícone clicável para selecionar imagem */}

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 0.20 }}>
                    <TouchableHighlight style={estilos.button} onPress={() => nav.navigate("Feed")}>
                        <Text style={estilos.buttonText}>Cancelar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={estilos.button} onPress={postarProjeto}>
                        <Text style={estilos.buttonText}>Postar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    viewTitulo: {
        flex: 0.15, justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    ViewInput: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 420,
        width: 340,
        flex: 0.80,
        alignContent: 'center',
        borderWidth: 2,
        borderColor: '#5200FF'
    },
    TextInput: {
        height: 410,
        width: 320,
      
        color: 'white',
        textAlignVertical: 'top'
    },
    button: {
        backgroundColor: '#003B5C',
        paddingVertical: 10,
        width: 100,
        height: 45,
        borderRadius: 25,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imagePreview: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
});

export default Postar;
