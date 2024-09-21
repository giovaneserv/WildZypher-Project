import React from "react";
import { View, Text, Image, Picker, TextInput } from "react-native-web";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function perfil(){
    const icon = <FontAwesome5 name={'trash'} />;
    const icon2 = <FontAwesome5 name={'stepforward'} />;
    var img = '../'
    return (
        <View>
            <View>
                <View>
                    <Text>WildZypher</Text>
                    <Text style={{fontSize:'100'}}>{icon}</Text>
                    <Text style={{fontSize:'100'}}>{icon2}</Text>
                </View>
            </View>

        </View>
    )
}


export default perfil