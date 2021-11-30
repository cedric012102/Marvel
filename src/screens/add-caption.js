// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import {styles} from './styles/add-caption-style';
// import {Button} from 'react-native-elements';
// import storage from '@react-native-firebase/storage';
// import Auth from '@react-native-firebase/auth';
// import {v4 as uuidv4} from 'uuid';
// import Firestore from '@react-native-firebase/firestore';
// import {StackActions} from '@react-navigation/routers';

// const AddCaptionPage = ({navigation, route}) => {
//   const popAction = StackActions.pop(1);
//   const imageUrl = route.params.image;
//   const fileName = useRef(`${Auth().currentUser.uid}-${uuidv4()}.png`);
//   const FileReference = storage().ref(fileName.current);
//   const [addName, setAddName] = useState('');
//   const [addSuperPower, setAddSuperPower] = useState('');

//   return (
//     <View style={styles.backgroundUpload}>
//       <View style={styles.uploadContainer}>
//         <View style={styles.dividerLine} />
//         <Text style={styles.uploadMainText}>
//           Post your media if you are satisfied.
//         </Text>
//         <View style={styles.buttonAreaContainer}>
//           <Button title="Save" onPress={() => onUploadImage(imageUrl)} />
//         </View>
//         <SafeAreaView>
//           <Image source={{uri: imageUrl}} style={styles.uploadImage} />
//           <TextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             placeholder="Add Name"
//             value={addName}
//             onChangeText={setAddName}
//             style={styles.inputStyle}
//           />
//           <TextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             placeholder="Add Super Power"
//             value={addSuperPower}
//             onChangeText={setAddSuperPower}
//             style={styles.inputStyle}
//           />
//         </SafeAreaView>
//       </View>
//     </View>
//   );

//   async function onUploadImage(path) {
//     try {
//       await FileReference.putFile(path);
//       const url = await storage().ref(fileName.current).getDownloadURL();

//       await Firestore().collection('characters').add({
//         id: uuidv4(),
//         imageUrl: url,
//         addName,
//         addSuperPower,
//         userId: Auth().currentUser.uid,
//         createdAt: Firestore.FieldValue.serverTimestamp(),
//       });
//       navigation.dispatch(popAction);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// };
// export default AddCaptionPage;
