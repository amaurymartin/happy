import React, { useState } from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Feather } from '@expo/vector-icons';

import mapMarker from '../../../assets/map/marker.png';

import { Pages } from '../../pages';

import OrphanagesIndexResponse from '../../../@types/responses/orphanages/index';
import Orphanage from '../../../@types/entities/orphanage';

import api from '../../../services/api';

import styles from './styles';

const OrphanagesIndex: React.FC = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>();

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
    api
      .get<OrphanagesIndexResponse>('orphanages')
      .then((response) => setOrphanages(response.data.orphanages))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        // eslint-disable-next-line no-alert
        alert('Error on loading orphanages. Please try again');
      });
  });

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
        {orphanages.map((orphanage) => (
          <Marker
            key={orphanage.key}
            icon={mapMarker}
            coordinate={{
              latitude: orphanage.address.latitude,
              longitude: orphanage.address.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => navigate('OrphanagesShow', { key: orphanage.key })}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orphanages found
        </Text>

        <TouchableOpacity
          style={styles.newOrphanageButton}
          onPress={() => navigate('Map')}
        >
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrphanagesIndex;
