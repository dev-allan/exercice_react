import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Introduction = props => {
  // utilisateur comme en react des hooks
  let [cours, setCours] = useState({
    nom: '',
    numero: '',
  });

  const handleClick = e => {
    setCours({
      nom: 'tuto React-Native 2022',
      numero: 42,
    });
  };
  return (
    <View style={styles.body}>
      <View>
        <Text>Ceci est le composant Introduction</Text>
      </View>
      <View>
        {/* utilisation des variables d'état inchangé */}
        <Text style={styles.text}>Bienvenue {props.monNom}</Text>
        <Text style={styles.text}>cours : {cours.nom} </Text>
        <Text style={styles.text}>numero : {cours.numero}</Text>
        <View style={styles.button}>
          <Button title="click ici" onPress={handleClick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color : "blue",
    fontSize: 25,
  },
  button:{
    flexDirection:"row",
    alignItem:"center",
    margin:5
  },
  body:{
    backgroundColor:"red",
    borderColor:"yellow",
    borderRadius: 5,
    margin : 5
  }
});

export default Introduction;
