import React, {useState,useEffect} from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, Alert } from 'react-native';
import {FormInput} from '../../utilis/Text_input';
import Button from '../../Components/Button/button';
import { BusinessName, AddressIcon, CityIcon, StateIcon, ZipCodeIcon, PhonenmberIcon} from '../../Svgs/setupBusiness/Icons';
import styles from './style';
import { SignUp_Third } from '../../utilis/validation';
import { Signup_api } from '../../utilis/Api/Api_controller';
import Toast from 'react-native-simple-toast';

const SetupBusiness: React.FC<any> = ({navigation,route}) => {  
  var Data=route.params;

  useEffect(()=>{
    console.log(Data)
  })

  
  const [Bname, setBname] = useState('');
  const [Afocus, setAFocus] = useState('');
  const [Cfocus, setCFocus] = useState('');
  const [Sfocus, setSFocus] = useState('');
  const [Zfocus, setZFocus] = useState('');
  const [Pfocus, setPFocus] = useState('');
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

const Submit=async()=>{
  let validate = SignUp_Third(Bname, Afocus, Cfocus, Sfocus, Zfocus, Pfocus);
  if (validate.valid == false) {
    setErrors(validate.errors);
  } else {
    setErrors('');
    let body = {
        name: Data.res.name,
        email: Data.res.email,
        password: Data.res.password,
        confirm_password: Data.res.password,
        account_type:Data.accountType,
        business_name: Bname,
        state: Sfocus,
        city: Cfocus,
        street1: Afocus,
        postcode: Zfocus,
        contact_number : Pfocus
      };      
      setLoading(true);
      let res = await Signup_api(body);
      console.log(res.data)
      if(res.data){
        Toast.show('Sign Up successfully.Email verification link has been sent to your email.', Toast.LONG);
        navigation.navigate('login')
      }  
  }
}
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <ScrollView>
          <Image
            source={require('../../Assets/Login/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Setup New Business</Text>
          <Text style={styles.text1}>
            Let’s setup new business. Please fillup the details below.
          </Text>

          <Text style={styles.text2}>Business Name</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Bname ? '#000' : '#F2F3F5'},
            ]}>
            <BusinessName style={styles.userIcon} />
            <FormInput
              placeholder={'Business Name'}
              placeholderTextColor="#798293"
              onChangeText={(text) => {setErrors(''),setBname(text)}}
              error={errors === "Please Enter Business Name" ? "Please Enter Business Name" : null || errors === "Business Name must have atleast 3 characters" ? "Must have atleast 3 characters":null }
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text2}>Address</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Afocus ? '#000' : '#F2F3F5'},
            ]}>
            <AddressIcon style={styles.userIcon} />
            <FormInput
              placeholder={'Address'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(""),setAFocus(text)}}
              error={errors === "Please Enter Address" ? "Please Enter Address" : null || errors === "Address must have atleast 8 characters"?"Address must have atleast 8 characters":null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text2}>City</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Cfocus ? '#000' : '#F2F3F5'},
            ]}>
            <CityIcon style={styles.userIcon} />
            <FormInput
              placeholder={'City'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(''),setCFocus(text)}}
              error={errors === "Please Enter City" ? "Please Enter City" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text2}>State</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Sfocus ? '#000' : '#F2F3F5'},
            ]}>
            <StateIcon style={styles.userIcon} />
            <FormInput
              placeholder={'State'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(''),setSFocus(text)}}
              error={errors === "Please Enter State" ? "Please Enter State" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text2}>Zip Code</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Zfocus ? '#000' : '#F2F3F5'},
            ]}>
            <ZipCodeIcon style={styles.userIcon} />
            <FormInput
              placeholder={'Zip Code'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(''),setZFocus(text)}}
              error={errors === "Please Enter Zipcode" ? "Please Enter Zipcode" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text2}>Phone Number</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Pfocus ? '#000' : '#F2F3F5'},
            ]}>
            <PhonenmberIcon style={styles.userIcon} />
            <FormInput
              placeholder={'Phone Number'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(''),setPFocus(text)}}
              error={errors === "Please Enter PhoneNumber" ? "Please Enter PhoneNumber" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>
          <Button onPress={Submit} text={'Continue'} color={'#fff'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={'100%'} borderWidth={1} marginTop={30} marginBottom={10}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SetupBusiness;
