import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { DownarrowIcon, BellIcon, CalenderIcon, TimeIcon, DotIcon } from './Svgs/Icons';
import { GreenarrowIcon } from '../../Svgs/Revenue/Icons';
import Button from '../../Components/Button/button';
import RBSheet from 'react-native-raw-bottom-sheet';
import Bottomsheet from '../../Components/BottomSheet/Bottomsheet';
import { LineChart } from 'react-native-chart-kit';
import styles from './style';
import { get_data } from '../../utilis/AsyncStorage/Controller';
import { ProfileIconCount } from '../../Svgs/Profile/ProfileVectors';
import { getBookUserApi } from "../../utilis/Api/Api_controller";

const Home: React.FC<any> = ({ navigation }) => {
  const center = [
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Center 1',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Center 2',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Center 3',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Center 4',
    },
  ];
  const [dataa, setDataa] = useState('Center 1');
  const refRBSheet = useRef();
  const rbsheetOpen = () => { refRBSheet.current.open() };
  let status = get_data('STATUS');
  const personpic = [
    {
      img: require('../Home/Images/test_1.png'),
    },
    {
      img: require('../Home/Images/test_2.png'),
    },
    {
      img: require('../Home/Images/test_3.png'),
    },
    {
      img: require('../Home/Images/test_4.png'),
    },
    {
      img: require('../Home/Images/test_5.png'),
    },
    {
      img: null,
    },
  ];

  const week = [{ label: '1 week', value: '1week' }];

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(74, 181, 227, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(121,130,147, ${opacity})`,
    style: { borderRadius: 6 },
    propsForDots: { r: '0', strokeWidth: '2', stroke: '#ffa726' },
    propsForBackgroundLines: { strokeWidth: 0 },
  };

  useEffect(() => {
    getBookingData()
  }, [])
  const getBookingData = async () => {
    let response = await getBookUserApi({ limit: 1, page: 1, facilityId: 2 })
    if (response !== "Error" && response?.data?.success) {
      console.log(response?.data?.data, "this is home page booking data");

    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.toptext}>{dataa}</Text>
              <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen} />
            </View>
            <BellIcon
              onPress={() => navigation.navigate('notificationList')}
              style={styles.bell}
            />
          </View>

          <Text style={styles.text2}>21 January, 2022</Text>

          <Text style={styles.text3}>Next Booking</Text>
          <TouchableOpacity
            style={styles.view4}
            onPress={() => navigation.navigate('customerinfo', { item: status })}>
            <View style={styles.dotview}>
              <View style={styles.view5}>
                <Image source={require('../Home/Images/test_3.png')} style={styles.profile} />
                <View>
                  <Text style={styles.text4}>Mrh Raju</Text>
                  <Text style={styles.text5}>Pure Grind Fitness</Text>
                </View>
              </View>

              <View>
                <DotIcon style={styles.doticon} />
              </View>
            </View>
            <View style={styles.view6}></View>
            <View style={styles.view7}>
              <View style={{ flex: 1 }}>
                <Text style={styles.text6}>Service</Text>
                <Text style={styles.text7}>Morning Workout</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text6}>Amentities</Text>
                <Text style={styles.text7}>Free Coffe,Drinks</Text>
              </View>
            </View>

            <Text style={styles.text8}>Time Frame</Text>
            <View style={styles.view8}>
              <CalenderIcon style={styles.calenderIcon} />
              <Text style={styles.text9}>20 Jan</Text>
              <TimeIcon style={styles.calenderIcon} />
              <Text style={styles.text9}>10:30 PM</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.text3}>Bookings</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('booking')}
            style={styles.view4}>
            <View style={styles.view7}>
              <View style={{ flex: 1 }}>
                <Text style={styles.text10}>642</Text>
                <Text style={styles.text11}>Bookings for center 2</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.text10}>642</Text>
                <Text style={styles.text11}>Free Coffe,Drinks</Text>
              </View>
            </View>
            <View style={styles.view6}></View>

            <View
              style={{
                marginHorizontal: 20,
                flexDirection: 'row',
                marginBottom: 20,
              }}>
              <FlatList
                style={{ paddingStart: 4 }}
                data={personpic}
                horizontal={true}
                maxToRenderPerBatch={5}
                renderItem={renderItemHorizontal}
              />
              <Button
                text={'See All'}
                color={'#4AB5E3'}
                backgroundColor={'#EDF8FD'}
                fontSize={15}
                height={24}
                width={73}
                borderWidth={1}
                marginTop={30}
              />
            </View>
          </TouchableOpacity>

          <RBSheet
            ref={refRBSheet}
            keyboardAvoidingViewEnabled={true}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: { backgroundColor: 'rgba(0,0,0,0.4)' },
              draggableIcon: { backgroundColor: '#D7DADF' },
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#FFFFFF',
                height: 366,
              },
            }}>
            <Bottomsheet
              onPress={() => refRBSheet.current.close()}
              data={center}
              setDataa={setDataa}
              closeCenter={() => refRBSheet.current.close()}
            />
          </RBSheet>

          <Text style={styles.text3}>Revenues</Text>
          <TouchableOpacity
            style={styles.view9}
            onPress={() => navigation.navigate('revenue')}>
            <View style={styles.view10}>
              <Text style={styles.text12}>$6,443.92</Text>
              <View
                style={{
                  borderColor: '#E9E9E9',
                  height: 50,
                  width: 142,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  alignItems: 'center',
                  borderRadius: 24,
                  backgroundColor: '#F2F3F5',
                }}>
                <Text
                  style={{
                    color: '#798293',
                    fontSize: 12,
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}>
                  1 Week
                </Text>
              </View>
              {/* <RNPicker
                placeholder={{label: 'Select', value: ''}}
                onValueChange={item => {
                  setWeek(item);
                }}
                style={{
                  inputAndroid: {
                    color: '#798293',
                    borderRadius: 24,
                    borderWidth: 0.5,
                    height: 23,
                    width: 142,
                  },
                  viewContainer: {
                    borderColor: '#E9E9E9',
                    height: 50,
                    width: 142,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 24,
                    backgroundColor: '#F2F3F5',
                  },
                  inputIos: {
                    color: '#798293',
                    borderRadius: 24,
                    borderWidth: 0.5,
                    fontSize: 20,
                    backgroundColor: '#EDF8FD',
                  },
                }}
                items={week.map(obj => ({
                  // key: obj.id,
                  label: obj.label,
                  value: obj.value,
                }))}
              /> */}
            </View>
            <Text style={styles.text13}>Total revenues</Text>
            <View style={styles.view11}>
              <Text style={styles.text14}>2.55%</Text>
              <GreenarrowIcon style={styles.greenarrowicon} />
            </View>

            <LineChart
              data={{
                labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [1, 7, 6, 4, 2, 5],
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(234,180,17,${opacity})`, // optional
                  },
                  {
                    data: [2, 4, 6, 8, 8, 2],
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(65,201,110, ${opacity})`, // optional
                  },
                  {
                    data: [9, 4, 7, 8, 2, 4],
                    strokeWidth: 3,
                    color: (opacity = 2) => `rgba(74,181,227, ${opacity})`, // optional
                  },
                ],
              }}
              width={Dimensions.get('window').width * 1.13}
              height={180}
              withHorizontalLabels={false}
              withOuterLines={false}
              chartConfig={chartConfig}
              bezier
              style={{ marginTop: 8, marginLeft: -40, borderRadius: 10 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export const renderItemHorizontal = ({ item, index }) => {
  const styles = StyleSheet.create({
    imageContainer: {
      paddingVertical: 10,
      margin: -14,
      bottom: 0,
      marginTop: 2,
      alignSelf: 'center',
      paddingLeft: 10,
      display: 'flex',
      borderColor: 'red',
      flex: 1,
    },
    Flatlistimage: {
      width: 40,
      height: 40,
      borderRadius: 90,
    },
  });
  return (
    <>
      <View style={styles.imageContainer}>
        {item.img ? (
          <Image style={styles.Flatlistimage} source={item.img} />
        ) : (
          <ProfileIconCount style={{ width: 40, height: 40 }} />
        )}
      </View>
    </>
  );
};
export default Home;
