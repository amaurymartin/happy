import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrphanagesIndex from './pages/orphanages/index';
import OrphanagesShow from './pages/orphanages/show';
import OrphanagesNew from './pages/orphanages/new';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesIndex" component={OrphanagesIndex} />
        <Screen name="OrphanagesShow" component={OrphanagesShow} />
        <Screen name="OrphanagesNew" component={OrphanagesNew} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
