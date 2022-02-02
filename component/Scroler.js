import {View, Text, ScrollView, StyleSheet, RefreshControl} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';

const Scroler = () => {
  // gestion d'une liste d'élément avec un useState
  let [refresh, setRefresh] = useState(false);
  let [items, setItems] = useState([
    {key: 1, nom: 'object1'},
    {key: 2, nom: 'object2'},
    {key: 3, nom: 'object3'},
    {key: 4, nom: 'object4'},
    {key: 5, nom: 'object5'},
    {key: 6, nom: 'object6'},
    {key: 7, nom: 'object7'},
    {key: 8, nom: 'object8'},
    {key: 9, nom: 'object9'},
    {key: 10, nom: 'object10'},
    {key: 11, nom: 'object11'},
    {key: 12, nom: 'object12'},
    {key: 13, nom: 'object13'},
    {key: 14, nom: 'object14'},
  ]);

  /**
   * fonction qui sert à rafraichir l'affichage de ma liste
   */
  const handleRefresh = () => {
    setRefresh(true);
    // ajouter / supprimer / modifier ma liste
    setItems([...items, {key: 42, nom: 'object 42'}]);
    setRefresh(false);
  };
  return (
    <ScrollView
      // element pour refresh l'affichage de la liste
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={handleRefresh}
          colors={['red']}
        />
      }>
      {items &&
        items.map(i => {
          return (
            <View>
              <Text style={styles.text}>{i.nom}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
});

export default Scroler;
