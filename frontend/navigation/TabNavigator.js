import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import FavouriteStack from "./FavouriteStack";
import PokedexStack from "./PokedexStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Pokedex") {
            iconName = "search";
          } else if (route.name === "Favoritos") {
            iconName = "favorite";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "gray",
      })}
    > 
      <Tab.Screen
        name="Pokedex"
        component={PokedexStack} // Usa o Stack Navigator para Home
        options={{ headerShown: false }} // Esconde o header duplicado
      />
      <Tab.Screen
        name="Favoritos"
        component={FavouriteStack} // Usa o Stack Navigator para Favoritos
        options={{ headerShown: false }} // Esconde o header duplicado
      />
    </Tab.Navigator>
  );
}