import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "../../../config/color";

const CharacterListItem = ({onPress, item}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:item.image}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.episode}>{item?.episode.length} Episodes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingBottom:20,
    borderBottomWidth:0.5,
    borderRadius:5,
    borderColor:'#8d8686',
    margin:10,
    paddingVertical:10,
    flexDirection:'row',
    alignItems:'center'
  },
  image:{
    width: '25%',
    height: 100,
    borderRadius:50,
    resizeMode: 'stretch'
  },
  titleContainer:{
    paddingLeft:15
  },
  name:{
    fontSize:18,
    fontWeight:'600',
    color:'white'
  },
  episode:{
    fontSize:16,
    color:color.secondary,
    paddingTop:10}
});

export default CharacterListItem;
