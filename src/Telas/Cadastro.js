import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useFonts } from 'expo-font';

import { db, auth } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Cadastro = () => {
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    });

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const nav = useNavigation();

    const BuscarCep = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            if (response.data.erro) {
                throw new Error('CEP não encontrado');
            }

            const { logradouro, localidade, bairro, uf } = response.data;
            setRua(logradouro);
            setCidade(localidade);
            setBairro(bairro);
            setEstado(uf);

            return {
                cep,
                rua: logradouro,
                cidade: localidade,
                bairro,
                estado: uf,
            };
        } catch (error) {
            console.error('Erro ao buscar o CEP', error);
            alert(`Erro: ${error.message}`);
            return null;
        }
    };

    const handleCadastro = async () => {
        setErrorMessage('');

        // Verificar se as senhas são iguais
        if (senha !== confirmaSenha) {
            setErrorMessage('As senhas não coincidem!');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            // Enviar informações ao db incluindo o uid
            await setDoc(doc(db, 'usuarios', user.uid), {
                uid: user.uid,  // Guardar o ID do usuário
                nome,
                sobrenome,
                telefone,
                email,
                endereco: {
                    cep, rua, bairro, cidade, estado
                },
            });

            

        } catch (error) {
            setErrorMessage('Erro ao cadastrar: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ height: 80, justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'jaini-purva', textAlign: 'center', fontSize: 50, color: "white" }}>WildZypher</Text>
                <Text style={styles.title}>Deixe sua marca</Text>
            </View>

            <View style={styles.inputs}>
                <TextInput
                    id='nome'
                    style={styles.input}
                    placeholder="nome"
                    value={nome}
                    onChangeText={setNome}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput
                    id='sobrenome'
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                />
            </View>
            <View style={styles.inputs}>
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
                <TextInput
                    id='telefone'
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                />
            </View>
            <View style={{ flexDirection: 'column', width: '80%', justifyContent: 'space-around', alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center' }}>
                    <TextInput
                        id='cep'
                        style={[styles.input, { width: 150, textAlign: 'center' }]}
                        placeholder="cep"
                        value={cep}
                        onChangeText={setCep}
                        onBlur={() => BuscarCep(cep)} />
                    <TextInput
                        id='bairro'
                        style={[styles.input, { width: 150, textAlign: 'center' }]}
                        placeholder="bairro"
                        value={bairro}
                        onChangeText={setBairro} />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <TextInput
                        id='estado'
                        style={[styles.input, { width: 150, textAlign: 'center' }]}
                        placeholder="estado"
                        value={estado}
                        onChangeText={setEstado} />
                    <TextInput
                        id='cidade'
                        style={[styles.input, { width: 150, textAlign: 'center' }]}
                        placeholder="cidade"
                        value={cidade}
                        onChangeText={setCidade} />
                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <TextInput
                        id='rua'
                        style={[styles.input, { width: 300, textAlign: 'center' }]}
                        placeholder="rua"
                        value={rua}
                        onChangeText={setRua} />
                </View>
            </View>
            <View style={styles.inputs}>
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
                <TextInput
                    id='confirmar_senha'
                    style={styles.input}
                    placeholder="confirmar Senha"
                    secureTextEntry
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                />
            </View>
            {errorMessage ? (
                <Text style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</Text>
            ) : null}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => nav.navigate('Login')}>
                    <Text style={{ color: 'white', marginRight: 80, fontSize: 15 }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 5,
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
