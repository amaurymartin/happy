import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

import OrphanagesIndex from './src/pages/orphanages/index';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <OrphanagesIndex />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
