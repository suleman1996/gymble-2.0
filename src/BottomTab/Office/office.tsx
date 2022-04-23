import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
} from 'react-native';
import {
  WhiteForwardarrowIcon,
  WhitedownarrowIcon,
  ForwardIcon,
  MassageIcon,
  FacilitySearchIcon,
} from '../../Svgs/Facility/Icons';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import SwitchSelector from 'react-native-switch-selector';
import Bottomsheet from './BottomSheet/Bottomsheet';
import styles from './style';
import {Services, Rentals} from './List';
import Contacts from './Contacts';
const options = [
  {
    label: 'Listing ',
    value: 'listing',
  },
  {
    label: 'Customer',
    value: 'customer',
  },
];
const centerData = [
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
const Office: React.FC<any> = () => {
  const [data, setData] = useState('listing');
  const [center, setCenter] = useState('Center 1');
  const navigation = useNavigation();
  const fun = item => {
    navigation.navigate('morningWorkOut', {item});
  };
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity onPress={() => fun(item)}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              marginHorizontal: 20,
              flex: 1,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={item.image} />
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#08101F',
                    marginHorizontal: 20,
                    fontWeight: 'bold',
                  }}>
                  {item.text}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#798293',
                    marginHorizontal: 20,
                  }}>
                  {item.comment}
                </Text>

                <View
                  style={{
                    marginHorizontal: 20,
                    marginTop: 20,
                    width: 50,
                    borderRadius: 16,
                    alignItems: 'center',
                    backgroundColor:
                      item.status == 'Active'
                        ? '#4AB5E3'
                        : item.status == 'Paused'
                        ? '#123472'
                        : item.status == 'Inactive'
                        ? '#4A59E3'
                        : null,
                  }}>
                  <Text style={{fontSize: 12, color: '#FFFFFF'}}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <ForwardIcon style={styles.forward} />
              <Text
                style={{
                  fontSize: 12,
                  color: '#798293',
                  marginHorizontal: 20,
                }}></Text>
              <Text style={{fontSize: 14, color: '#08101F', marginTop: 20}}>
                {item.price}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#F2F3F5',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <WhiteForwardarrowIcon
          style={styles.arrowicon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Facility</Text>
        {data === 'listing' ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('addNew')}>
              <Text style={styles.text2}>Add New</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <FacilitySearchIcon style={styles.searchicon} />
          </>
        )}
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>{center}</Text>
        <WhitedownarrowIcon style={styles.arrowicon} onPress={rbsheetOpen} />
      </View>

      <View style={styles.mainview}>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <SwitchSelector
            initial={0}
            textColor={'#000'}
            selectedColor={'#000'}
            buttonColor={'#FFFFFF'}
            borderColor={'#F2F3F5'}
            hasPadding
            options={options}
            fontSize={12}
            backgroundColor={'#F2F3F5'}
            onPress={value => {
              setData(value);
            }}
          />
        </View>

        {data === 'listing' ? (
          <>
            <SectionList
              sections={[
                {title: 'Services', data: Services},
                {title: 'Rentals', data: Rentals},
              ]}
              renderSectionHeader={({section}) => (
                <Text
                  style={{
                    fontSize: 15,
                    marginHorizontal: 20,
                    marginTop: 5,
                    color: '#08101F',
                  }}>
                  {section.title}
                </Text>
              )}
              renderItem={renderItem}
            />
          </>
        ) : (
          <>
            <Contacts />
          </>
        )}

        {/* <SectionList 
        sections={[ {title: 'Services', data: Services},{title: 'Rentals', data: Rentals}]}
        renderSectionHeader={({section}) => (
          <Text style={{fontSize: 15,marginHorizontal: 20,marginTop:5,color: '#08101F',}}>{section.title}</Text>
          )} 
        renderItem={renderItem} /> */}
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
        <Bottomsheet
          onPress={() => refRBSheet.current.close()}
          data={centerData}
          setDataa={setCenter}
          closeCenter={() => refRBSheet.current.close()}
        />
      </RBSheet>
    </SafeAreaView>
  );
};
export default Office;
