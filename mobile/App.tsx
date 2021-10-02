import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import OrphanagesIndex from './src/pages/orphanages/index';

export default function App() {
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
