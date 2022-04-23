import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {FormInput} from '../../utilis/Text_input';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
  EditProfileTinNumberIcon,
  EditProfileTinNumberHighLightIcon,
  EditProfileAccountHolderIcon,
  EditProfileAccountNumberHighLightIcon,
  EditProfileAccountNumberIcon,
  EditProfileAccounHighLightIcon,
  EditProfileAccountRoutingNumberIcon,
  EditProfileRoutingHighLightIcon,
} from '../../Svgs/Profile/ProfileVectors';
import Button from '../../Components/Button/button';
const EditDetails: React.FC<any> = () => {
  const [Tnumber, setTNumber] = useState(false);
  const [accountH, setAccountH] = useState(false);
  const [accountN, setAccountN] = useState(false);
  const [Rnumber, setRNumber] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Edit Details</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>

      <ScrollView>
        <View style={{marginVertical: 25}}>
          <Text style={styles.taxDetail}>Tax Details</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.tinNumber}>Ein Number *</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Tnumber ? '#000' : '#F2F3F5'},
            ]}>
            {!Tnumber ? (
              <EditProfileTinNumberIcon style={styles.userIcon} />
            ) : (
              <EditProfileTinNumberHighLightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Placeholder text'}
              placeholderTextColor="#798293"
              onChangeText={text => {
                setTNumber(text), setEFocus;
              }}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.bankAcoount}>Bank Account Details</Text>
            <Text style={styles.acoountHolder}>Account Holder</Text>
            <View
              style={[
                styles.forminputView,
                {borderColor: accountH ? '#000' : '#F2F3F5'},
              ]}>
              {!accountH ? (
                <EditProfileAccountHolderIcon style={styles.userIcon} />
              ) : (
                <EditProfileAccounHighLightIcon style={styles.userIcon} />
              )}
              <FormInput
                placeholder={'Placeholder text'}
                placeholderTextColor="#798293"
                onChangeText={text => {
                  setAccountH(text);
                }}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={{marginVertical: 10}}>
            <Text style={styles.accountNumber}>Account Number *</Text>
            <View
              style={[
                styles.forminputView,
                {borderColor: accountN ? '#000' : '#F2F3F5'},
              ]}>
              {!accountN ? (
                <EditProfileAccountNumberIcon style={styles.userIcon} />
              ) : (
                <EditProfileAccountNumberHighLightIcon
                  style={styles.userIcon}
                />
              )}
              <FormInput
                placeholder={'Placeholder text'}
                placeholderTextColor="#798293"
                onChangeText={text => {
                  setAccountN(text);
                }}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.accountNumber}>Routing Number *</Text>
            <View
              style={[
                styles.forminputView,
                {borderColor: Rnumber ? '#000' : '#F2F3F5'},
              ]}>
              {!Rnumber ? (
                <EditProfileAccountRoutingNumberIcon style={styles.userIcon} />
              ) : (
                <EditProfileRoutingHighLightIcon style={styles.userIcon} />
              )}
              <FormInput
                placeholder={'Placeholder text'}
                placeholderTextColor="#798293"
                onChangeText={text => {
                  setRNumber(text);
                }}
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
      </ScrollView>
        <Button
          text={'Update Detail'}
          color={'#FFFFFF'}
          fontSize={15}
          height={50}
          width={'80%'}
        marginTop={50}
        marginBottom={10}
          backgroundColor={
            Tnumber && accountN && accountN && Rnumber ? '#4AB5E3' : '#9BA2AE'
          }
          disabled={Tnumber && accountN && accountN && Rnumber ? false : true}
        />
    </SafeAreaView>
  );
};
export default EditDetails;
