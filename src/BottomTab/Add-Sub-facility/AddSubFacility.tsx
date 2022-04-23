import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  CategoryIcon,
  PriceIcon,
  CategorySimpleIcon,
  PriceSimpleIcon,
} from '../../Svgs/Facility/Icons';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DownarrowIcon} from '../Home/Svgs/Icons';
import DaySheet from './DaySheet';
import HourSheet from './HourSheet';
import React, {useState, useRef} from 'react';
import {
  EditProfileBusinessIcon,
  ProfileBackIcon,
  ProfileDotsIcon,
  EditProfileBusinessHighLightIcon,
} from '../../Svgs/Profile/ProfileVectors';
import {SelectTimeSlotIcon, ClockLightIcon} from './SVG/Icon';
import Button from '../../Components/Button/button';
import {FormInput} from '../../utilis/Text_input';
const AddSubFacility: React.FC<any> = ({navigation}) => {
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();

  const rbsheetOpen1 = () => {
    refRBSheet1.current.open();
  };
  const rbsheetOpen2 = () => {
    refRBSheet2.current.open();
  };
  const [Category, setCategory] = useState('Select Categories');
  const [Duration, setDuration] = useState('Select Duration');
  const [Nfocus, setNFocus] = useState(false);
  const [Dfocus, setDFocus] = useState(false);
  const [Rfocus, setRFocus] = useState(false);
  const [Pricefocus, setPriceFocus] = useState(false);
  const [Catfocus, setCatFocus] = useState(false);
  const selectCategories = [
    {
      text: 'Category 1',
    },
    {
      text: 'Category 2',
    },
    {
      text: 'Category 3',
    },
    {
      text: 'Category 3',
    },
    {
      text: 'Category 3',
    },
    {
      text: 'Category 4',
    },
    {
      text: 'Category 4',
    },
    {
      text: 'Category 4',
    },
    {
      text: 'Category 4',
    },
    {
      text: 'Category 4',
    },
  ];
  const selectDurations = [
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
    {
      text: '1 Hours',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add Sub-Facility</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Sub-facility Name</Text>
          <Text style={styles.maxNumber}>Max 50 character (0/50)</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Nfocus ? (
            <EditProfileBusinessIcon style={styles.userIcon} />
          ) : (
            <EditProfileBusinessHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setNFocus(text);
            }}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Price</Text>
          <Text style={styles.maxNumber}>Per day</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Pricefocus ? (
            <PriceSimpleIcon style={styles.userIcon} />
          ) : (
            <PriceIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setPriceFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Duration</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen1}>
            {Duration == 'Select Duration' ? (
              <ClockLightIcon style={styles.userIcon} />
            ) : (
              <SelectTimeSlotIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {Duration}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen1} />
          </TouchableOpacity>
        </View>
        <RBSheet
          ref={refRBSheet1}
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
              height: 500,
            },
          }}>
          <HourSheet
            onPress={() => refRBSheet1.current.close()}
            data={selectDurations}
            setDataa={setDuration}
            closeCenter={() => refRBSheet1.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Categories</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen2}>
            {Category == 'Select Categories' ? (
              <CategorySimpleIcon style={styles.userIcon} />
            ) : (
              <CategoryIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {Category}
            </Text>
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
              height: 500,
            },
          }}>
          <DaySheet
            onPress={() => refRBSheet2.current.close()}
            data={selectCategories}
            setDataa={setCategory}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Description</Text>
          <Text style={styles.maxNumber}>Max 50 character (0/50)</Text>
        </View>
        <View style={styles.details}>
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setDFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Rules</Text>
          <Text style={styles.maxNumber}>Max 50 character (0/50)</Text>
        </View>
        <View style={styles.details}>
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setRFocus(text)}
            style={styles.input}
          />
        </View>

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
            // onPress={() => navigation.navigate('addSubFacility')}
          />
          <Button
            text={'Add Facility'}
            color={'#fff'}
            fontSize={15}
            height={45}
            width={'40%'}
            marginTop={50}
            backgroundColor="#4AB5E3"
            marginBottom={10}
            onPress={() => navigation.navigate('facilityImage')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddSubFacility;
