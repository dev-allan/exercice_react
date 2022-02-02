import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import React, {useState} from 'react';

const STYLES = ['default', 'dark-content', 'light'];

export const Statusbar = () => {
  const [hidden, setHidden] = useState(true);
  const [statusStyle, setStatusStyle] = useState(STYLES[0]);
  const [animated, setAnimated] = useState(true);
  /**
   * fonction qui permet de modifier le style de la status bar
   */
  const handleStyle = () => {
    const styleId = STYLES.indexOf(statusStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusStyle(STYLES[0]);
    } else {
      setStatusStyle[STYLES[styleId]];
    }
  };

  /**
   * fanction qui permet de modifier la visibilité de la statusbar
   */
  const handleVisibility = () => {
    setHidden(!hidden);
  };

  const handleAnimated = () => {
    setAnimated(!animated);
  };
  /* utilisation du point d'exclamation ' ! '
        signifie la negation ou l'inverse de "=="
        egale à ; "!=" différent de
        "true" => vrai; "!true" => false
        "false" => faux; "!false" => vrai
    */
  return (
    // Balise qui sert à délimiter la taille de votre écran
    <SafeAreaView>
      {/* balise qui permet de gérer la statusbar */}
      <StatusBar
        translucent={true}
        hidden={hidden}
        barStyle={statusStyle}
        animated={animated}
        backgroundColor={'green'}
      />
      <View>
        <Text>Ceci est mon composant status bar</Text>
      </View>
      <View>
        <Text>le status bar est : {hidden ? 'caché' : 'visible'}</Text>
        <Text>le style est : {statusStyle}</Text>
        <Text>l'animation est : {animated ? 'animé' : 'pas animé'}</Text>
      </View>
      <View>
        <Button title="visibilté" onPress={handleVisibility} />
        <Button title="style" onPress={handleStyle} />
        <Button title="animation" onPress={handleAnimated} />
      </View>
    </SafeAreaView>
  );
};

export default StatusBar;
