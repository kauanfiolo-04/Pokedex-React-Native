import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PokeScreen from "./screens/PokeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PokeApp" component={HomeScreen} />
        <Stack.Screen name="Pokémon" component={PokeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};