import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {FormInput} from '../../utilis/Text_input';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
  ManageCardIcon,
  UserIcon,
  UserHighlightIcon,
  AddCardIcon,
  AddCardHighLightIcon,
  AddCardExpiryIcon,
  AddCardExpiryHighLightIcon,
  AddCardCVVIcon,
  AddCardCVVHighLightIcon,
} from '../../Svgs/Profile/ProfileVectors';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Button from '../../Components/Button/button';
import styles from './style';
const AddCard: React.FC<any> = () => {
  const [Cfocus, setCFocus] = useState(false);
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [CVVfocus, setCVVFocus] = useState(false);
  const navigation = useNavigation();

  const onChangeHandler = async () => {
    // navigation.navigate('tab');
    let body = {
      cardHolder: Cfocus,
      cardNumber: Nfocus,
      expiry: Efocus,
      cvv: CVVfocus,
    };
    // const res = await Login_api(body);
    // console.log(res);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Add Card</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <ScrollView>
        <View
          style={[
            styles.card,
            {
              backgroundColor:
                Cfocus && Nfocus && Efocus && CVVfocus ? '#4AB5E3' : '#B7E1F4',
            },
          ]}>
          <View>
            <View style={styles.cardContainer}>
              <Text style={styles.cardText}>Visa</Text>
              <ManageCardIcon style={styles.cardIcon} />
            </View>
            <View style={styles.cardNumber}>
              <Text style={styles.number}>xxxx xxxx xxxx 5476</Text>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.cardHolder}>Card Holder</Text>
            <Text style={styles.expDate}>Exp Date</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.cardHolderName}>Trey Phills</Text>
            <Text style={styles.cardText}>20/25</Text>
          </View>
        </View>

        <Text style={styles.text2}>Card Holder</Text>
        <View
          style={[
            styles.forminputView,
            {borderColor: Cfocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Cfocus ? (
            <UserIcon style={styles.userIcon} />
          ) : (
            <UserHighlightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setCFocus(text);
            }}
            style={{
              height: 50,
              borderRadius: 10,
              fontSize: 15,
              color: 'black',
            }}
          />
        </View>
        <Text style={styles.text3}>Card Number</Text>
        <View
          style={[
            styles.forminputView2,
            {borderColor: Nfocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Nfocus ? (
            <AddCardIcon style={styles.userIcon} />
          ) : (
            <AddCardHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setNFocus(text);
            }}
            style={{
              height: 50,
              borderRadius: 10,
              fontSize: 15,
              color: 'black',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View>
            <Text style={styles.text3}>Expiry</Text>
            <View
              style={[
                styles.forminputView3,
                {borderColor: Efocus ? '#000' : '#F2F3F5'},
              ]}>
              {!Efocus ? (
                <AddCardExpiryIcon style={styles.userIcon} />
              ) : (
                <AddCardExpiryHighLightIcon style={styles.userIcon} />
              )}
              <FormInput
                placeholder={'Add date'}
                placeholderTextColor="#798293"
                onChangeText={text => {
                  setEFocus(text);
                }}
                style={{
                  height: 50,
                  borderRadius: 10,
                  fontSize: 15,
                  color: 'black',
                }}
              />
            </View>
          </View>

          <View>
            <Text style={styles.text3}>CVV</Text>
            <View
              style={[
                styles.forminputView4,
                {borderColor: CVVfocus ? '#000' : '#F2F3F5'},
              ]}>
              {!CVVfocus ? (
                <AddCardCVVIcon style={styles.userIcon} />
              ) : (
                <AddCardCVVHighLightIcon style={styles.userIcon} />
              )}
              <FormInput
                placeholder={'Add CVV'}
                placeholderTextColor="#798293"
                secureTextEntry
                onChangeText={text => {
                  setCVVFocus(text);
                }}
                style={{
                  height: 50,
                  borderRadius: 10,
                  fontSize: 15,
                  color: 'black',
                }}
              />
            </View>
          </View>
        </View>

        <Button
          text={'Update Detail'}
          color={'#FFFFFF'}
          fontSize={15}
          height={50}
          width={'80%'}
          marginTop={100}
          backgroundColor={
            Cfocus && Nfocus && Efocus && CVVfocus ? '#4AB5E3' : '#9BA2AE'
          }
          disabled={Cfocus && Nfocus && Efocus && CVVfocus ? false : true}
          marginBottom={10}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCard;
