import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
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
import AmenitiesSheet from './AmenitiesSheet';
import DurationSheet from './DurationSheet';
import React, {useState, useRef} from 'react';
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
const AddFacility: React.FC<any> = ({navigation}) => {
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
  const [Amenities, setAmenities] = useState('Select Amenities');
  const [Category, setCategory] = useState('Select Categories');
  const [Duration, setDuration] = useState('Select Duration');
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAFocus] = useState(false);
  const [Cfocus, setCFocus] = useState(false);
  const [Dfocus, setDFocus] = useState(false);
  const [Rfocus, setRFocus] = useState(false);
  const [Pricefocus, setPriceFocus] = useState(false);
  const [Sfocus, setSFocus] = useState(false);
  const [Zfocus, setZFocus] = useState(false);
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
  const selectAmenities = [
    {
      text: 'Amenity 1',
    },
    {
      text: 'Amenity 2',
    },
    {
      text: 'Amenity 3',
    },
    {
      text: 'Amenity 3',
    },
    {
      text: 'Amenity 3',
    },
    {
      text: 'Amenity 4',
    },
    {
      text: 'Amenity 4',
    },
    {
      text: 'Amenity 4',
    },
    {
      text: 'Amenity 4',
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
        <Text style={styles.text}>Add Facility</Text>
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
          <Text style={styles.businessName}>Facility Name</Text>
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
          <Text style={styles.name}>Facility Email</Text>
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
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen}>
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
              height: 500,
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
          <Text style={styles.name}>Amenities</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen2}>
            {Amenities == 'Select Amenities' ? (
              <AmenitiesSimpleIcon style={styles.userIcon} />
            ) : (
              <AmenitiesIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {Amenities}
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
              height: '60%',
            },
          }}>
          <AmenitiesSheet
            onPress={() => refRBSheet2.current.close()}
            data={selectAmenities}
            setDataa={setAmenities}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>

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
          <Text style={styles.businessName}>Duration</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen3}>
            {Duration == 'Select Duration' ? (
              <DurationSimpleIcon style={styles.userIcon} />
            ) : (
              <DurationIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {Duration}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen3} />
          </TouchableOpacity>
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
              height: 500,
            },
          }}>
          <CategorySheet
            // onPress={() => refRBSheet.current.close()}
            data={selectDurations}
            setDataa={setDuration}
            closeCenter={() => refRBSheet3.current.close()}
          />
        </RBSheet>
        <Button
          text={'Save Changes'}
          color={'#fff'}
          fontSize={15}
          height={50}
          width={'80%'}
          marginTop={50}
          backgroundColor={
            Nfocus &&
            Efocus &&
            Pfocus &&
            Afocus &&
            Cfocus &&
            Dfocus &&
            Rfocus &&
            Pricefocus &&
            Sfocus &&
            Zfocus &&
            Amenities &&
            Category &&
            Duration
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
            Rfocus &&
            Pricefocus &&
            Sfocus &&
            Zfocus &&
            Amenities &&
            Category &&
            Duration
              ? false
              : true
          }
          onPress={() => navigation.navigate('facilitySchedule')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddFacility;
