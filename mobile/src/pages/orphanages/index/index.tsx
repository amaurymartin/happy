import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import mapMarker from '../../../assets/map/marker.png';

import { Pages } from '../../pages';

import styles from './styles';

const OrphanagesIndex: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>();

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
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -3.7436121,
            longitude: -38.5194538,
          }}
        >
          <Callout
            tooltip
            onPress={() => {
              navigate('OrphanagesShow');
            }}
          >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Orphanage Test</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer text</Text>

        <TouchableOpacity style={styles.newOrphanageButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrphanagesIndex;
