/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

var firebaseConfig = {
  apiKey: 'AIzaSyAuxmXVgZ5JvUMtU1wgFZNH6Q4G8oJ_dvA',
  authDomain: 'social-media-dev-219c5.firebaseapp.com',
  projectId: 'social-media-dev-219c5',
  storageBucket: 'social-media-dev-219c5.appspot.com',
  messagingSenderId: '830639942344',
  appId: '1:830639942344:web:d0aaf7f1ae530f2d62d3fd',
  measurementId: 'G-446FS3JQJ4',
};

firebase.initializeApp(firebaseConfig);

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
  webClientId:
    '830639942344-ono58thtufqdm2gumrepd2mv72963u56.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
