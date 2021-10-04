import React, { useState } from 'react';

import {
  Image,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';

import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';
import Orphanage from '../../../@types/entities/orphanage';

import { Pages } from '../../pages';

import styles from './styles';

type OrphanagesNewParams = {
  position: {
    latitude: number;
    longitude: number;
  };
};

const OrphanageNew: React.FC = () => {
  const route = useRoute<RouteProp<OrphanagesNewParams, 'position'>>();
  const { navigate } = useNavigation<NativeStackNavigationProp<Pages>>();

  const [formData, setFormData] = useState({
    name: '',
    nickname: null,
    about: '',
    instructions: '',
    street: null,
    number: null,
    complement: null,
    zipCode: null,
    city: null,
    state: null,
    country: null,
  });
  const [images, setImages] = useState<string[]>([]);

  async function addImage() {
    const { status } = await requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      // eslint-disable-next-line no-alert
      alert('Media library access needed');

      return;
    }

    const result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: MediaTypeOptions.Images,
    });

    if (result.cancelled) return;

    const { uri: image } = result;
    setImages([...images, image]);
  }

  async function createOrphanage() {
    const payload = {
      orphanage: {
        name: formData.name,
        nickname: formData.nickname,
        about: formData.about,
        instructions: formData.instructions,
        address: {
          latitude: route.params.latitude,
          longitude: route.params.longitude,
          street: formData.street,
          number: formData.number,
          complement: formData.complement,
          zipCode: formData.zipCode,
          city: formData.city,
          state: formData.state,
          country: formData.country,
        },
        // schedules,
      },
    };

    let orphanage;
    await api
      .post('orphanages', payload)
      .then((response) => {
        orphanage = response.data.orphanage;
        // eslint-disable-next-line no-alert
        alert('Orphanage created');
      })
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on creating orphanage. Check your data and try again');
      });

    if (!orphanage) return;
    orphanage = orphanage as Orphanage;

    if (images.length === 0) {
      navigate('OrphanagesIndex');
      return;
    }

    const imagesPayload = new FormData();
    images.forEach((image) => imagesPayload.append('images', image));

    await api
      .post(`orphanages/${orphanage.key}/images`, imagesPayload)
      // eslint-disable-next-line no-alert
      .then(() => alert('Orphanage images uploaded'))
      .catch((response) => {
        // eslint-disable-next-line no-console
        console.log('response', response);
        // eslint-disable-next-line no-alert
        alert('Error on uploading orphanage images. Please try again');
      });

    navigate('OrphanagesIndex');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Info</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />

      <Text style={styles.label}>About</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={formData.about}
        onChangeText={(text) => setFormData({ ...formData, about: text })}
      />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Images</Text>
      <View style={styles.uploadedImagesContainer}>
        {images.map((image) => (
          <Image key={image} style={styles.image} source={{ uri: image }} />
        ))}
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={() => addImage()}>
        <Feather name="plus" size={24} color="#15b6d6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visiting</Text>

      <Text style={styles.label}>Instructions</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={formData.instructions}
        onChangeText={(text) =>
          setFormData({ ...formData, instructions: text })
        }
      />

      <Text style={styles.label}>Schedule</Text>
      <TextInput style={styles.input} />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Open on weekends</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={() => createOrphanage()}>
        <Text style={styles.nextButtonText}>Create</Text>
      </RectButton>
    </ScrollView>
  );
};

export default OrphanageNew;
