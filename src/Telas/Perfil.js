import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Navbar from "./Navbar";
import { collection, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Icon from 'react-native-vector-icons/FontAwesome';
import { auth } from '../../firebase';
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { db } from '../../firebase';

function Perfil() {
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingPostId, setEditingPostId] = useState(null);
    const [editedDescription, setEditedDescription] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;

                try {
                    const usuariosRef = collection(db, "usuarios");
                    const q = query(usuariosRef, where("uid", "==", userId));

                    const querySnapshot = await getDocs(q);
                    if (!querySnapshot.empty) {
                        querySnapshot.forEach((doc) => {
                            setUserData(doc.data());
                        });
                    } else {
                        console.log("Usuário não encontrado");
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário: ", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        const fetchUserPosts = async () => {
            if (auth.currentUser) {
                const userId = auth.currentUser.uid;
                try {
                    const postsRef = collection(db, "posts");
                    const q = query(postsRef, where("userId", "==", userId));

                    const querySnapshot = await getDocs(q);
                    const postsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setPosts(postsArray);
                } catch (error) {
                    console.error("Erro ao buscar posts do usuário: ", error);
                }
            }
        };

        fetchUserData();
        fetchUserPosts();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.navigate('Login');
        } catch (error) {
            console.error("Erro ao fazer logout: ", error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            const postDocRef = doc(db, "posts", postId);
            await deleteDoc(postDocRef);
            setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
            console.log("Post excluído com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir post: ", error);
        }
    };

    const handleEditPost = (post) => {
        setEditingPostId(post.id);
        setEditedDescription(post.descricao);
    };

    const handleUpdatePost = async (postId) => {
        try {
            const postDocRef = doc(db, "posts", postId);
            await updateDoc(postDocRef, { descricao: editedDescription });
            setPosts((prevPosts) =>
                prevPosts.map(post => post.id === postId ? { ...post, descricao: editedDescription } : post)
            );
            setEditingPostId(null);
            setEditedDescription('');
            console.log("Post atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar post: ", error);
        }
    };

    if (loading) {
        return <Text style={{ color: 'white', textAlign: 'center' }}>Carregando...</Text>;
    }

    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar />
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
                <View style={{ alignItems: 'center' }}>
                    <Icon name="user-circle-o" color={'#5200FF'} size={100} />
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>{userData?.nome || "Nome do Usuário"}</Text>
                    <View style={estilos.contactInfo}>
                        <Text style={estilos.contactText}>{userData?.telefone || "Telefone"}</Text>
                        <Text style={estilos.contactText}>{userData?.email || "Email"}</Text>
                        <Text style={estilos.contactText}>{userData?.endereco?.rua || "Endereço"}</Text>
                    </View>

                    {posts.map((post) => (
                        <View key={post.id} style={estilos.postCard}>
                            {editingPostId === post.id ? (
                                <View style={estilos.editContainer}>
                                    <TextInput
                                        style={estilos.input}
                                        value={editedDescription}
                                        onChangeText={setEditedDescription}
                                        onSubmitEditing={() => handleUpdatePost(post.id)}
                                    />
                                    <TouchableOpacity onPress={() => handleUpdatePost(post.id)}>
                                        <Icon name="check" color={'green'} size={20} />
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={estilos.postContent}>
                                    <Text style={estilos.postDescription}>{post.descricao}</Text>
                                    {post.imageUrl && (
                                        <Image source={{ uri: post.imageUrl }} style={estilos.postImage} resizeMode="cover" />
                                    )}
                                    <View style={estilos.actions}>
                                        <TouchableOpacity onPress={() => handleEditPost(post)}>
                                            <Icon name="edit" color={'white'} size={20} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleDeletePost(post.id)}>
                                            <Icon name="trash" color={'red'} size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <TouchableOpacity style={estilos.button} onPress={handleLogout}>
                <Text style={estilos.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    contactInfo: {
        marginVertical: 20,
    },
    contactText: {
        color: 'white',
        marginBottom: 5,
    },
    postsContainer: {
        marginTop: 20,
        width: '100%',
    },
    postCard: {
        backgroundColor: '#003B5C',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '90%',
        alignItems: 'center',
    },
    postImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    postDescription: {
        width:'100%',
        color: 'white',
        fontSize: 14,
        marginBottom: 10, // Adicione um espaço abaixo da descrição
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postContent: {
        flexDirection: 'column',
        height: '100%', // Certifique-se de que o conteúdo ocupa o espaço total
        alignItems: 'flex-start', // Alinhe à esquerda
        width: '100%', // Ocupar toda a largura do card
    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#003B5C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Perfil;
