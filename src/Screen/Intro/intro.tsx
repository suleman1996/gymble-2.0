import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Introo from '../../Components/Intro/intro';
import Tabs from '../../BottomTab/Tab/tab';
import styles from './style';

const Intro: React.FC<any> = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const renderNextButton = () => {
    return (
      <>
        <View style={styles.renderNextButton}>
          <Text style={styles.rendertext}>Continue</Text>
        </View>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.replace('login')} style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const onSkip = () => {
    setShow(true);
  };

  const renderDoneButton = () => {
    return (
      <View>
        <TouchableOpacity
          style={styles.renderNextButton}
          onPress={() => navigation.replace('login')}>
          <Text style={styles.rendertext}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('login')}
            style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.safeareaview}>
      {show ? (
        <Tabs />
      ) : (
        <Introo
          data={slides}
          renderNextButton={renderNextButton}
          onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          showNextButton={true}
          goToSlide
        />
      )}
    </View>
  );
};
const slides = [
  {
    key: 's1',
    title: 'Gymble keeps you',
    title1: 'connected',
    text: 'Find local workouts,  experiences,\n and facility rentals ',
    image: require('../../Assets/Intro/Logo.png'),
    ImageBackground: require('../../Assets/Intro/background.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's2',
    title: 'You’ve got options',
    title1: 'Find what you love',
    text: 'Search, find, and pay for your next\n experience',
    image: require('../../Assets/Intro/Logo.png'),
    ImageBackground: require('../../Assets/Intro/background2.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's3',
    title: 'Welcome to',
    title1: 'The Gymble Team',
    text: 'Connect with over 10,000  people\n globally today',
    image: require('../../Assets/Intro/Logo.png'),
    ImageBackground: require('../../Assets/Intro/background3.png'),
    TouchableOpacity: TouchableOpacity,
  },
];
export default Intro;
