import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import firebase from 'firebase/compat/app';
import "firebase/firestore"
import db from '../../firebase';
import { useFonts } from "@expo-google-fonts/montserrat";
import { collection, addDoc } from 'firebase/firestore/lite';


const handleCadastro = async ()=>{
    try {
        const docRef = await addDoc(collection(db, "usuarios"), {
            nome: "Ada",
            sobrenome: "Lovelace",
            email:'adalovalace@gmail.com',
            senha:'senha',
            confirmar_senha:'senha'
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}