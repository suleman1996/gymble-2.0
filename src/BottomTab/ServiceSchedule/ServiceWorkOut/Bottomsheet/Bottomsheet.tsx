import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {CrossIcon} from '../../../../BottomTab/Home/Svgs/Icons';
import Button from '../../../../Components/Button/button';
import {useNavigation} from '@react-navigation/native';
const Bottomsheet: React.FC<any> = ({onPress}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <CrossIcon style={{height: 20, width: 15}} onPress={onPress} />
        <Text style={{fontSize: 15, color: '#0A1326'}}>Rules</Text>
        <Text style={{fontSize: 15, color: '#0A1326'}}></Text>
      </View>
      <Text
        style={{
          fontSize: 17,
          color: '#08101F',
          marginTop: 30,
          marginHorizontal: 20,
          justifyContent: 'center',
        }}>
        Please check-in at the front desk upon arrival. You must wear a mask to
        enter the facility.
      </Text>

      <View style={{marginHorizontal: 20}}>
        <Button
          text={'Got it'}
          color={'#FFFFFF'}
          backgroundColor={'#4AB5E3'}
          fontSize={15}
          height={40}
          width={'100%'}
          marginTop={50}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};
export default Bottomsheet;
