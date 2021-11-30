// import React, {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   Image,
//   ActionSheetIOS,
//   Platform,
//   Alert,
// } from 'react-native';
// import {styles} from './styles/post-item-style';
// import {useNavigation} from '@react-navigation/native';
// import {Input} from 'react-native-elements';
// import {Button} from 'react-native-elements';
// import {v4 as uuidv4} from 'uuid';
// import ImagePicker from 'react-native-image-crop-picker';
// import firebase from 'firebase';
// import Auth from '@react-native-firebase/auth';
// import storage from '@react-native-firebase/storage';

// export function PostItem({item}) {
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');

//   const ref = firebase.firestore().collection('characters');

//   // ADD FUNCTION
//   function addCharacter(newPlace) {
//     ref
//       //.doc() use if for some reason you want that firestore generates the id
//       .doc(newPlace.id)
//       .set(newPlace)
//       .catch(err => {
//         console.error(err);
//       });
//   }

//   //DELETE FUNCTION
//   //   function deleteCharacter(postId) {
//   //     ref
//   //       .doc(postId)
//   //       .get()
//   //       .then(documentSnapshot => {
//   //           if(documentSnapshot.exists ) {
//   //               const {imageUrl} = documentSnapshot.data();

//   //               if (imageUrl !== null) {
//   //                   const storageRef = storage().refFromURL(imageUrl);
//   //                   const imageRef = storage().ref(storageRef.fullPath);

//   //                   imageUrl
//   //                   .delete()
//   //                   .then(() => {
//   //                       console.log(`${imageUrl} has been successfully deleted`);
//   //                       deleteFirestoreData(postId);
//   //                   })
//   //                   .catch((e) => {
//   //                       console.log('Error while deleting the image. ', e)
//   //                   })
//   //               }
//   //           }
//   //       })
//   //   }

//   const deleteCharacter = postId => {
//     ref
//       .doc(postId)
//       .delete()
//       .then(() => {
//         Alert.alert('Post deleted!', 'Your post has been deleted succesfully!');
//       })
//       .catch(e => console.log('Error deleting post.', e));
//     console.log(postId);
//   };

//   // EDIT FUNCTION
//   function editCharacter(updatedCharacter) {
//     setLoading();
//     ref
//       .doc(updatedCharacter.id)
//       .update(updatedCharacter)
//       .catch(err => {
//         console.error(err);
//       });
//   }

//   return (
//     <View style={styles.card}>
//       <Image
//         style={styles.image}
//         source={{uri: item.imageUrl}}
//         style={styles.cardImage}
//       />

//       <View style={styles.cardHeader}>
//         <TouchableOpacity>
//           <Text style={styles.cardTitle}>{item.addName}</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.cardContent}>
//         <Text style={styles.cardTitle}>{item.addSuperPower}</Text>
//       </View>
//       <View>
//         <Button title="Post" onPress={onShowActionSheet} />
//         {Auth().currentUser.uid === item.userId ? (
//           <Button
//             title="Delete"
//             onPress={() => deleteCharacter(item.id)}
//             style={{marginTop: 5}}
//           />
//         ) : null}
//       </View>
//     </View>
//   );

//   function onShowActionSheet() {
//     if (Platform.OS === 'ios') {
//       ActionSheetIOS.showActionSheetWithOptions(
//         {
//           options: ['Cancel', 'Open Library', 'Take Photo'],
//           cancelButtonIndex: 0,
//         },
//         buttonIndex => {
//           if (buttonIndex === 1) {
//             pickImage();
//           } else if (buttonIndex === 2) {
//             takePicture();
//           }
//         },
//       );
//     }
//   }

//   async function takePicture() {
//     const result = await ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     });

//     if (!result.cancelled) {
//       navigation.navigate('AddCaption', {image: result.path});
//     }
//   }

//   async function pickImage() {
//     const result = await ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     });

//     if (!result.cancelled) {
//       navigation.navigate('AddCaption', {image: result.path});
//     }
//   }
// }
