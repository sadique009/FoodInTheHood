import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
// import * as firebase from "firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AuthenticationContext } from "./src/services/authentication/authentication.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>maps</Text>
  </SafeArea>
);

const tabBarIcon =
  (iconName) =>
  ({ size, color }) =>
    (
      // You can return any component that you like here!
      <Ionicons name={iconName} size={size} color={color} />
    );

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
};


export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
     
  //       signInWithEmailAndPassword()
  //       .then((user) => {
  //         console.log(user);
  //         setIsAuthenticated(true);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          {/* <Navigation /> */}
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
