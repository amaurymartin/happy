import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer: {
    height: 240,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 24,
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    color: '#4d6f80',
  },
  description: {
    marginTop: 16,
    lineHeight: 24,

    fontFamily: 'Nunito_600SemiBold',
    color: '#5c8599',
  },
  mapContainer: {
    marginTop: 40,
    overflow: 'hidden',

    borderRadius: 20,
    borderWidth: 1.2,

    borderColor: '#b3dae2',
    backgroundColor: '#e6f7fb',
  },
  map: {
    width: '100%',
    height: 150,
  },
  routesContainer: {
    padding: 16,

    justifyContent: 'center',
    alignItems: 'center',
  },
  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
  },
  separator: {
    width: '100%',
    height: 0.8,

    marginVertical: 40,

    backgroundColor: '#d3e2e6',
  },
  scheduleContainer: {
    marginTop: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scheduleItem: {
    width: '48%',
    padding: 20,
  },
  scheduleItemBlue: {
    borderRadius: 20,
    borderWidth: 1,

    borderColor: '#b3dae2',
    backgroundColor: '#e6f7fb',
  },

  scheduleItemGreen: {
    borderRadius: 20,
    borderWidth: 1,

    borderColor: '#a1e9c5',
    backgroundColor: '#edfff6',
  },
  scheduleText: {
    marginTop: 20,
    lineHeight: 24,

    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },
  scheduleTextBlue: {
    color: '#5c8599',
  },
  scheduleTextGreen: {
    color: '#37c77f',
  },
  contactButton: {
    height: 56,
    marginTop: 40,
    borderRadius: 20,

    backgroundColor: '#3cdc8c',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButtonText: {
    marginLeft: 16,

    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
