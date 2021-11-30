// import React, {useEffect, useContext, useState} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
//   Alert,
// } from 'react-native';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FormButton from '../components/form-button';

// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
// import ImagePicker from 'react-native-image-crop-picker';

// import {AuthContext} from '../navigation/AuthProvider';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import styles from './styles/edit-profile-screen-style';

// const EditProfileScreen = () => {
//   const {user, logout} = useContext(AuthContext);
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [transferred, setTransferred] = useState(0);
//   const [userData, setUserData] = useState(null);

//   const getUser = async() => {
//     const currentUser = await firestore()
//     .collection('users')
//     .doc(user.uid)
//     .get()
//     .then((documentSnapshot) => {
//       if( documentSnapshot.exists ) {
//         console.log('User Data', documentSnapshot.data());
//         setUserData(documentSnapshot.data());
//       }
//     })
//   }

//   const handleUpdate = async() => {
//     let imgUrl = await uploadImage();

//     if( imgUrl == null && userData.userImg ) {
//       imgUrl = userData.userImg;
//     }

//     firestore()
//     .collection('users')
//     .doc(user.uid)
//     .update({
//       fname: userData.fname,
//       lname: userData.lname,
//       about: userData.about,
//       phone: userData.phone,
//       country: userData.country,
//       city: userData.city,
//       userImg: imgUrl,
//     })
//     .then(() => {
//       console.log('User Updated!');
//       Alert.alert(
//         'Profile Updated!',
//         'Your profile has been updated successfully.'
//       );
//     })
//   }

//   const uploadImage = async () => {
//     if( image == null ) {
//       return null;
//     }
//     const uploadUri = image;
//     let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

//     // Add timestamp to File Name
//     const extension = filename.split('.').pop();
//     const name = filename.split('.').slice(0, -1).join('.');
//     filename = name + Date.now() + '.' + extension;

//     setUploading(true);
//     setTransferred(0);

//     const storageRef = storage().ref(`photos/${filename}`);
//     const task = storageRef.putFile(uploadUri);

//     // Set transferred state
//     task.on('state_changed', (taskSnapshot) => {
//       console.log(
//         `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
//       );

//       setTransferred(
//         Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
//           100,
//       );
//     });

//     try {
//       await task;

//       const url = await storageRef.getDownloadURL();

//       setUploading(false);
//       setImage(null);

//       // Alert.alert(
//       //   'Image uploaded!',
//       //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
//       // );
//       return url;

//     } catch (e) {
//       console.log(e);
//       return null;
//     }

//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const takePhotoFromCamera = () => {
//     ImagePicker.openCamera({
//       compressImageMaxWidth: 300,
//       compressImageMaxHeight: 300,
//       cropping: true,
//       compressImageQuality: 0.7,
//     }).then((image) => {
//       console.log(image);
//       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//       setImage(imageUri);
//       this.bs.current.snapTo(1);
//     });
//   };

//   const choosePhotoFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 300,
//       cropping: true,
//       compressImageQuality: 0.7,
//     }).then((image) => {
//       console.log(image);
//       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//       setImage(imageUri);
//       this.bs.current.snapTo(1);
//     });
//   };

//   renderInner = () => (
//     <View style={styles.panel}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={styles.panelTitle}>Upload Photo</Text>
//         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={takePhotoFromCamera}>
//         <Text style={styles.panelButtonTitle}>Take Photo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={choosePhotoFromLibrary}>
//         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.panelButton}
//         onPress={() => this.bs.current.snapTo(1)}>
//         <Text style={styles.panelButtonTitle}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   renderHeader = () => (
//     <View style={styles.header}>
//       <View style={styles.panelHeader}>
//         <View style={styles.panelHandle} />
//       </View>
//     </View>
//   );

//   bs = React.createRef();
//   fall = new Animated.Value(1);

//   return (
//     <View style={styles.container}>
//       <BottomSheet
//         ref={this.bs}
//         snapPoints={[330, -5]}
//         renderContent={this.renderInner}
//         renderHeader={this.renderHeader}
//         initialSnap={1}
//         callbackNode={this.fall}
//         enabledGestureInteraction={true}
//       />
//       <Animated.View
//         style={{
//           margin: 20,
//           opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
//             <View
//               style={{
//                 height: 100,
//                 width: 100,
//                 borderRadius: 15,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <ImageBackground
//                 source={{
//                   uri: image
//                     ? image
//                     : userData
//                     ? userData.userImg ||
//                       'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
//                     : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
//                 }}
//                 style={{height: 100, width: 100}}
//                 imageStyle={{borderRadius: 15}}>
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <MaterialCommunityIcons
//                     name="camera"
//                     size={35}
//                     color="#fff"
//                     style={{
//                       opacity: 0.7,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       borderWidth: 1,
//                       borderColor: '#fff',
//                       borderRadius: 10,
//                     }}
//                   />
//                 </View>
//               </ImageBackground>
//             </View>
//           </TouchableOpacity>
//           <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
//             {userData ? userData.fname : ''} {userData ? userData.lname : ''}
//           </Text>
//           {/* <Text>{user.uid}</Text> */}
//         </View>

//         <View style={styles.action}>
//           <FontAwesome name="user-o" color="#333333" size={20} />
//           <TextInput
//             placeholder="First Name"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             value={userData ? userData.fname : ''}
//             onChangeText={(txt) => setUserData({...userData, fname: txt})}
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color="#333333" size={20} />
//           <TextInput
//             placeholder="Last Name"
//             placeholderTextColor="#666666"
//             value={userData ? userData.lname : ''}
//             onChangeText={(txt) => setUserData({...userData, lname: txt})}
//             autoCorrect={false}
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.action}>
//           <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
//           <TextInput
//             multiline
//             numberOfLines={3}
//             placeholder="About Me"
//             placeholderTextColor="#666666"
//             value={userData ? userData.about : ''}
//             onChangeText={(txt) => setUserData({...userData, about: txt})}
//             autoCorrect={true}
//             style={[styles.textInput, {height: 40}]}
//           />
//         </View>
//         <View style={styles.action}>
//           <Feather name="phone" color="#333333" size={20} />
//           <TextInput
//             placeholder="Phone"
//             placeholderTextColor="#666666"
//             keyboardType="number-pad"
//             autoCorrect={false}
//             value={userData ? userData.phone : ''}
//             onChangeText={(txt) => setUserData({...userData, phone: txt})}
//             style={styles.textInput}
//           />
//         </View>

//         <View style={styles.action}>
//           <FontAwesome name="globe" color="#333333" size={20} />
//           <TextInput
//             placeholder="Country"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             value={userData ? userData.country : ''}
//             onChangeText={(txt) => setUserData({...userData, country: txt})}
//             style={styles.textInput}
//           />
//         </View>
//         <View style={styles.action}>
//           <MaterialCommunityIcons
//             name="map-marker-outline"
//             color="#333333"
//             size={20}
//           />
//           <TextInput
//             placeholder="City"
//             placeholderTextColor="#666666"
//             autoCorrect={false}
//             value={userData ? userData.city : ''}
//             onChangeText={(txt) => setUserData({...userData, city: txt})}
//             style={styles.textInput}
//           />
//         </View>
//         <FormButton buttonTitle="Update" onPress={handleUpdate} />
//       </Animated.View>
//     </View>
//   );
// };

// export default EditProfileScreen;

// import React from "react";
// import { Text, View, Button } from "react-native";
// import styles from './styles/edit-profile-screen-style';

// const EditProfileScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text></Text>
//             <Button 
//             title="Click Here"
//             onPress={() => alert("Button Clicked!")}
//             />
//         </View>
//     );
// };

// export default EditProfileScreen;


import React, {useState, useEffect, useRef} from "react";
import { View, TouchableOpacity, ImageBackground, TextInput, ActionSheetIOS, ActivityIndicator, Platform, Alert, Image } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import Firestore from '@react-native-firebase/firestore';
import styles from './styles/edit-profile-screen-style';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from "../components/form-button";
import Auth from '@react-native-firebase/auth';
import { ProfileImage } from "../components/profile-image";

const EditProfileScreen = ({navigation}) => {
    const initialProfileName = Auth().currentUser.displayName;
    const [profileName, setProfileName] = useState(initialProfileName);
    const fileName = useRef(`${Auth().currentUser.uid}-profile.png`);
    const FileReference = storage().ref(fileName.current);
    const [isLoading, setIsLoading] = useState(false);
    const photoURL = Auth().currentUser.photoURL;
    
    useEffect(onSaveProfileName, [profileName]);
    
    return (
        <View style={styles.container}>
    
      
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={onShowActionSheet}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
               <TouchableOpacity onPress={onShowActionSheet}>
                  <ProfileImage url={photoURL} />
                  {isLoading && <ActivityIndicator size="large" />}
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
         
          {/* <Text>{user.uid}</Text> */}
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
           value={profileName}
           onChangeText={setProfileName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
          
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
           
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            color="#333333"
            size={20}
          />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
           
            style={styles.textInput}
          />
        </View>
        <FormButton buttonTitle="Update" onPress={() => navigation.navigate('Profile')}/>
    </View>
  );

  async function onSaveProfileName() {
    await Auth().currentUser.updateProfile({
      displayName: profileName,
      photoURL
    });
  }

  function onShowActionSheet() {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Take Photo'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickImage();
          } else if (buttonIndex === 2) {
            takePicture();
          }
        },
      );
    }
  }

  async function takePicture() {
    const result = await ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    });
    onUploadImage(result);
  }

  async function pickImage() {
    const result = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  async function onUploadImage(result) {
    setIsLoading(true);

    const pathToFile = result.path;
    await FileReference.putFile(pathToFile);

    const url = await storage().ref(fileName.current).getDownloadURL();

    await Auth().currentUser.updateProfile({
      photoURL: url,
    });

    setIsLoading(false);
  }

};




export default EditProfileScreen;

