import React, { useState } from 'react';
import { Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Introo from '../../Components/Intro/intro';
import Tabs from '../../BottomTab/Tab/tab';
import styles from './style';

const Intro: React.FC<any> = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const renderNextButton = () => {
    return (
      <>
        <TouchableOpacity style={styles.renderNextButton}>
          <Text style={styles.rendertext}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.renderview}>
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
      <>
        <TouchableOpacity
          style={styles.renderNextButton}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.rendertext}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <>
        <ImageBackground
          source={item.ImageBackground}
          resizeMode={'stretch'}
          style={{ flex: 1 }}>
          <TouchableOpacity onPress={onSkip} style={styles.skip}>
            <Text style={styles.textskip}>Skip</Text>
          </TouchableOpacity>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title1}>{item.title1}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.safeareaview}>
      {show ? (
        <Tabs />
      ) : (
        <Introo
          data={slides}
          renderItem={renderItem}
          renderNextButton={renderNextButton}
          onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          showNextButton={true}
          goToSlide
          onSlideChange={data => {
            console.log(data);
          }}
        />
      )}
    </SafeAreaView>
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
