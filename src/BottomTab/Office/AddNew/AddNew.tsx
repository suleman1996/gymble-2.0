import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import styles from './style';
import React, {useState} from 'react';
import Button from '../../../Components/Button/button';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../../Svgs/Profile/ProfileVectors';
import {
  ServicesIcon,
  ServicesBlueIcon,
  ExperienceIcon,
  ExperienceHighLightIcon,
  FacilityBlueIcon,
  FacilityIcon,
} from './SVG/Icons';
import {useNavigation} from '@react-navigation/native';
const AddNew: React.FC<any> = () => {
  const [seleted, setSelected] = useState(false);
  const [Sfocus, setSFocus] = useState(0);

  const navigation = useNavigation();

  //   const onClick = (index: any) => {
  //     if (typeof index) {
  //       setSFocus(index);
  //     }
  //   };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add New</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <ScrollView>
        <>
          <TouchableOpacity
            onPress={
              () => setSFocus(1)
              // navigation.navigate('addService')
            }
            style={[
              styles.card,
              {
                borderColor: Sfocus === 1 ? '#4AB5E3' : '#F2F3F5',
              },
            ]}>
            <View>
              <View style={styles.cardContainer}>
                {Sfocus === 1 ? (
                  <ServicesBlueIcon style={styles.cardIcon} />
                ) : (
                  <ServicesIcon style={styles.cardIcon} />
                )}
                <Text style={styles.cardText}>Services</Text>
              </View>
              <View style={styles.cardNumber}>
                <Text style={styles.number}>
                  Training classes , group workout, or consutitions.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
        <>
          <TouchableOpacity
            onPress={() => {
              setSFocus(2);
              // navigation.navigate('experience')
            }}
            style={[
              styles.card,
              {
                borderColor: Sfocus === 2 ? '#4AB5E3' : '#F2F3F5',
              },
            ]}>
            <View>
              <View style={styles.cardContainer}>
                {Sfocus === 2 ? (
                  <ExperienceHighLightIcon style={styles.cardIcon} />
                ) : (
                  <ExperienceIcon style={styles.cardIcon} />
                )}
                <Text style={styles.cardText}>Experience</Text>
              </View>
              <View style={styles.cardNumber}>
                <Text style={styles.number}>
                  Sports leaugues , camps or community events.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
        <>
          <TouchableOpacity
            onPress={() => {
              setSFocus(3);
            }}
            style={[
              styles.card,
              {
                borderColor: Sfocus === 3 ? '#4AB5E3' : '#F2F3F5',
              },
            ]}>
            <View>
              <View style={styles.cardContainer}>
                {Sfocus === 3 ? (
                  <FacilityBlueIcon style={styles.cardIcon} />
                ) : (
                  <FacilityIcon style={styles.cardIcon} />
                )}
                <Text style={styles.cardText}>Facility</Text>
              </View>
              <View style={styles.cardNumber}>
                <Text style={styles.number}>Court, field or dance studio.</Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
      </ScrollView>
      <View>
        <Button
          text={'Continue'}
          color={'#FFFFFF'}
          fontSize={15}
          height={50}
          width={'80%'}
          marginTop={10}
          backgroundColor={Sfocus === 0 ? '#9BA2AE' : '#4AB5E3'}
          disabled={Sfocus === 0 ? true : false}
          marginBottom={10}
          onPress={() => {
            if (Sfocus === 1) {
              navigation.navigate('addService');
            } else if (Sfocus === 2) {
              navigation.navigate('experience');
            } else if (Sfocus === 3) {
              navigation.navigate('addFacility');
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
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
  card: {
    borderWidth: 1,
    height: 150,
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 10,
    // borderColor: '#F2F3F5',
  },
  cardContainer: {
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
  },
  cardText: {
    color: '#08101F',
    fontSize: 17,
    fontWeight: '500',
  },
  cardIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  cardNumber: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  number: {
    color: '#798293',
    fontSize: 13,
    fontWeight: '400',
  },
});
export default AddNew;
