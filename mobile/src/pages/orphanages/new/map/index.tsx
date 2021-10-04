import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import { Pages } from '../../../pages';

import mapMarker from '../../../../assets/map/marker.png';

import styles from './styles';

const Map: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>();

  const [position, setPosition] = useState<[number, number]>([NaN, NaN]);

  function setMapPosition(event: MapEvent) {
    setPosition([
      event.nativeEvent.coordinate.latitude,
      event.nativeEvent.coordinate.longitude,
    ]);
  }

  function hasPosition() {
    return !Number.isNaN(position[0]) && !Number.isNaN(position[1]);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -3.7436121,
          longitude: -38.5194538,
          latitudeDelta: 0.033,
          longitudeDelta: 0.033,
        }}
        pitchEnabled={false}
        onPress={(event) => setMapPosition(event)}
      >
        {hasPosition() && (
          <Marker
            icon={mapMarker}
            coordinate={{ latitude: position[0], longitude: position[1] }}
          />
        )}
      </MapView>

      <RectButton
        style={styles.nextButton}
        onPress={() =>
          navigate('OrphanagesNew', {
            latitude: position[0],
            longitude: position[1],
          })
        }
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </RectButton>
    </View>
  );
};

export default Map;
