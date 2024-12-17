import React, { useEffect, useState } from 'react'
import { Text,View,Image,StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import { inputtextwallpaper } from '../atoms/wallerpaperinputText'
import { useRecoilState } from 'recoil'

const Screen2 = ({route}) => {
    const {clickedimage} = route.params

    const [imageData,setImageData]= useState()
    const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper);



    useEffect(()=>{
        setImageData(JSON.parse(clickedimage)?.cover_photo.urls.regular )
       

    },[])
  //  console.log(imageData)


  const shownextImage = async () => {
    // Fetching the image based on the search value
    const response = await fetch(`https://source.unsplash.com/900x1600/?${searchvalue}`);
    
    // Updating the imageData state with the URL of the fetched image
    setImageData(response.url);
  };
  return (
    <View style={styles.imagecontainer}>
          <Image source={{ uri: imageData}} style={styles.image} />
    
    <TouchableOpacity style={styles.downloadbtn}>
        <Text style={styles.downloadtext}>Download</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.nextbtn} onPress={shownextImage}>
        <Text style={styles.nexttext}>Next</Text>
    </TouchableOpacity>
  </View>
  )
}


const styles = StyleSheet.create({
   
    imagecontainer: {
      width: "100%",
      height: "100%",
      backgroundColor: 'white',
 
    },
    image: {
      width: "100%",
      height: "100%",
    },
    downloadbtn:{
        position:"absolute",
        bottom:10,
        left:60,
        borderRadius:20,
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:10,
        elevation:30

    },
    downloadtext:{
        color:'white',
        fontSize:20,

    },

    nextbtn:{
        position:"absolute",
        bottom:10,
        right:60,
        borderRadius:20,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        elevation:30

    },
    nexttext:{
        color:'black',
        fontSize:20,

    }

  });

export default Screen2