import React from "react";
import login from "./src/Telas/login";
import cadastro from "./src/Telas/cadastro";
import perfil from './src/Telas/perfil'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="perfil">
        <Stack.Screen name="login" component={login}
          options={{ title:'Tela Login', headerStyle:{display:'none'}}} />
        <Stack.Screen name="cadastro" component={cadastro}
          options={{ title:'Tela cadastro', headerStyle:{backgroundColor:'black'}, headerTintColor:'white' }} />
          <Stack.Screen name='perfil' component={perfil}
          />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App