import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import {
  BackIcon,
  PenIcon,
  RatingIcon,
  RulesIcon,
  Grayforwardicon,
} from '../../Svgs/Facility/Icons';
import {Categories, Reviews} from './Listdata';
import RBSheet from 'react-native-raw-bottom-sheet';
import Bottomsheet from './Bottomsheet/Bottomsheet';

const FacilityMorningWorkOut: React.FC<any> = ({navigation}) => {
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };

  const renderItemHorizontal = ({item, index}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EDF8FD',
            height: 36,
            marginHorizontal: 10,
            borderRadius: 20,
          }}>
          <Image source={item.image} style={styles.image2} />
          <Text style={styles.text3}>{item.title}</Text>
        </View>
      </>
    );
  };

  const renderItemHorizontal2 = ({item, index}) => {
    return (
      <>
        <View
          style={{
            width: 267,
            borderWidth: 1,
            marginHorizontal: 10,
            borderRadius: 10,
            borderColor: '#F2F3F5',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={styles.reviewsImage} />
            <View style={{marginHorizontal: 10, marginTop: 10}}>
              <Text style={styles.reviewstitle}>{item.title}</Text>
              <Text style={styles.reviewstext}>{item.text}</Text>
            </View>
          </View>
          <Text style={styles.reviewstext2}>{item.text2}</Text>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./backImage.png')} style={styles.image}>
        <View style={styles.container2}>
          <BackIcon
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <PenIcon
            style={styles.backIcon}
            onPress={() => navigation.navigate('editFacility')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#FFF',
            flex: 1,
            marginTop: 200,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}>
          <ScrollView>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{color: '#08101F', fontWeight: '600', fontSize: 20}}>
                Morning Workout
              </Text>
              <Text style={{color: '#08101F', fontWeight: '600', fontSize: 20}}>
                $50
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.view}>
                <RatingIcon style={styles.locationicon} />
                <Text style={styles.text1}>GA,Atlanta</Text>
              </View>
              <View style={styles.view2}>
                <RatingIcon style={styles.locationicon} />
                <Text style={styles.text1}>4.8 (52 reviews)</Text>
              </View>
            </View>

            <Text style={styles.text2}>Description</Text>
            <View>
              <FlatList
                data={Categories}
                horizontal={true}
                renderItem={renderItemHorizontal}
              />
            </View>
            <Text style={styles.text2}>Categories</Text>
            <Text style={styles.text4}>
              Rise and Grind is located in Georgia Atlanta and is undeniably the
              best gym space in town. It has special feautures which makes it
              more suitable and comfortable for customers
            </Text>

            <Text style={styles.text2}>Map</Text>
            <View>
              <Image
                source={require('../FacilityMorningWorkOut/Images/map.png')}
                style={styles.map}
              />
            </View>

            <Text style={styles.text2}>Reviews</Text>
            <FlatList
              data={Reviews}
              horizontal={true}
              renderItem={renderItemHorizontal2}
            />

            <TouchableOpacity
              onPress={rbsheetOpen}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 10,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RulesIcon style={styles.ruleIcon} />
                <Text style={styles.text5}>Rules</Text>
              </View>
              <Grayforwardicon style={styles.grayarrowicon} />
            </TouchableOpacity>

            <RBSheet
              ref={refRBSheet}
              keyboardAvoidingViewEnabled={true}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
                draggableIcon: {backgroundColor: '#D7DADF'},
                container: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: '#FFFFFF',
                  height: 269,
                },
              }}>
              <Bottomsheet onPress={() => refRBSheet.current.close()} />
            </RBSheet>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  container2: {
    marginTop: 15,
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  locationicon: {
    height: 16,
    width: 16,
  },
  text1: {
    color: '#798293',
    fontSize: 12,
    marginHorizontal: 5,
  },
  view: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 8,
  },
  view2: {
    flexDirection: 'row',
    marginTop: 8,
  },
  text2: {
    color: '#08101F',
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 15,
  },
  text3: {
    color: '#4AB5E3',
    fontSize: 13,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  image2: {
    height: 16,
    width: 16,
  },
  text4: {
    color: '#798293',
    fontSize: 13,
    marginHorizontal: 10,
    marginTop: 10,
  },
  map: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  reviewsImage: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
    marginTop: 10,
  },
  reviewstitle: {
    color: '#08101F',
    fontSize: 14,
  },
  reviewstext: {
    color: '#798293',
    fontSize: 12,
  },
  reviewstext2: {
    color: '#08101F',
    fontSize: 13,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  ruleIcon: {
    height: 40,
    width: 40,
  },
  text5: {
    color: '#08101F',
    fontSize: 15,
    marginHorizontal: 10,
  },
  grayarrowicon: {
    height: 20,
    width: 20,
  },
});
export default FacilityMorningWorkOut;
