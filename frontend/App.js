import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "screens/LoginScreen";
import TabNavigator from "./navigation/TabNavigator";

const Stack = new createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        {/* Tela de login */}
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* TabNavigator com as outras telas */}
        <Stack.Screen 
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;