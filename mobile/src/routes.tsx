import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrphanagesIndex from './pages/orphanages/index';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesIndex" component={OrphanagesIndex} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
