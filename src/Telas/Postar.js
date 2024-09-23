import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import Navbar from "./Navbar";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'


function Postar() {

    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar />
            <View style={{ alignItems: 'center' }}>

                <View style={estilos.viewTitulo}>
                    <Text style={estilos.titulo}>Poste seu Projeto</Text>
                </View>
                <View style={estilos.ViewInput}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>Descreva seu Projeto</Text>
                    <TextInput style={estilos.TextInput} placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis dolor, tenetur dicta commodi labore voluptas consequuntur eligendi repudiandae in eaque, ea, consectetur a exercitationem? Accusamus distinctio rerum debitis voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. " />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', flex:0.20}}>
                    
                        <TouchableHighlight style={estilos.button}>
                            <Text style={estilos.buttonText}>Cancelar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={estilos.button}>
                            <Text style={estilos.buttonText}>Postar</Text>
                        </TouchableHighlight>
                </View>
            </View>

        </View >
    )

}
const estilos = StyleSheet.create({
    viewTitulo: {
        flex: 0.15, justifyContent: 'center'
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    ViewInput: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 420,
        width: 340,
        flex: 0.80,
        alignContent: 'center',
        borderWidth: 2,
        borderColor: '#5200FF'
    },
    TextInput: {
        height: 410,
        width: 320,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white'
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
})
export default Postar;