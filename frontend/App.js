import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;