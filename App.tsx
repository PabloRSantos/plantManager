import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import * as Notification from "expo-notifications"

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import AppLoading from 'expo-app-loading'
import { Routes } from "./src/routes";
import { PlantProps } from "./src/libs/storage";


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notification.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps
        console.log(data)
      }
    )

    return () => subscription.remove()
  }, [])

  

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
