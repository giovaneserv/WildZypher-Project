import React from "react";
import { View, Text, Image, Picker, TextInput } from "react-native-web";
import Navbar from "./Navbar";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'


function Perfil() {

    return (
        <View style={{backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar/>
            <View style={{flex:0.68, justifyContent: 'center', alignItems: 'center'}}>
                <Icon style={{}} name="user-circle-o" color={'purple'} size={100}/>
                <Text style={{textAlign:'center', color:'white'}}>Nome do Usuário</Text>
            </View>
        </View>
    )
}


export default Perfil