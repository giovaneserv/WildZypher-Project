import React from "react";
import { View, Text, Image, Picker, TextInput } from "react-native-web";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'


function Navbar() {

    return (
            <View style={{ flexDirection: 'row', borderWidth: 1, borderTop: 0, borderLeft: 0, borderRight: 0, borderColor: 'purple', justifyContent: 'space-around' }} >
                <View>
                    <Text style={{ color: 'white', fontSize:20 }}>WildZypher</Text>
                    <View style={{ flexDirection: 'row',  justifyContent: 'space-between' }}>
                        <Icon style={{ color: 'purple', }} size={20} name="trash" />
                        <Icon style={{ color: 'purple', }} size={20} name="comments" />
                        <Icon style={{ color: 'purple', }} size={20} name="bathtub" />
                        <Icon />
                    </View>

                </View>
                <View style={{ alignSelf: 'flex-end', marginBottom:10, borderRadius:50 }}>
                    <TextInput placeholder=" Pesquisar" style={{ backgroundColor: '#003B5C', borderRadius:50, borderWidth:2, color: 'grey', }} />

                </View>
                <View>
                    <Icon style={{ width: 50, height: 50, }} color={'purple'} size={50} name="user-circle-o" />
                </View>
            </View>

    )
}


export default Navbar