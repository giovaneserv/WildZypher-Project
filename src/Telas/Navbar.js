import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native-web";
import { useFonts } from "@expo-google-fonts/montserrat";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "@react-navigation/native";


function Navbar() {
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    })
    const nav = useNavigation()
    function Navigate(Tela) {
        if (Tela == 'bell') {
            nav.navigate('Notificacoes')
        } else if (Tela == 'perfil') {
            nav.navigate('Perfil')
        } else if (Tela == 'Feed'){
            nav.navigate('Feed')
        }
    }
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: '#5200FF', justifyContent: 'space-around' }} >
            <View>
                <TouchableOpacity onPress={() => Navigate('Feed')}>

                    <Text style={{ color: 'white', fontFamily: 'jaini-purva', fontSize: 20 }}>WildZypher</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => Navigate('bell')}>
                        <Icon style={{ color: '#5200FF', }} size={20} name="bell" />
                    </TouchableOpacity>
                    <Icon style={{ color: '#5200FF', }} size={20} name="comments" />
                    <Icon style={{ color: '#5200FF', }} size={20} name="handshake-o" />
                    <Icon />
                </View>

            </View>
            <View style={{ alignSelf: 'flex-end', marginBottom: 10, borderRadius: 50 }}>
                <TextInput placeholder=" Pesquisar" style={{ backgroundColor: '#003B5C', borderRadius: 50, borderWidth: 2, borderColor: '#5200FF', color: 'grey', }} />

            </View>
            <View>
                <TouchableOpacity onPress={() => Navigate('perfil')}>

                    <Icon style={{ width: 50, height: 50, }} color={'#5200FF'} size={50} name="user-circle-o" />
                </TouchableOpacity>
            </View>
        </View>

    )
}


export default Navbar