import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import cat from "./img/cat.jpeg"

export const Content = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Mise en page avec Flexbox</Text>
      <Image
        style={styles.cats}
        source={cat}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    body:{
        display:"flex",
        flexDirection:"column",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-around"
    },
    text:{
        fontSize:18,
        marginBottom:10
    },
    cats:{
        width:150,
        height:150
    }
})

export default Content;
