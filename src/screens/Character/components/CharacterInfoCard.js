import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "../../../config/color";

const CharacterInfoCard = ({ title, description, iconName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Icon name={iconName} color={color.primary} size={25} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    margin:15,
    borderColor:color.secondary
  },
  infoCard:{
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  title:{
    color:color.white,
    fontSize:16,
    fontWeight:'500',
    marginLeft:10
  },
  description:{
    textAlign:'right',
    color:color.primary,
    fontSize:16,
    fontWeight:'600'
  }
})

export default CharacterInfoCard;
