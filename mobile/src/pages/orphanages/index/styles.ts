import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    borderRadius: 16,

    backgroundColor: 'rgba(255, 255, 255, 0.8)',

    justifyContent: 'center',
  },
  calloutText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
    color: '#0089a5',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    height: 56,
    paddingLeft: 24,
    borderRadius: 20,

    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },
  newOrphanageButton: {
    width: 56,
    height: 56,

    borderRadius: 20,

    backgroundColor: '#15c3d6',

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
