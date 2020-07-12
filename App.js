import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React from 'react';

import { Roboto_300Light } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
      <StatusBar style={"light"} backgroundColor='#FF0000' translucent />
      <Routes />
      </>
    );
  }
}
