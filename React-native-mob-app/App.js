import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/Components/Navigator/tab";
import { useFonts, Jost_400Regular } from "@expo-google-fonts/jost";

const App = () => {
  // Load the font and check if it's loaded
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
  });
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;

// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import SalesforceOAuth from "./source/SalesforceOauth";
// import OAuthCallback from "./source/OauthCallback";

// const AppNavigator = createStackNavigator(
//   {
//     Home: SalesforceOAuth,
//     Callback: OAuthCallback,
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

// export default createAppContainer(AppNavigator);
