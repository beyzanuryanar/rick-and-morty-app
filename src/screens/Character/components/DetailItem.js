import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "../../../config/color";

const DetailItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    borderBottomWidth:0.5,
    borderColor:'#8d8686',
    padding:15,
    margin:10,
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    fontSize:16,
    fontWeight:'600',
    color:color.white,
    flex:1}

});
export default DetailItem;
