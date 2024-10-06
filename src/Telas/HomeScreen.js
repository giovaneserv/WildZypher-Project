import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase'; // Ajuste para importar o auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Importar funções necessárias
import { useNavigation } from '@react-navigation/native';
 
const HomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Use onAuthStateChanged do auth
      setUser(user);
      setLoading(false);
    });
 
    return () => unsubscribe();
  }, []);
 
  if (loading) {
    return <Text>Loading...</Text>;
  }
 
  if (!user) {
    navigation.navigate('Login'); 
    return null; // Previne renderização da tela se o usuário não estiver logado
  }else if(user){
    navigation.navigate('Feed'); 
    return null;
  }
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo, {user.email}</Text>
      <Button title="Sair" onPress={() => signOut(auth)} /> {/* Usando signOut do auth */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: 'blue', marginTop: 20 }}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default HomeScreen;