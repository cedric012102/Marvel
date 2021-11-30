import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/form-input';
import FormButton from '../components/form-button';
import SocialButton from '../components/social-button';
import styles from './styles/login-screen-style';
import {AuthContext} from '../navigation/AuthProvider';
import Video from 'react-native-video';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const {login, googleLogin, fbLogin, reset} = useContext(AuthContext);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View style={styles.container}>
      <Video
          // source={{uri: getVideoUri}}
          source={require('../assets/images/fire.mp4')}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
        <Image
          source={require('../assets/images/Marvel_Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Comics</Text>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign In"
          onPress={() => login(email, password)}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => reset()}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <SocialButton
          buttonTitle="Sign In With Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => fbLogin()}
        />

        <SocialButton
          buttonTitle="Sign In With Google"
          btnType="google"
          color="#468C98"
          backgroundColor="#CFFFE5"
          onPress={() => googleLogin()}
        />

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>
            Don't Have An Account? Create Here
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default LoginScreen;

// import React, {useContext, useState} from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import styles from './styles/login-screen-style';

// const LoginScreen = ({navigation}) => {

//   return (
//       <View style={styles.container}>
//         <AntDesign name='user' size={25} color="#666" />
//         <Text style={{fontFamily: "Georgia",}}>LoginScreen</Text>
//         <Button
//         title="Click Here"
//         onPress={() => navigation.navigate("Signup")} />
//         </View>

//   );
// };

// export default LoginScreen;
