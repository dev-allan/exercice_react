import {View, Text, FlatList, StyleSheet, SectionList} from 'react-native';
import React, {useState} from 'react';

export const FlatNest = () => {
  // lecture de la key en tant que chaine de caractère
  let [items, setItems] = useState([
    {key: '1', nom: 'object1'},
    {key: '2', nom: 'object2'},
    {key: '3', nom: 'object3'},
    {key: '4', nom: 'object4'},
    {key: '5', nom: 'object5'},
    {key: '6', nom: 'object6'},
    {key: '7', nom: 'object7'},
    {key: '8', nom: 'object8'},
    {key: '9', nom: 'object9'},
    {key: '10', nom: 'object10'},
    {key: '11', nom: 'object11'},
    {key: '12', nom: 'object12'},
    {key: '13', nom: 'object13'},
    {key: '14', nom: 'object14'},
  ]);
  let [itemsWithoutKey, setItemsWithoutKey] = useState([
    {nom: 'object1'},
    {nom: 'object2'},
    {nom: 'object3'},
    {nom: 'object4'},
    {nom: 'object5'},
    {nom: 'object6'},
    {nom: 'object7'},
    {nom: 'object8'},
    {nom: 'object9'},
    {nom: 'object10'},
    {nom: 'object11'},
    {nom: 'object12'},
    {nom: 'object13'},
    {nom: 'object14'},
  ]);

  // nested list
  const DATA = [
    {
      titre: 'titre 1',
      data: ['truc 1-1', 'truc 1-2', 'truc 1-3'],
    },
    {
      titre: 'titre 2',
      data: ['truc 2-1', 'truc 2-2', 'truc 2-3'],
    },
    {
      titre: 'titre 3',
      data: ['truc 3-1', 'truc 3-2', 'truc 3-3'],
    },
    {
      titre: 'titre 4',
      data: ['truc 4-1', 'truc 4-2', 'truc 4-3'],
    },
    {
      titre: 'titre 5',
      data: ['truc 5-1', 'truc 5-2', 'truc 5-3'],
    },
  ];
  return (
    <View style={styles.body}>
      <Text>ceci est mon composant FlatNest</Text>
      {/* ========================================= */}
      {/* cas des flatlist avec une key en paramètre forunis dans mes datas */}
      <FlatList
        // identification des éléments de ma liste
        data={items}
        // quoi faire avec ces éléments
        renderItem={({item}) => (
          // fait du rendu de chaque element
          // pas besoin de key car déjà définis dans mon tableau
          <View style={styles.item}>
            <Text style={styles.text}>{item.nom}</Text>
          </View>
        )}
      />
      {/* ========================================== */}
      {/* cas où je n'ai pas de key dans mes datas */}
      <FlatList
        // option sur les flatlist
        numColumns={2}
        horizontal={false}
        inverted
        // identification des éléments de ma liste
        data={itemsWithoutKey}
        // identifier une clé : keyExtractor
        keyExtractor={(item, index) => index.toString()}
        // quoi faire avec ces éléments
        renderItem={({item}) => (
          // fait du rendu de chaque element
          // pas besoin de key car déjà définis dans mon tableau
          <View style={styles.item}>
            <Text style={styles.text}>{item.nom}</Text>
          </View>
        )}
      />
      {/* ============================================= */}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({items}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{items}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.titre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '20%',
    backgroundColor: 'green',
  },
  item: {
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 15,
  },
});

export default FlatNest;
