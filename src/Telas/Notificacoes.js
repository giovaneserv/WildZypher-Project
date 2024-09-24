import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native-web";
import Navbar from "./Navbar";
import Icon from 'react-native-vector-icons/FontAwesome'; // Corrija o uso de Icon aqui

function Notificacoes() {
    // Notificações com o nome correto do ícone
    let notificacoes = [
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
        { user_name: 'Usuário', icon: 'user-circle-o', content: 'Compartilhou um projeto.' },
    ];

    // Função para renderizar cada item
    function showIt({ item }) {
        return (
            <View style={styles.notificationContainer}>
                {/* Corrigido o uso de Icon */}
                <Icon name={item.icon} size={24} color="#5200FF" style={{ marginRight: 10 }} />
                <View>
                    <Text style={styles.userName}>{item.user_name}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar />
            <View style={{flex:0.52, height:200}}>
                <View style={{ height:50}}>
                    
                    <Text style={styles.titulo}>Notificações</Text>
                    
                </View>
                    
                    <FlatList
                        data={notificacoes}
                        renderItem={showIt}
                        keyExtractor={(item, index) => index.toString()} // Adiciona chave única
                    />
                    
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: 'white',
        fontSize: 30,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#5200FF',
        borderBottomWidth: 1,
    },
    userName: {
        fontWeight: 'bold',
        color: 'white',
    },
    content: {
        color: 'gray',
    },
});

export default Notificacoes;
