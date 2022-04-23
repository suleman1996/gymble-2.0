import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {
  ErrorIcon,
  CityIcon,
  StateIcon,
  ZipIcon,
  CategoryIcon,
  PriceIcon,
  DurationIcon,
  AmenitiesIcon,
  CitySimpleIcon,
  StateSimpleIcon,
  ZipSimpleIcon,
  CategorySimpleIcon,
  AmenitiesSimpleIcon,
  PriceSimpleIcon,
  DurationSimpleIcon,
} from '../../Svgs/Facility/Icons';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DownarrowIcon} from '../Home/Svgs/Icons';
import CategorySheet from './CategorySheet';
import BottomSheet from './BottomSheet';
import React, {useState, useRef, useEffect} from 'react';
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
import {FormInput} from '../../utilis/Text_input';
import {PeopleIcon, SelectedPeopleIcon} from './SVG/Icon/Icon';
const AddService: React.FC<any> = ({navigation}) => {
  const refRBSheet = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();

  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const rbsheetOpen2 = () => {
    refRBSheet2.current.open();
  };
  const rbsheetOpen3 = () => {
    refRBSheet3.current.open();
  };

  const [Category, setCategory] = useState('Select Categories');
  const [Data, setDataa] = useState('Select Facility or Sub-Facility');

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
      text: 'Category 4',
    },
    {
      text: 'Category 2',
    },
    {
      text: 'Category 3',
    },
    {
      text: 'Category 4',
    },
  ];
  const selectFacilities = [
    {
      text: 'Facility Center 01',
    },
    {
      text: 'Facility Center 02',
    },
    {
      text: 'Facility Center 03',
    },
    {
      text: 'Facility Center 04',
    },
  ];
  const selectDurations = [
    {
      text: '1 Day',
    },
    {
      text: '1 Week',
    },
    {
      text: '1 Month',
    },
  ];
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAFocus] = useState(false);
  const [Cfocus, setCFocus] = useState(false);
  const [Dfocus, setDFocus] = useState(false);
  const [AvailableSlots, setAvailableSlots] = useState(false);
  const [Pricefocus, setPriceFocus] = useState(false);
  const [Sfocus, setSFocus] = useState(false);
  const [Zfocus, setZFocus] = useState(false);
  const [Catfocus, setCatFocus] = useState(false);

  // useEffect(() => {
  //     console.log(Category)
  //     console.log(Data)
  // },[Category,Data])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add Service</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <View style={styles.view2}>
        <ErrorIcon style={styles.dotsIcon} />
        <Text style={styles.text1}>
          Please fill all the inputs to add a new facility
        </Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Service Name</Text>
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
          <Text style={styles.name}>Host Email</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Efocus ? (
            <EditProfileEmailIcon style={styles.userIcon} />
          ) : (
            <EditProfileEmailHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setEFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Phone Number</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Pfocus ? (
            <EditProfilePhoneIcon style={styles.userIcon} />
          ) : (
            <EditProfilePhoneHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setPFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Address</Text>
        </View>

        <View style={[styles.forminputView]}>
          {!Afocus ? (
            <EditProfileAddressIcon style={styles.userIcon} />
          ) : (
            <EditProfileAddressHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setAFocus(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>City</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Cfocus ? (
            <CitySimpleIcon style={styles.userIcon} />
          ) : (
            <CityIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setCFocus(text);
            }}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>State</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Sfocus ? (
            <StateSimpleIcon style={styles.userIcon} />
          ) : (
            <StateIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setSFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Zip Code</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Zfocus ? (
            <ZipSimpleIcon style={styles.userIcon} />
          ) : (
            <ZipIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setZFocus(text)}
            style={styles.input}
          />
        </View>

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
          <Text style={styles.businessName}>Categories</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {Category==="Select Categories" ? (
              <CategorySimpleIcon style={styles.userIcon} />
            ) : (
              <CategoryIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {Category}
            </Text>
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
              height: '70%',
            },
          }}>
          <CategorySheet
            onPress={() => refRBSheet.current.close()}
            data={selectCategories}
            setDataa={setCategory}
            closeCenter={() => refRBSheet.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Add to Facility or Sub-Facility</Text>
        </View>
        <View style={styles.category}>
          <View style={[styles.view3]}>
            {Data==="Select Facility or Sub-Facility" ? (
              <AmenitiesSimpleIcon style={styles.userIcon} />
            ) : (
              <AmenitiesIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>{Data}</Text>
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
              height: 346,
            },
          }}>
          <BottomSheet
            onPress={() => refRBSheet2.current.close()}
            data={selectFacilities}
            setDataa={setDataa}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>

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
            placeholder={'Add Price'}
            placeholderTextColor="#798293"
            onChangeText={text => setPriceFocus(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Available Slots</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!AvailableSlots ? (
            <PeopleIcon style={styles.userIcon} />
          ) : (
            <SelectedPeopleIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'# of slots'}
            placeholderTextColor="#798293"
            onChangeText={text => setAvailableSlots(text)}
            style={styles.input}
          />
        </View>
        <Button
          text={'Save Changes'}
          color={'#fff'}
          fontSize={15}
          height={50}
          width={'80%'}
          marginTop={50}
          onPress={() => navigation.navigate('serviceSchedule')}
          backgroundColor={
            Nfocus &&
            Efocus &&
            Pfocus &&
            Afocus &&
            Cfocus &&
            Dfocus &&
            AvailableSlots &&
            Pricefocus &&
            Sfocus &&
            Zfocus
              ? '#4AB5E3'
              : '#9BA2AE'
          }
          marginBottom={10}
          disabled={
            Nfocus &&
            Efocus &&
            Pfocus &&
            Afocus &&
            Cfocus &&
            Dfocus &&
            AvailableSlots &&
            Pricefocus &&
            Sfocus &&
            Zfocus
              ? false
              : true
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddService;
