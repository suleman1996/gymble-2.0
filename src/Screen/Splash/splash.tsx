import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import SplashIcon from '../../Svgs/Splash/Icons';
import styles from './style';

const Splash: React.FC<any> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('intro');
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
