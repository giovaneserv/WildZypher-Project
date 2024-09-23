import React from "react";
import { View, Text, Image, Picker, TextInput } from "react-native-web";
import { useFonts } from "@expo-google-fonts/montserrat";
import Icon from 'react-native-vector-icons/FontAwesome'


function Navbar() {
    const [loaded, error] = useFonts({
        'jaini-purva': require('../../assets/fonts/JainiPurva-Regular.ttf'),
    })
    return (
            <View style={{ flexDirection: 'row', borderWidth: 1, borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: '#5200FF', justifyContent: 'space-around' }} >
                <View>
                    <Text style={{ color: 'white', fontFamily:'jaini-purva',fontSize:20 }}>WildZypher</Text>
                    <View style={{ flexDirection: 'row',  justifyContent: 'space-between' }}>
                        <Icon style={{ color: '#5200FF', }} size={20} name="bell" />
                        <Icon style={{ color: '#5200FF', }} size={20} name="comments" />
                        <Icon style={{ color: '#5200FF', }} size={20} name="handshake-o" />
                        <Icon />
                    </View>

                </View>
                <View style={{ alignSelf: 'flex-end', marginBottom:10, borderRadius:50 }}>
                    <TextInput placeholder=" Pesquisar" style={{ backgroundColor: '#003B5C', borderRadius:50, borderWidth:2, borderColor:'#5200FF', color: 'grey', }} />

                </View>
                <View>
                    <Icon style={{ width: 50, height: 50, }} color={'#5200FF'} size={50} name="user-circle-o" />
                </View>
            </View>

    )
}


export default Navbar