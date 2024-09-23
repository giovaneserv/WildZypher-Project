import React from "react";
import Login from "./src/Telas/Login";
import Perfil from "./src/Telas/Perfil";
import Cadastro from "./src/Telas/Cadastro";
import Notificacoes from "./src/Telas/Notificacoes"
import Postar from "./src/Telas/Postar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Postar">
        <Stack.Screen name="Login" component={Login}
          options={{ title: 'Login', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{ title: 'Perfil', headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name='Perfil' component={Perfil}
          options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} />
        <Stack.Screen name='Notificacoes' options={{ headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white' }} component={Notificacoes} />
        <Stack.Screen name='Postar' component={Postar} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App