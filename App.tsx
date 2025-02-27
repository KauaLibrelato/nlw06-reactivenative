import React from "react";

import { StatusBar, LogBox} from "react-native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

LogBox.ignoreLogs(['expo-app-loading is deprecated in favor of expo-splash-screen:']);

import AppLoading from "expo-app-loading";
import {AuthProvider } from "./src/hooks/auth";

import { Background } from "./src/components/Background";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
       <Routes />
      </AuthProvider>
    </Background>
  );
}
