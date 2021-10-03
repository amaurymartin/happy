import React from 'react';

import { Image, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarker from '../../../assets/map/marker.png';

import styles from './styles';

const OrphanagesShow: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg',
            }}
          />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Orphanage name</Text>
        <Text style={styles.description}>About Orphanage</Text>

        <View style={styles.mapContainer}>
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
          >
            <Marker
              icon={mapMarker}
              coordinate={{
                latitude: -3.7436121,
                longitude: -38.5194538,
              }}
            />
          </MapView>
        </View>

        <View style={styles.routesContainer}>
          <Text style={styles.routesText}>See routes on Google Maps</Text>
        </View>

        <View style={styles.separator} />

        <Text style={styles.title}>Instructions to visit</Text>
        <Text style={styles.description}>Orphanage instructions</Text>

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
