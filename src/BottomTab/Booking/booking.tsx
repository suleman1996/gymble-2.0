import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BlackarrowIcon} from '../../Svgs/Revenue/Icons';
import {BlackDotIcon, SortIcon, CalenderIcon} from '../../Svgs/Bookings/Icons';
import {DownarrowIcon} from '../Home/Svgs/Icons';
import Bottomsheets from './Bottomsheet/Bottomsheet';
import RBSheet from 'react-native-raw-bottom-sheet';
import Statussheet from './Bottomsheet/Statussheet';
import Refundsheet from './Bottomsheet/Refundsheet';
import {save_data} from '../../utilis/AsyncStorage/Controller';
import styles from './style';

const Booking: React.FC<any> = ({navigation}) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const rbsheetOpen2 = () => {
    refRBSheet2.current.open();
  };
  const [dataa, setDataa] = useState('');
  const [statuss, setStatuss] = useState('');

  useEffect(() => {
    savedata();
  });

  const savedata = async () => {
    await save_data('STATUS', statuss);
  };

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

  const status = [
    {
      text: 'Pending',
    },
    {
      text: 'Upcoming',
    },
    {
      text: 'Completed',
    },
    {
      text: 'Rejected',
    },
  ];

  const Bookings = [
    {
      img: require('../Home/Images/test_1.png'),
      text: 'Devon Lane',
      datetime: '12 Feb, 10:30 PM',
      status: 'Pending',
    },
    {
      img: require('../Home/Images/test_2.png'),
      text: 'Cody Fisher',
      datetime: '12 Feb, 10:30 PM',
      status: 'Completed',
    },
    {
      img: require('../Home/Images/test_3.png'),
      text: 'Dianne Russell',
      datetime: '12 Feb, 10:30 PM',
      status: 'Upcoming',
    },
    {
      img: require('../Home/Images/test_4.png'),
      text: 'Cameron Williamson',
      datetime: '12 Feb, 10:30 PM',
      status: 'Rejected',
    },
    {
      img: require('../Home/Images/test_5.png'),
      text: 'Jenny Wilson',
      datetime: '12 Feb, 10:30 PM',
      status: 'Accept',
    },
  ];

  const onChange = (statuss: string) => {
    if (statuss == 'Completed') {
      refRBSheet3.current.open();
    } else {
      console.log('nothing');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('customerinfo', {item: statuss})}>
        <View style={styles.flatlistMainview}>
          <Image source={item.img} style={styles.image} />
          <View style={styles.flatlistview2}>
            <Text style={styles.flatlisttext}>{item.text}</Text>
            <View style={styles.flatlistview}>
              <CalenderIcon style={styles.calenderIcon} />
              <Text style={styles.flatlisttext2}>{item.datetime}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
          }}>
          <Text style={styles.image}></Text>
          {statuss == 'Rejected' ? null : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => onChange(statuss)}>
              <Text style={styles.buttontext}>
                {statuss == 'Upcoming'
                  ? 'Cancel'
                  : statuss == 'Pending'
                  ? 'Reject'
                  : statuss == 'Completed'
                  ? 'Refund'
                  : 'Reject'}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttontext2}>
              {statuss == 'Upcoming'
                ? 'Message'
                : statuss == 'Completed'
                ? 'Message'
                : statuss == 'Rejected'
                ? 'Message'
                : 'Accept'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separatorline}></View>
      </TouchableOpacity>
    );
  };

  const onPressYeah=()=>{
   navigation.navigate('refundsuccess');
   refRBSheet3.current.close()
  }

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <View style={styles.headerView}>
          <BlackarrowIcon
            style={styles.arrowicon}
            onPress={() => navigation.navigate('home')}
          />
          <Text style={styles.text}>Bookings</Text>
          <BlackDotIcon style={styles.doticon} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view2}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={rbsheetOpen} style={styles.view3}>
                <Text style={styles.toptext}>{dataa ? dataa : 'Center 1'}</Text>
                <DownarrowIcon style={styles.downarrow} />
              </TouchableOpacity>

              <TouchableOpacity onPress={rbsheetOpen2} style={styles.view4}>
                <Text style={styles.toptext}>
                  {statuss ? statuss : 'Pending'}
                </Text>
                <DownarrowIcon style={styles.downarrow} />
              </TouchableOpacity>
            </View>
            <SortIcon style={styles.sorticon} />
          </View>

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
                height: 366,
              },
            }}>
            <Bottomsheets
              onPress={() => refRBSheet.current.close()}
              data={center}
              setDataa={setDataa}
              closeCenter={() => refRBSheet.current.close()}
            />
          </RBSheet>

          <RBSheet
            ref={refRBSheet2}
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
                height: 310,
              },
            }}>
            <Statussheet
              onPress={() => refRBSheet2.current.close()}
              data={status}
              setStatus={setStatuss}
              closeStatus={() => refRBSheet2.current.close()}
            />
          </RBSheet>

          <RBSheet
            ref={refRBSheet3}
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
            <Refundsheet
              onPress={() => refRBSheet3.current.close()}
              onPressYeah={onPressYeah}
            />
          </RBSheet>

          <FlatList data={Bookings} renderItem={renderItem} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Booking;
