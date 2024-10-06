import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

function Navbar() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const nav = useNavigation();

    // Função para carregar a fonte
    const loadFonts = async () => {
        await Font.loadAsync({
            'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
        });
        setFontsLoaded(true);
    };

    useEffect(() => {
        loadFonts();
    }, []);

    function Navigate(Tela) {
        if (Tela === 'bell') {
            nav.navigate('Notificacoes');
        } else if (Tela === 'perfil') {
            nav.navigate('Perfil');
        } else if (Tela === 'Feed') {
            nav.navigate('Feed');
        }
    }

    if (!fontsLoaded) {
        return null; // Você pode retornar um componente de carregamento aqui se desejar
    }

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => Navigate('Feed')}>
                <Text style={styles.title}>WildZypher</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Navigate('perfil')}>
                <Icon style={styles.icon} color={'#5200FF'} size={50} name="user-circle-o" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#5200FF',
        justifyContent: 'space-around',
    },
    title: {
        color: 'white',
        fontFamily: 'jaini-purva',
        fontSize: 30,
    },
    icon: {
        width: 50,
        height: 50,
    },
});

export default Navbar;
