import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../../firebase';
import { useFonts } from "@expo-google-fonts/montserrat";
import { collection, addDoc } from 'firebase/firestore';

const Cadastro = () => {
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    });
    
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const handleCadastro = async () => {
        // Validação da senha
        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "nada_absolutamente"), {
                nome,
                sobrenome,
                email,
                senha,
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Cadastro realizado com sucesso!');
        } catch (e) {
            console.error("Error adding document: ", e);
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 80, justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'jaini-purva', textAlign: 'center', fontSize: 50, color: "white" }}>WildZypher</Text>
                <Text style={styles.title}>Deixe sua marca</Text>
            </View>

            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 20 }}>Nome:</Text>
                <TextInput
                    id='nome'
                    style={styles.input}
                    placeholder="nome"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>
            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 20 }}>Sobrenome:</Text>
                <TextInput
                    id='sobrenome'
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />
            </View>
            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 20 }}>Email:</Text>
                <TextInput
                    id='email'
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 20 }}>Senha:</Text>
                <TextInput
                    id='senha'
                    style={styles.input}
                    placeholder="senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>
            <View style={styles.inputs}>
                <Text style={{ color: "white", fontSize: 20 }}>Confirmar Senha:</Text>
                <TextInput
                    id='confirmar_senha'
                    style={styles.input}
                    placeholder="confirmarSenha"
                    secureTextEntry
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar-se</Text>
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
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '90%',
        backgroundColor: '#003B5C',
        color: 'white',
        borderWidth: 1,
        borderRadius: 5,
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

export default Cadastro;
