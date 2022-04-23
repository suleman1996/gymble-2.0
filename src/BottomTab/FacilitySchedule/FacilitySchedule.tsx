import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SelectDayIcon, SelectTimeSlotIcon, ClockLightIcon} from './SVG/Icon';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DownarrowIcon} from '../../BottomTab/Home/Svgs/Icons';
import DaySheet from './DaySheet';
import HourSheet from './HourSheet';
import React, {useState, useRef, useEffect} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import Button from '../../Components/Button/button';
const FacilitySchedule: React.FC<any> = ({navigation}) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const rbsheetOpen2 = () => {
    refRBSheet2.current.open();
  };

  const [Day, setDay] = useState('Select Day');
  const [Hour, setHour] = useState('Select Hours');

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
  const selectHours = [
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

  const [Catfocus, setCatFocus] = useState(false);

  //   useEffect(() => {
  //     console.log(Day);
  //     console.log(Hour);
  //   }, [Day, Hour]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Facility Schedule</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>

      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Day</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen}>
            {Day == 'Select Day' ? (
              <SelectDayIcon style={styles.userIcon} />
            ) : (
              <SelectDayIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>{Day}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen} />
          </TouchableOpacity>
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
              height: '55%',
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
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen2}>
            {Hour == 'Select Hours' ? (
              <SelectTimeSlotIcon style={styles.userIcon} />
            ) : (
              <SelectTimeSlotIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>{Hour}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen2} />
          </TouchableOpacity>
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
            data={selectHours}
            setDataa={setHour}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>
      
      </ScrollView>
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
            onPress={() => navigation.navigate('addSubFacility')}
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
          />
        </View>
    </SafeAreaView>
  );
};

export default FacilitySchedule;
