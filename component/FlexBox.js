import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.red}>
        <Text>Tadam</Text>
      </View>
      <View style={styles.yellow}>
        <Text>Tadam</Text>
      </View>
      <View style={styles.green}>
        <Text>Tadam</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column-reverse",
    justifyContent:"center"
  },
  red: {
    // flex: 1,
    height:50,
    width:50,
    backgroundColor: 'red',
  },
  yellow: {
    // flex: 2,
    height:50,
    width:50,
    backgroundColor: 'yellow',
  },
  green: {
    // flex: 3,
    height:50,
    width:50,
    backgroundColor: 'green',
  },
});

export default FlexBox;
