import React from "react";
import { View, Text, Image, TextInput,TouchableOpacity, StyleSheet } from "react-native-web";
import Navbar from "./Navbar";
import Icon from 'react-native-vector-icons/FontAwesome'
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import { useNavigation } from "@react-navigation/native";
function Feed() {
    const grafitti = require('../imgs/pexels.jpg')
    
    const nav = useNavigation()

    
    return (
        <View style={{ backgroundColor: '#0F1C2D', flex: 1 }}>
            <Navbar/>
            <View style={{ alignItems: 'center', flex: 0.10 }}>
                <Text style={{ color: 'white' }}>Bem-vindo Usuário</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Icon style={{ height: 5, flexDirection: 'row-reverse' }} color=
                    {'#5200FF'} size={40} name="user-circle-o" />

                <View style={{ alignSelf: 'center', marginBottom: 10, borderRadius: 50, height: 50 }}>
                  <TouchableOpacity onPress={()=> nav.navigate('Postar') }>
                      
                        <TextInput placeholder="Poste seu Projeto" style={{
                            backgroundColor: '#003B5C', borderRadius: 20,
                            borderWidth: 3, borderColor: 'black', color: 'white'}} />
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{ borderRadius: 50, height: 50, marginBottom: 10 }}>
                <View style={{ alignItems: 'center',borderRadius: 20}}>
                    <View>
                        <Icon style={{
                            height: 50, flexDirection:
                                'row-reverse'
                        }} color=
                            {'#5200FF'} size={40} name="user-circle-o" />
                    </View>
                    <Text style={{color: 'white'}}>Usuário do WildZypher</Text>
                    <Image source={grafitti} />
                </View>
            </View>
        </View>
    )
}

export default Feed;