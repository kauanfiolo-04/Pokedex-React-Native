import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./navigation/TabNavigator";
import { UserProvider } from "./context/UserContext";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = new createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <SafeAreaProvider style={{flex: 1}}>
          <Stack.Navigator initialRouteName="Login">
            {/* Tela de login */}
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />

            {/* Tela de cadastro */}
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />

            {/* TabNavigator com as outras telas */}
            <Stack.Screen 
              name="Main"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;