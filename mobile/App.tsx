import React from 'react';

import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Routes />;
}
