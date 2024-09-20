import React from "react";
import login from "./src/login";
import cadastro from "./src/cadastro";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="cadastro">
        <Stack.Screen name="login" component={login}
          options={{ title:'Tela Login', headerStyle:{backgroundColor:'black'}, headerTintColor:'white' }} />
        <Stack.Screen name="cadastro" component={cadastro}
          options={{ title:'Tela cadastro', headerStyle:{backgroundColor:'black'}, headerTintColor:'white' }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App