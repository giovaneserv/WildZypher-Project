import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    });
    const google = require("../../assets/google.png");
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const nav = useNavigation();

    const Google = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            await CheckUser(user.email);
        } catch (error) {
            console.error("Google Sign-In Error:", error);
            alert("Falha ao entrar com Google. Por favor, tente novamente.");
        }
    };

    const CheckUser = async (email) => {
        try {
            const usuariosRef = collection(db, "usuarios");
            const q = query(usuariosRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                nav.navigate("Feed");
            } else {
                alert("Usuário não encontrado. Por favor, registre-se primeiro.");
            }
        } catch (error) {
            console.error("Erro ao verificar usuário:", error);
            alert("Ocorreu um erro ao verificar o usuário. Por favor, tente novamente.");
        }
    };

    const handleLogin = async () => {
        if (email && senha) {
            try {
                // Faz o login com email e senha
                await signInWithEmailAndPassword(auth, email, senha);
                nav.navigate("Feed"); // Navega para a tela de Feed
            } catch (error) {
                console.error("Erro ao tentar fazer login:", error);
                alert("Usuário ou senha incorretos!");
            }
        } else {
            alert("Por favor, preencha todos os campos");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 200, justifyContent: 'center' }}>
                <Text style={styles.title}>Bem-vindo ao </Text>
                <Text style={{ fontFamily: 'jaini-purva', textAlign: 'center', fontSize: 50, color: "white" }}>WildZypher</Text>
            </View>

            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 30 }}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 30 }}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>
           
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate("Cadastro")}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1C2D',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Arial',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    inputs: {
        marginLeft: '10%',
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: '#003B5C',
        color: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
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
});

export default Login;
