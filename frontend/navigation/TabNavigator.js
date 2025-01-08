import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import FavouriteStack from "./FavouriteStack";
import PokedexStack from "./PokedexStack";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: route.name === "Login" ? undefined : ({ color, size }) => {
          let iconName;
          if (route.name === "Pokedex") {
            iconName = "search";
          } else if (route.name === "Favoritos") {
            iconName = "favorite";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { display: route.name === 'Login' ? 'none' : 'flex', },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "gray",
      })}
    > 
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, tabBarButton: () => null }}
      />
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