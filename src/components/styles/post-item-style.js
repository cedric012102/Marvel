import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'rgb(245, 221, 221)',
    marginBottom: 25,
  },
  cardImage: {
    width: '100%',
    height: 500,
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: 'black',
    fontFamily: 'Copperplate',
    fontSize: 25,
  },
  cardAvatar: {
    marginRight: 16,
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: 'white',
  },
  homeContainer: {
    alignContent: 'center',
    flex: 1,
    paddingVertical: 21,
  },
  imageContainer: {
    borderRadius: 5,
    backgroundColor: 'rgb(245, 221, 221)',
    paddingVertical: 18,
    paddingBottom: 196,
    marginHorizontal: 12,
    marginVertical: 19,
  },
  profileIcon: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: 'white',
    marginHorizontal: 19,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    width: '32%',
    marginHorizontal: 4,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImgStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 23,
    marginTop: 20,
  },
});
