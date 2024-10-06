import React from "react";
import Login from "./src/Telas/Login";
import Perfil from "./src/Telas/Perfil";
import Cadastro from "./src/Telas/Cadastro";
import Postar from "./src/Telas/Postar";
import Feed from "./src/Telas/Feed"
import HomeScreen from "./src/Telas/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}
          options={{headerShown: false, title: 'Login', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Login" component={Login}
          options={{headerShown: false, title: 'Login', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{headerShown: false, title: 'Perfil', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name='Perfil' component={Perfil}
          options={{headerShown: false, headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name='Postar' 
        options={{headerShown: false, title:'Feed', headerStyle: { backgroundColor: 'black'} , headerTintColor: 'white' }} component={Postar} />
        <Stack.Screen name='Feed' 
        options={{headerShown: false, title:'Feed', headerStyle: { backgroundColor: 'black'} , headerTintColor: 'white' }} component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App