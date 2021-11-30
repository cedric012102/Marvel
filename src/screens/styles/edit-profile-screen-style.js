import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    width: '100%',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#333333',
  },
  backgroundProfile: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 221, 221)',
    paddingHorizontal: 11,
  },
  followerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 12,
  },
  followersText: {
    color: 'rgb(71, 71, 71)',
    letterSpacing: 0.0,
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileText: {
    color: 'rgb(36, 52, 67)',
    letterSpacing: 0.0,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileIcon: {
    borderRadius: 475,
    backgroundColor: 'white',
    marginVertical: 32,
  },
  containerGallery: {
    flex: 1,
  },
  containerImage: {
    width: '32%',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
  },
});

export default styles;
