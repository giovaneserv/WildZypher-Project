import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import Navbar from "./Navbar";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { db, auth } from '../../firebase';
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

function Feed() {
    const nav = useNavigation();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [posts, setPosts] = useState([]);
    const [descricao, setDescricao] = useState('');

    const obterNomeUsuario = async () => {
        const user = auth.currentUser;
        if (user) {
            const userId = user.uid;
            try {
                const docRef = doc(db, "usuarios", userId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setNomeUsuario(userData.nome);
                } else {
                    console.log("Nenhum documento encontrado para esse usuário!");
                }
            } catch (error) {
                console.error("Erro ao buscar os dados do usuário:", error);
            }
        } else {
            console.log("Usuário não está logado!");
        }
    };

    const buscarPosts = async () => {
        try {
            const postsQuery = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(postsQuery);
            const postsArray = [];

            for (const postDoc of querySnapshot.docs) {
                const postData = postDoc.data();
                const userId = postData.userId;

                const userDocRef = doc(db, "usuarios", userId);
                const userDocSnap = await getDoc(userDocRef);
                const userName = userDocSnap.exists() ? userDocSnap.data().nome : 'Usuário desconhecido';
                const userEmail = userDocSnap.exists() ? userDocSnap.data().email : 'Email não disponível';
                const userPhone = userDocSnap.exists() ? userDocSnap.data().telefone : 'Telefone não disponível';

                postsArray.push({
                    id: postDoc.id,
                    descricao: postData.descricao,
                    userName: userName,
                    email: userEmail,
                    telefone: userPhone,
                    imageUrl: postData.imageUrl || null
                });
            }

            setPosts(postsArray);
        } catch (e) {
            console.error('Erro ao buscar os posts: ', e);
        }
    };

    useFocusEffect(
        useCallback(() => {
            // Recarrega a tela sempre que ela é acessada
            console.log('Tela recarregada!');
            obterNomeUsuario();
            buscarPosts();
        }, [])
    );

    const renderPost = ({ item }) => (
        <View style={styles.postCard}>
            <View style={styles.postHeader}>
                <Icon color={'#5200FF'} size={40} name="user-circle-o" />
                <Text style={styles.postUserName}>
                    {item.userName ? item.userName : 'Usuário desconhecido'}
                </Text>
            </View>
            <Text style={styles.postDescription}>{item.descricao}</Text>
            {item.imageUrl && (
                <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
            )}
            <View style={styles.contactArea}>
                <Text style={styles.contactHeader}>Contato:</Text>
                <Text style={styles.contactText}>Email: {item.email}</Text>
                <Text style={styles.contactText}>Telefone: {item.telefone}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Bem-vindo {nomeUsuario}</Text>
            </View>
            <View style={styles.inputContainer}>
                <Icon color={'#5200FF'} size={40} name="user-circle-o" />
                <TouchableOpacity onPress={() => nav.navigate('Postar')}>
                    <TextInput
                        placeholder="Poste seu Projeto"
                        value={descricao}
                        onChangeText={setDescricao}
                        style={styles.input}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderPost}
                style={styles.postsContainer}
            />
        </View>
    );
}

export default Feed;

// Estilos
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F1C2D',
        flex: 1,
        padding: 20
    },
    header: {
        alignItems: 'center',
        marginBottom: 20
    },
    welcomeText: {
        color: 'white',
        fontSize: 18
    },
    inputContainer: {
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#003B5C',
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'black',
        color: 'white',
        marginLeft: 10,
        paddingLeft: 10,
        height: 40,
        width: 200
    },
    postsContainer: {
        flex: 1,
    },
    postCard: {
        backgroundColor: '#003B5C',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 2
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    postUserName: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16
    },
    postDescription: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10
    },
    contactArea: {
        backgroundColor: '#1F2D3D',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    contactHeader: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5
    },
    contactText: {
        color: 'white',
        fontSize: 14
    }
});
