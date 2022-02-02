import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

export const Navbar = () => {
  return (
    <View style={styles.body}>
      <Icon name="rowing" />
      <Icon name="rowing" />
      <Icon name="rowing" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor: 'orange',
    height: 50,
  },
});
export default Navbar;
