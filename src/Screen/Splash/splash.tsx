import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';
import { get_data } from "../../utilis/AsyncStorage/Controller";
const Splash: React.FC<any> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      let data = await get_data('@TOKEN')
      if (data) {
        navigation.navigate('tab')
      } else {
        navigation.replace('intro');
      }
    }, 2000);
  }, []);

  return (
    <View style={styles.view}>
      <Image
        source={require('../../../src/Assets/Splash/Logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Gymble Business</Text>
    </View>
  );
};
export default Splash;
