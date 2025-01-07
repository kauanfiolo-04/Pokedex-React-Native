import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouriteScreen from "../screens/FavouriteScreen";
import PokeScreen from "../screens/PokeScreen";

const Stack = createNativeStackNavigator();

const FavouriteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{ title: "Favourited Pokemons" }}
      />
      <Stack.Screen
        name="PokeScreen"
        component={PokeScreen}
        options={{ title: "Pokemon Details" }}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStack;