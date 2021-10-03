import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  nextButton: {
    height: 56,
    position: 'absolute',
    bottom: 40,
    left: 24,
    right: 24,
    borderRadius: 20,

    backgroundColor: '#15c3d6',

    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
