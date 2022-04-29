import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Platform, ImageBackground, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Introo: React.FC<any> = ({ data, renderNextButton, renderDoneButton, onSkip, onDone, onSlideChange }) => {
  let slider = AppIntroSlider | undefined;
  const renderItem = ({ item }) => {
    return (
      <>
        <ImageBackground
          source={item.ImageBackground}
          resizeMode={'stretch'}
          style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => slider?.goToSlide(2, true)} style={styles.skip}>
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
    <>
      <AppIntroSlider
        ref={(ref) => (slider = ref!)}
        data={data}
        activeDotStyle={{ backgroundColor: '#FFFFFF', height: 8, width: 8 }}
        dotStyle={{ backgroundColor: 'grey', width: 8, height: 8 }}
        renderItem={renderItem}
        onSkip={onSkip}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onSlideChange={onSlideChange}
        onDone={onDone}
        showNextButton={true}
        showSkipButton={false}
        showDoneButton={true}
        bottomButton
      />
    </>
  );
};
const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  skip: {
    height: 32,
    width: 64,
    padding: 6,
    backgroundColor: 'rgba(255,255,255,0.32)',
    borderRadius: 32,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: Platform.OS == 'ios' ? 60 : 30,
    marginHorizontal: 15
  },
  textskip: {
    color: '#ffffff',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'center',
    marginTop: 100
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
    marginTop: 150,
  },
  title1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#ffffff',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 20
  },
});
export default Introo;
