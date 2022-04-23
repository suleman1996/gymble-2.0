import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import styles from './App.style';
import Stack from './src/Stack/stack';

const App: React.FC<any> = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack>
        <View style={styles.container}>
          <Text>Welcome to the React Native Example for TypeORM!</Text>
        </View>
      </Stack>
    </NavigationContainer>
  );
};
export default App;
