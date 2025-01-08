import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokeScreen from "../screens/PokeScreen";

const Stack = createNativeStackNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{ title: "Pokedex"}}
      />
      <Stack.Screen
        name="PokeScreen"
        component={PokeScreen}
        options={{ title: "Pokemon Details" }}
      />
    </Stack.Navigator>
  );
};

export default PokedexStack;