import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  ErrorIcon,
  CityIcon,
  StateIcon,
  ZipIcon,
  CategoryIcon,
  AmenitiesIcon,
  CitySimpleIcon,
  StateSimpleIcon,
  ZipSimpleIcon,
  CategorySimpleIcon,
  AmenitiesSimpleIcon,
} from '../../Svgs/Facility/Icons';
import styles from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {DownarrowIcon} from '../../BottomTab/Home/Svgs/Icons';
import CategorySheet from './CategorySheet';
import FrequencySheet from './FrequencySheet';
import FacilitySheet from './FacilitySheet';
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
import {
  ExperienceDateSimpleIcon,
  ExperienceDateHighLightIcon,
  ExperienceTimeIcon,
  ExperienceTimeHighLightIcon,
  ExperienceFrequencyIcon,
  ExperienceFrequencyHighLightIcon,
  ExperienceSlotIcon,
  ExperienceSlotHighLightIcon,
} from '../Experience/SVG/Icons';
import Button from '../../Components/Button/button';
import {FormInput} from '../../utilis/Text_input';
const Experience: React.FC<any> = ({navigation}) => {
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
  const [facility, setFacility] = useState('Select Facility or Sub-Facility');
  const [frequency, setFrequency] = useState('Add Frequency');
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAFocus] = useState(false);
  const [Cfocus, setCFocus] = useState(false);
  const [Dfocus, setDFocus] = useState(false);
  const [Pricefocus, setPriceFocus] = useState(false);
  const [Sfocus, setSFocus] = useState(false);
  const [Zfocus, setZFocus] = useState(false);
  const [Datefocus, setDateFocus] = useState(false);
  const [Timefocus, setTimeFocus] = useState(false);
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
  const facilities = [
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Facility Center 01',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Facility Center 02',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Facility Center 03',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      text: 'Facility Center 04',
    },
  ];
  const frequencyData = [
    {
      text: 'Weekly',
    },
    {
      text: 'Bi-Weekly',
    },
    {
      text: 'Monthly',
    },
    {
      text: 'Yearly',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add Experience</Text>
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
          <Text style={styles.businessName}>Experience Name</Text>
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
              height: '60%',
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
          <Text style={styles.businessName}>Date</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Datefocus ? (
            <ExperienceDateSimpleIcon style={styles.userIcon} />
          ) : (
            <ExperienceDateHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Enter Date'}
            placeholderTextColor="#798293"
            onChangeText={text => setDateFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Time</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Timefocus ? (
            <ExperienceTimeIcon style={styles.userIcon} />
          ) : (
            <ExperienceTimeHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'Add Time'}
            placeholderTextColor="#798293"
            onChangeText={text => setTimeFocus(text)}
            style={styles.input}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Add to Facility or Sub-Facility</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen2}>
            {facility == 'Select Facility or Sub-Facility' ? (
              <AmenitiesSimpleIcon style={styles.userIcon} />
            ) : (
              <AmenitiesIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {facility}
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
              height: '40%',
            },
          }}>
          <FacilitySheet
            onPress={() => refRBSheet2.current.close()}
            data={facilities}
            setDataa={setFacility}
            closeCenter={() => refRBSheet2.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Frequency</Text>
        </View>
        <View style={styles.category}>
          <TouchableOpacity style={[styles.view3]} onPress={rbsheetOpen3}>
            {frequency == 'Add Frequency' ? (
              <ExperienceFrequencyIcon style={styles.userIcon} />
            ) : (
              <ExperienceFrequencyHighLightIcon style={styles.userIcon} />
            )}
            <Text style={{color: '#08101F', alignSelf: 'center'}}>
              {frequency}
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
              height: '35%',
            },
          }}>
          <FrequencySheet
            onPress={() => refRBSheet3.current.close()}
            data={frequencyData}
            setDataa={setFrequency}
            closeCenter={() => refRBSheet3.current.close()}
          />
        </RBSheet>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Available Slots</Text>
        </View>
        <View style={[styles.forminputView]}>
          {!Pricefocus ? (
            <ExperienceSlotIcon style={styles.userIcon} />
          ) : (
            <ExperienceSlotHighLightIcon style={styles.userIcon} />
          )}

          <FormInput
            placeholder={'# of slots'}
            placeholderTextColor="#798293"
            onChangeText={text => setPriceFocus(text)}
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
          onPress={() => navigation.navigate('imageScreen')}
          backgroundColor={
            Nfocus &&
            Efocus &&
            Pfocus &&
            Afocus &&
            Cfocus &&
            Dfocus &&
            Pricefocus &&
            Sfocus &&
            Zfocus &&
            Datefocus &&
            Timefocus
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
            Pricefocus &&
            Sfocus &&
            Zfocus &&
            Datefocus &&
            Timefocus
              ? false
              : true
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Experience;
