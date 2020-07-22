import React from 'react';
//import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native'
import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />      
    </>
  );
}
