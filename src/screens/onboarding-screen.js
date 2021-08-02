import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;

const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e490',
          image: (
            <Image
              source={require('../assets/images/Thanos.webp')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Connect With The Universe',
          subtitle: 'A New Way To Connect With Other Species',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../assets/images/Deadpool.webp')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Share Your Favorites',
          subtitle:
            'Share your Top Heroes and Villains With Similar Kind Of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../assets/images/groot.webp')}
              style={{
                width: 200,
                height: 200,
                marginVertical: 50,
                borderRadius: 475,
              }}
            />
          ),
          title: 'Show Your Super Powers!',
          subtitle: 'Make The World Bow to You',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
