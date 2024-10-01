import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native-web";
import Navbar from "./Navbar";
import Icon from 'react-native-vector-icons/FontAwesome'

function Perfil() {
    const grafitti = require('../imgs/pexels.jpg')
    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar />
            <View style={{ flex: 0.54, justifyContent: 'center', alignItems: 'center' }}>
                <Icon style={{}} name="user-circle-o" color={'#5200FF'} size={100} />
                <Text style={{ textAlign: 'center', color: 'white' }}>Nome do Usuário</Text>
            </View>
            <View>
                <View style={estilos.main}>

                    <View style={estilos.abas}>
                        <Icon name="picture-o" color={'#5200FF'} size={60} />
                        <Text style={estilos.abas_texto}>Sua Arte</Text>

                    </View>
                    <View style={estilos.abas}>
                        <Icon name="paint-brush" color={'#5200FF'} size={50} />
                        <Text style={estilos.abas_texto}>Habilidades</Text>
                    </View>
                </View>
                <View>
                    <Text style={estilos.abas_texto}>Seu Melhor Projeto</Text>
                    <Image style={estilos.img} source={grafitti} />
                </View>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    abas: {
        flexDirection: 'column',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#5200FF',
        padding: 10
    },
    abas_texto: {
        textAlign: 'center',
        color: 'white'
    },
    img: {
        alignSelf: 'center',
        width: 200,
        borderWidth: 3,
        borderColor: '#5200FF',
        height: 130
    },
    main: {
        justifyContent: 'space-around',
        flexDirection: 'row',

    }
})
export default Perfil