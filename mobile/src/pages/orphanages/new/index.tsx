import React from 'react';

import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

type OrphanagesNewParams = {
  position: {
    latitude: number;
    longitude: number;
  };
};

const OrphanageNew: React.FC = () => {
  const route = useRoute<RouteProp<OrphanagesNewParams, 'position'>>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text style={styles.title}>Info</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>About</Text>
      <TextInput style={[styles.input, { height: 110 }]} multiline />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Images</Text>
      <TouchableOpacity style={styles.imagesInput} onPress={() => {}}>
        <Feather name="plus" size={24} color="#15b6d6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visiting</Text>

      <Text style={styles.label}>Instructions</Text>
      <TextInput style={[styles.input, { height: 110 }]} multiline />

      <Text style={styles.label}>Schedule</Text>
      <TextInput style={styles.input} />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Open on weekends</Text>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextButtonText}>Create</Text>
      </RectButton>
    </ScrollView>
  );
};

export default OrphanageNew;
