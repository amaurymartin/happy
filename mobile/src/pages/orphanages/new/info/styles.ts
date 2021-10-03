import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#d3e2e6',

    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    color: '#5c8599',
  },
  label: {
    marginBottom: 8,
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
  },
  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },
  input: {
    height: 56,
    marginBottom: 16,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 20,
    borderWidth: 1.4,

    borderColor: '#d3e2e6',
    backgroundColor: '#fff',

    textAlignVertical: 'top',
  },
  imagesInput: {
    height: 56,
    marginBottom: 32,
    borderRadius: 20,
    borderWidth: 1.4,
    borderStyle: 'dashed',

    borderColor: '#96d2f0',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    marginTop: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    height: 56,
    marginTop: 32,
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
