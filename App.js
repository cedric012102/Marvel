// // import React, {useState, useEffect} from 'react';
// // import {FlatList, SafeAreaView, Text, TextInput, View, StyleSheet} from 'react-native';
// // import Searchbox from './src/components/searchbox';
// // import Feather from 'react-native-vector-icons/Feather';

// // const App = () => {

// //   const [filterdData, setFilterdData] = useState([]);
// //   const [masterData, setMasterData] = useState([]);
// //   const [search, setSearch] = useState('');

// //   useEffect(() => {
// //     fetchPosts();
// //     return () => {

// //     }
// //   }, [])

// //   const fetchPosts = () => {
// //   const apiURL = 'https://dragon-ball-api.herokuapp.com/api/character/';
// //   fetch(apiURL)
// //   .then((response) => response.json())
// //   .then((responseJson) => {
// //     setFilterdData(responseJson);
// //     setMasterData(responseJson);
// //   }).catch((error) => {
// //     console.error(error);
// //   })
// // }

// // const searchFilter = (text) => {
// //   if (text) {
// //     const newData = masterData.filter((item) => {
// //       const itemData = item.name ? item.name.toUpperCase()
// //             : ''.toUpperCase();
// //       const textData = text.toUpperCase();
// //       return itemData.indexOf(textData) > -1;
// //     });
// //     setFilterdData(newData);
// //     setSearch(text);
// //   } else {
// //     setFilterdData(masterData);
// //     setSearch(text);
// //   }
// // }

// // const ItemView = ({item}) => {
// //   return (
// //     <Text style={styles.itemStyle}>
// //       {item.first}{'. '}{item.last}
// //     </Text>
// //   )
// // }

// // const ItemSeparatorView = () => {
// //   return (
// //     <View
// //     style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
// //     />
// //   )
// // }

// //   return (
// //     <SafeAreaView style={{ flex: 1 }}>
// //       <View style={styles.container}>
// //      <View style={styles.backgroundStyle}>
// //         <Feather name="search" style={styles.iconStyle} />
// //         <TextInput
// //         autoCapitalize="none"
// //         autoCorrect={false}
// //         style={styles.inputStyle}
// //         value={search}
// //         placeholder="Search"
// //         underlineColorAndroid='transparent'
// //         onChangeText={(text) => searchFilter(text)}
// //         />
// //         </View>
// //       <FlatList
// //        data={filterdData}
// //        keyExtractor={(item, index) => index.toString()}
// //        ItemSeparatorComponent={ItemSeparatorView}
// //        renderItem={ItemView}
// //       />
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     backgroundColor: 'white',
// //   },
// //   itemStyle: {
// //     padding: 15,
// //   },
// //   backgroundStyle: {
// //     marginTop: 10,
// //     backgroundColor: '#F0EEEE',
// //     height: 50,
// //     borderRadius: 5,
// //     marginHorizontal: 15,
// //     flexDirection: 'row',
// //     marginBottom: 10,
// // },
// // inputStyle: {
// //     flex: 1,
// //     fontSize: 18,
// //   },
// //   iconStyle: {
// //       fontSize: 35,
// //       alignSelf: 'center',
// //       marginHorizontal: 15
// //   },
// // });

// // export default App;

// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
//   Image
// } from 'react-native';

// const animeURL = 'https://pokeapi.co/api/v2/';

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [species, setSpecies] = useState([]);
//   const [gender, setGender] = useState([]);

//   useEffect(() => {
//     fetch(animeURL)
//       .then(response => response.json())
//       .then(json => {
//         setData(json.pokemon);
//         // setSpecies(json.species);
//         // setGender(json.gender);
//       })

//       .catch(error => console.error(error))
//       .then(() => setLoading(false));
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           <Text style={styles.species}>{species}</Text>
//           <View style={{borderBottomWidth: 1, marginBottom: 12}} />
//           <FlatList
//             data={data}
//             keyExtractor={({id}, index) => id}
//             renderItem={({item}) => (
//               <View style={{paddingBottom: 10}}>
//                 <Text style={styles.characterText}>
//                   {item.name},{item.id},
//                 </Text>
//               </View>
//             )}
//           />
//           <Text style={styles.gender}>{data}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   characterText: {
//     fontSize: 26,
//     fontWeight: '200',
//   },
//   species: {
//     fontSize: 32,
//     fontWeight: 'bold',
//   },
//   gender: {
//     textAlign: 'center',
//     marginBottom: 18,
//     fontWeight: '200',
//     color: 'green',
//   },
// });

// export default App;

import React from 'react';
import Providers from './src/navigation/index';

const App = () => {
  return <Providers />;
};

export default App;
