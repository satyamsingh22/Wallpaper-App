import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallerpaperinputText';
import Navbar from './Navbar';

const Screen1 = ({navigation}) => {
  const access_key = "Ne4ALwMGFmSxFT2zzWpMHMrRqqtarnG4O0LmPGkbi6M";
  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper);
  const [inmageCollection, setImageCollection] = useState([]);

  useEffect(() => {
    const getImageCollection = async () => {
      try {
        let data = await fetch(
          `https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchvalue}&client_id=${access_key}`
        );
        let jsonData = await data.json();
        setImageCollection(jsonData.results || []); // Default to empty array if results are undefined
      } catch (error) {
        console.error("Error fetching image collection:", error);
      }
    };
    getImageCollection();
  }, [searchvalue]);

  inmageCollection.total==0 && setSearchValue('all')


  const ShowWallpaper=(item)=>{
  navigation.navigate('S2',{clickedimage:`${JSON.stringify(item)}`})

  }

  return (
    <View style={styles.container}>
     {/*<Text>Showing result for {searchvalue}</Text>*/}
     <Navbar/>
      <FlatList
        numColumns={2}
        data={inmageCollection}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>ShowWallpaper(item)}>
          <View style={styles.imagecontainer}>
            <Image source={{ uri: item.cover_photo.urls.regular }} style={styles.image} />
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: "100%",
    height: "100%",
    backgroundColor:"black"
  
  },
  imagecontainer: {
    width: 185,
    height: 400,
    backgroundColor: 'white',
margin:2
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Screen1;
