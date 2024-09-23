import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useFonts } from '@expo-google-fonts/montserrat';
const Login = () => {
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        if (email && password) {
            Alert.alert('Login realizado com sucesso!', `E-mail: ${email}\nSenha: ${password}`);
        } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
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
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>Não tem conta? Cadastre-se</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F1C2D',
    },
    inner: {
        width: '80%',
        padding: 20,
        backgroundColor: '#0F1C2D',
        elevation: 5,
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
        marginLeft: '10%'
    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: '#003B5C',
        color: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#003B5C', // Cor de fundo personalizada
        paddingVertical: 10,
        width: 100,
        height: 45,
        borderRadius: 25,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Login;