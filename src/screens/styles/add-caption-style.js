import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundUpload: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
    paddingHorizontal: 11,
  },
  uploadButtonText: {
    fontSize: 18,
    letterSpacing: 0.0,
    alignSelf: 'flex-end',
    color: 'rgb(55, 125, 255)',
    bottom: 73,
  },
  uploadContainer: {
    alignItems: 'center',
  },
  dividerLine: {
    backgroundColor: 'black',
    height: 1,
    width: 400,
    top: 27,
  },
  uploadMainText: {
    fontSize: 16,
    letterSpacing: 0.0,
    textAlign: 'center',
    marginTop: 50,
    paddingHorizontal: 46,
    paddingVertical: 10,
  },
  uploadImage: {
    height: 259,
    width: 300,
    marginVertical: 100,
  },
  inputStyle: {
    marginBottom: 20,
    marginVertical: 5,
    fontSize: 19,
    alignSelf: 'center',
  },
});
