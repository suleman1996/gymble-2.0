import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  SelectDayIcon,
  SelectDayIconLight,
  SelectHourIcon,
  SelectTimeSlotIcon,
  DuretionLightIcon,
  EditIcon,
  TrashIcon,
  ClockLightIcon,
} from './SVG/Icon';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DownarrowIcon} from '../../BottomTab/Home/Svgs/Icons';
import DaySheet from './DaySheet';
import AvailableHourSheet from './AvailableHourSheet';
import HourSheet from './HourSheet';
import React, {useState, useRef, useEffect} from 'react';
import MinTimeSheet from './MinTimeSheet';
import {
  EditProfileBusinessIcon,
  ProfileBackIcon,
  EditProfileEmailIcon,
  EditProfilePhoneIcon,
  EditProfileAddressIcon,
  ProfileDotsIcon,
  EditProfileBusinessHighLightIcon,
  EditProfileEmailHighLightIcon,
  EditProfilePhoneHighLightIcon,
  EditProfileAddressHighLightIcon,
} from '../../Svgs/Profile/ProfileVectors';
import Button from '../../Components/Button/button';
import CardButton from '../../Components/Button/cardButton';
import {FormInput} from '../../utilis/Text_input';
const ServiceSchedule: React.FC<any> = ({navigation}) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  const refRBSheet4 = useRef();

  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const rbsheetOpen2 = () => {
    refRBSheet2.current.open();
  };
  const rbsheetOpen3 = () => {
    refRBSheet3.current.open();
  };
  const rbsheetOpen4 = () => {
    refRBSheet4.current.open();
  };
  const [Day, setDay] = useState('Select Day');
  const [Hour, setHour] = useState('Select Hours');
  const [AvailableHour, setAvialableHour] = useState('Select Time Slot');
  const [MinTime, setMinTime] = useState('Select Time Slot');

  const selectCategories = [
    {
      text: 'Sunday',
    },
    {
      text: 'Monday',
    },
    {
      text: 'Tuesday',
    },
    {
      text: 'Wednesday',
    },
    {
      text: 'Thursday',
    },
    {
      text: 'Friday',
    },
    {
      text: 'Saturday',
    },
  ];
  const selectAmenities = [
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '2 Hours',
    },
    {
      text: '2 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '2 Hours',
    },
    {
      text: '2 Hours',
    },
    {
      text: '3 Hours',
    },
  ];
  const selectDurations = [
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
  ];
  const selectMinTime = [
    {
      text: '10:30-11:35',
    },
    {
      text: '10:30-11:12',
    },
    {
      text: '10:30-11:05',
    },
    {
      text: '10:30-11:00',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
    {
      text: '10:30-11:30',
    },
  ];
  const SchedulingData = [
    {
      Day: 'Wednesday',
      MinTime: '10 minutes',
      Duration: '60 minutes',
      HourAvailable: '9:30 AM-1:30 PM',
    },
    {
      Day: 'Thursday',
      MinTime: '10 minutes',
      Duration: '60 minutes',
      HourAvailable: '9:30 AM-1:30 PM',
    },
    {
      Day: 'Friday',
      MinTime: '5 minutes',
      Duration: '60 minutes',
      HourAvailable: '9:30 AM-11:30 AM',
    },
    {
      Day: 'Wednesday',
      MinTime: '10 minutes',
      Duration: '60 minutes',
      HourAvailable: '9:30 AM-1:30 PM',
    },
    {
      Day: 'Wednesday',
      MinTime: '10 minutes',
      Duration: '60 minutes',
      HourAvailable: '9:30 AM-1:30 PM',
    },
  ];

  // useEffect(() => {
  //   console.log(Day);
  //   console.log(Hour);
  // }, [Day, Hour]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Service Schedule</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>

      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Day</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {Day === 'Select Day' ? (
              <SelectDayIconLight style={styles.userIcon} />
            ) : (
              <SelectDayIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>{Day}</Text>
          </View>
          <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen} />
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
              height: '60%',
            },
          }}>
          <DaySheet
            onPress={() => refRBSheet.current.close()}
            data={selectCategories}
            setDataa={setDay}
            closeCenter={() => refRBSheet.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Duration</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {Hour === 'Select Hours' ? (
              <DuretionLightIcon style={styles.userIcon} />
            ) : (
              <SelectHourIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>{Hour}</Text>
          </View>
          <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen2} />
        </View>
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
              height: '65%',
            },
          }}>
          <HourSheet
            onPress={() => refRBSheet2.current.close()}
            data={selectAmenities}
            setDataa={setHour}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Hour Available</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {AvailableHour === 'Select Time Slot' ? (
              <ClockLightIcon style={styles.userIcon} />
            ) : (
              <SelectTimeSlotIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {AvailableHour}
            </Text>
          </View>
          <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen3} />
        </View>
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
              height: '65%',
            },
          }}>
          <AvailableHourSheet
            onPress={() => refRBSheet3.current.close()}
            data={selectDurations}
            setDataa={setAvialableHour}
            closeCenter={() => refRBSheet3.current.close()}
          />
        </RBSheet>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Min. Time Between</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {MinTime === 'Select Time Slot' ? (
              <ClockLightIcon style={styles.userIcon} />
            ) : (
              <SelectTimeSlotIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {MinTime}
            </Text>
          </View>
          <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen4} />
        </View>
        <RBSheet
          ref={refRBSheet4}
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
              height: '65%',
            },
          }}>
          <AvailableHourSheet
            onPress={() => refRBSheet4.current.close()}
            data={selectMinTime}
            setDataa={setMinTime}
            closeCenter={() => refRBSheet4.current.close()}
          />
        </RBSheet>

        <View style={styles.subHeadingView}>
          <Text style={styles.subHeadingText}>Added Scheduling</Text>
          <Button
            text={'Show all'}
            color={'black'}
            fontSize={14}
            onPress={() => {
              navigation.navigate('addedScheduling');
            }}
          />
        </View>
        {SchedulingData.map((item, index) => {
          return (
            index < 2 && (
              <View key={index} style={styles.scheduleCardView}>
                <View style={styles.cardSubView1}>
                  <View style={styles.cardSubViewhalf}>
                    <View style={styles.rowViewInCard}>
                      <SelectDayIconLight style={styles.cardIcon} />
                      <Text style={styles.cardIconText}>Day</Text>
                    </View>
                    <Text style={styles.cardSubHeading}>{item.Day}</Text>

                    <View style={styles.rowViewInCard}>
                      <ClockLightIcon style={styles.cardIcon} />
                      <Text style={styles.cardIconText}>Min. Time Between</Text>
                    </View>
                    <Text style={styles.cardSubHeading}>{item.MinTime}</Text>
                  </View>
                  <View style={styles.cardSubViewhalf}>
                    <View style={styles.rowViewInCard}>
                      <DuretionLightIcon style={styles.cardIcon} />
                      <Text style={styles.cardIconText}>Duration</Text>
                    </View>
                    <Text style={styles.cardSubHeading}>{item.Duration}</Text>

                    <View style={styles.rowViewInCard}>
                      <ClockLightIcon style={styles.cardIcon} />
                      <Text style={styles.cardIconText}>Hour Available</Text>
                    </View>
                    <Text style={styles.cardSubHeading}>
                      {item.HourAvailable}
                    </Text>
                  </View>
                </View>
                <View style={styles.cardSubView2}>
                  <CardButton
                    text={'Delete'}
                    Icon={<TrashIcon style={styles.cardIcon} />}
                    color={'#798293'}
                    fontSize={15}
                    height={40}
                    width={'40%'}
                    backgroundColor="#F2F3F5"
                  />
                  <CardButton
                    text={'Edit'}
                    Icon={<EditIcon style={styles.cardIcon} />}
                    color={'#fff'}
                    fontSize={15}
                    height={40}
                    width={'40%'}
                    backgroundColor="#4AB5E3"
                  />
                </View>
              </View>
            )
          );
        })}
        <View style={styles.endBtn}>
          <Button
            text={'+ Add New'}
            color={'#4AB5E3'}
            fontSize={15}
            height={45}
            width={'40%'}
            marginTop={50}
            backgroundColor="#fff"
            borderWidth={1}
            marginBottom={10}
          />
          <Button
            text={'Continue'}
            color={'#fff'}
            fontSize={15}
            height={45}
            width={'40%'}
            marginTop={50}
            backgroundColor="#4AB5E3"
            marginBottom={10}
            onPress={() => {
              navigation.navigate('serviceImages');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ServiceSchedule;
