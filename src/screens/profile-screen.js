import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FormButton from '../components/form-button';
import {AuthContext} from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/post-card';
import styles from './styles/profile-screen-style';
import Auth from '@react-native-firebase/auth';

const ProfileScreen = ({navigation, route}) => {
  const {user, logout} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);
  const photoURL = Auth().currentUser.photoURL;
  const userDisplayName = Auth().currentUser.displayName;

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .where('userId', '==', route.params ? route.params.userId : user.uid)
        .orderBy('postTime', 'desc')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const {
              userId,
              post,
              postImg,
              postTime,
              likes,
              comments,
            } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
              postTime: postTime,
              post,
              postImg,
              liked: false,
              likes,
              comments,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async() => {
    await firestore()
    .collection('users')
    .doc( route.params ? route.params.userId : user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
    fetchPosts();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.userImg}
          source={{ uri: photoURL}}
        />
        <Text style={styles.userName}>{userDisplayName}</Text>
        {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
        <Text style={styles.aboutUser}>
        {userData ? userData.about || 'No details added.' : ''}
        </Text>
        <View style={styles.userBtnWrapper}>
          {route.params ? (
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <Text style={styles.userBtnTxt}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{posts.length}</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>

        {posts.map((item) => (
          <PostCard key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

// import React, { useContext, useEffect, useState } from 'react';
// import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
// import FormButton from '../components/form-button';
// import PostCard from '../components/post-card';
// import {AuthContext} from '../navigation/AuthProvider';
// import styles from './styles/profile-screen-style';
// import firestore from '@react-native-firebase/firestore';

// const ProfileScreen = ({navigation, route}) => {
//   const {user, logout} = useContext(AuthContext);

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleted, setDeleted] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const fetchPosts = async() => {
//     try {
//       const list = [];

//       await firestore()
//       .collection('posts')
//       .where('userId', '==', user.uid)
//       .orderBy('postTime', 'desc')
//       .get()
//       .then((querySnapshot) => {
//         // console.log('Total Posts: ', querySnapshot.size);

//         querySnapshot.forEach((doc) => {
//             const {
//               userId,
//               post,
//               postImg,
//               postTime,
//               likes,
//               comments,
//             } = doc.data();
//             list.push({
//               id: doc.id,
//               userId,
//               userName: 'Test Name',
//               userImg:
//                 'https://i.annihil.us/u/prod/marvel/i/mg/f/20/5be370edc8ae1/clean.jpg',
//               postTime: postTime,
//               post,
//               postImg,
//               liked: false,
//               likes,
//               comments,
//             });
//           });
//         });

//       setPosts(list);

//       if(loading) {
//         setLoading(false);
//       }

//       console.log('Posts: ', list);

//     } catch(e) {
//       console.log(e);
//     }
//   };

//   const getUser = async() => {
//         await firestore()
//         .collection('users')
//         .doc( route.params ? route.params.userId : user.uid)
//         .get()
//         .then((documentSnapshot) => {
//           if( documentSnapshot.exists ) {
//             console.log('User Data', documentSnapshot.data());
//             setUserData(documentSnapshot.data());
//           }
//         })
//       }

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     fetchPosts();
//     setDeleted(false);
//   }, [deleted]);

//   const handleDelete = () => {

//   };
    

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
//       <ScrollView
//       style={styles.container}
//       contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
//       showsVerticalScrollIndicator={false}
//       >
//         <Image 
//         style={styles.userImg} 
//         source={{uri: userData ? userData.userImg : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
//         />
//       <Text style={styles.userName}>{userData ? userData.fname : 'Test'} {userData ? userData.lname : 'User'}</Text>
//       {/* <Text>{route.params ? route.params.userId : user.uid}</Text> */}
//       <Text style={styles.aboutUser}>
//       {userData ? userData.about || 'No details added.' : ''}
//       </Text>
//       <View style={styles.userBtnWrapper}>
//         {route.params ? (
//           <>
//           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//           <Text style={styles.userBtnTxt}>Message</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
//           <Text style={styles.userBtnTxt}>Follow</Text>
//         </TouchableOpacity>
//         </>
//         ) : (
//           <>
//           <TouchableOpacity style={styles.userBtn} onPress={() => {navigation.navigate('EditProfile')}}>
//           <Text style={styles.userBtnTxt}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
//           <Text style={styles.userBtnTxt}>Logout</Text>
//         </TouchableOpacity>
//         </>
//         )}
        
//       </View>

//       <View style={styles.userInfoWrapper}>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>22</Text>
//             <Text style={styles.userInfoSubTitle}>Posts</Text>
//           </View>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>10,000</Text>
//             <Text style={styles.userInfoSubTitle}>Followers</Text>
//           </View>
//           <View style={styles.userInfoItem}>
//             <Text style={styles.userInfoTitle}>100</Text>
//             <Text style={styles.userInfoSubTitle}>Following</Text>
//           </View>
//         </View>

//         {posts.map((item) => (
//           <PostCard key={item.id} item={item} onDelete={handleDelete} />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileScreen;
