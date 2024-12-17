import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import logo from '../assets/search.webp';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallerpaperinputText';

const Navbar = () => {
 //create hook to store the value which we type

 const [searchvalue,setSearchValue]= useRecoilState(inputtextwallpaper)
  const onChangeTextinput = (text) => {
  //  console.log(text);
  setSearchValue(text)

  };

  return (
    <View style={styles.container}>
      <View style={styles.searchant}>
        <Image source={logo} style={styles.icon} />
        <TextInput 
          onChangeText={onChangeTextinput} // Correct function reference
          style={styles.searchInput} 
          placeholder="Search Anything..." 
          placeholderTextColor="#999"
          editable={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    width: "100%",
    backgroundColor: "white",
  //  marginTop: 15
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchant: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
    padding: 10,
    width: "80%"
  },
  searchInput: {
    fontSize: 15,
    paddingLeft: 10,
    flex: 1,
  }
});

export default Navbar;
