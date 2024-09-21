import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

const App = () => {
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
                <View style={{height:80, justifyContent:'center'}}>
                    <Text style={{ fontFamily: 'Jaini_Purva', textAlign: 'center', fontSize: 50, color: "white" }}>WildZypher</Text>
                    <Text style={styles.title}>Deixe sua marca</Text>
                </View>
                
                <View style={styles.inputs}>
                    <Text style={{color:"white", fontSize:20}}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="nome"
                        keyboardType="nome"
                        value={email}
                        onChangeText={setEmail}
                    />
                    
                </View>
                <View style={styles.inputs}>
                <Text style={{color:"white", fontSize:20}}>Sobrenome:</Text>
                <TextInput  
                    style={styles.input}
                    placeholder="Sobrenome"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                </View>
                
                <View style={styles.inputs}>
                    <Text style={{color:"white", fontSize:20}}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="nome"
                        value={email}
                        onChangeText={setEmail}
                    />
                    
                </View>
                <View style={styles.inputs}>
                <Text style={{color:"white", fontSize:20}}>Senha:</Text>
                <TextInput  
                    style={styles.input}
                    placeholder="senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                </View>
                
                <View style={styles.inputs}>
                    <Text style={{color:"white", fontSize:20}}>Confirmar Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="confirmarSenha"
                        keyboardType="confirmarSenha"
                        value={password}
                        onChangeText={setEmail}
                    />
                    
                </View>
                <View style={styles.inputs}>
                <Text style={{color:"white", fontSize:20}}>Sobrenome:</Text>
                <TextInput  
                    style={styles.input}
                    placeholder="Sobrenome"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    inputs:{
        marginLeft:'10%'
    },
    input: {
        height: 30,
        width:'90%',
        backgroundColor: '#003B5C',
        color: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
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

export default App;