import React, { useEffect, useState } from 'react';

import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarker from '../../../assets/map/marker.png';

import api from '../../../services/api';
import Orphanage from '../../../@types/entities/orphanage';
import OrphanagesShowResponse from '../../../@types/responses/orphanages/show';

import styles from './styles';

type OrphanagesShowParams = {
  orphanage: {
    key: string;
  };
};

const OrphanagesShow: React.FC = () => {
  const route = useRoute<RouteProp<OrphanagesShowParams, 'orphanage'>>();

  const [orphanage, setOrphanage] = useState<Orphanage>({} as Orphanage);

  useEffect(() => {
    api
      .get<OrphanagesShowResponse>(`orphanages/${route.params.key}`)
      .then((response) => setOrphanage(response.data.orphanage))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        // eslint-disable-next-line no-alert
        alert('Error on loading orphanage data. Please try again');
      });
  }, [route.params.key]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images?.map((image, index) => (
            <Image
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={styles.image}
              source={{
                uri: image.url,
              }}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{orphanage.name}</Text>
        <Text style={styles.description}>{orphanage.about}</Text>

        <View style={styles.mapContainer}>
          {orphanage.address && (
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: orphanage.address.latitude,
                longitude: orphanage.address.longitude,
                latitudeDelta: 0.0003,
                longitudeDelta: 0.0003,
              }}
              pitchEnabled={false}
            >
              <Marker
                icon={mapMarker}
                coordinate={{
                  latitude: orphanage.address.latitude,
                  longitude: orphanage.address.longitude,
                }}
              />
            </MapView>
          )}
        </View>

        <TouchableOpacity
          style={styles.routesContainer}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${orphanage.address.latitude},${orphanage.address.longitude}`
            )
          }
        >
          <Text style={styles.routesText}>See routes on Google Maps</Text>
        </TouchableOpacity>

        <View style={styles.separator} />

        <Text style={styles.title}>Instructions to visit</Text>
        <Text style={styles.description}>{orphanage.instructions}</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2ab5d1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>
              Monday to Friday 8:00 AM to 06:00 PM
            </Text>
          </View>

          <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
            <Feather name="info" size={40} color="#39cc83" />
            <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>
              Open on weekends
            </Text>
          </View>
        </View>

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#fff" />
          <Text style={styles.contactButtonText}>Contact</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

export default OrphanagesShow;
