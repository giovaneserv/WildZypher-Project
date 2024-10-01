import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const nav = useNavigation();
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    })
    const google = require("../../assets/google.png")
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
    function Google() {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                nav.navigate("Feed"); // Navega para a tela de Feed

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    // [END auth_google_signin_popup_modular]
    async function handleLogin() {
        if (email && senha) {
            try {
                // Cria uma consulta para buscar o usuário com email e senha fornecidos
                const q = query(
                    collection(db, 'usuarios'),
                    where('email', '==', email),
                    where('senha', '==', senha)
                );

                // Executa a consulta e obtém os resultados
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    querySnapshot.forEach((doc) => {
                        console.log("Login bem-sucedido, ID do Documento:", doc.id);
                    });
                    nav.navigate("Feed"); // Navega para a tela de Feed
                } else {
                    alert("Usuário não encontrado");
                }
            } catch (error) {
                console.error("Erro ao tentar fazer login", error);
                alert("Erro ao tentar fazer login. Tente novamente.");
            }
        } else {
            alert("Por favor, preencha todos os campos");
        }
    }

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
            <View style={styles.inputs}>
                <TouchableOpacity onPress={Google} style={[styles.input, { flexDirection: 'row' }]}>
                    <Image source={google} />
                    <Text style={{ color: "white", fontSize: 20 }}> Logar com Google</Text>
                </TouchableOpacity>
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