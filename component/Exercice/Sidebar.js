import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

export const Sidebar = () => {
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
    display:"flex",
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:"column",
    backgroundColor: 'orange',
    height: 500,
    width:50,
  },
});

export default Sidebar;
