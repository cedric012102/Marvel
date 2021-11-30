import React from 'react';
import { View, Image } from 'react-native';
import styles from '../screens/styles/profile-screen-style';

export function ProfileImage({ size = 100, url = null }) {
  const photoURL = url;

  return (
    <View>
        <Image source={{uri: photoURL}} style={[styles.profileIcon, { width: size, height: size, borderRadius: size * 2 }]} />
    </View>
  )
}