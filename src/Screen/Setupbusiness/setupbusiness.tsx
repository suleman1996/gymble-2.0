import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, ScrollView } from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import Button from '../../Components/Button/button';
import { BusinessName, AddressIcon, CityIcon, StateIcon, ZipCodeIcon, PhonenmberIcon } from '../../Svgs/setupBusiness/Icons';
import styles from './style';
import { SignUp_Third } from '../../utilis/validation';
import { Signup_api } from '../../utilis/Api/Api_controller';
import Loader from '../../utilis/Loader';
import Toast from 'react-native-simple-toast';

const SetupBusiness: React.FC<any> = ({ navigation, route }) => {
  var data = route.params;
  const [bussinessName, setBussinessName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  const Submit = async () => {
    let validate = SignUp_Third({ bussinessName, address, city, state, zipCode, phone });
    if (validate.valid == false) {
      setErrors(validate.errors);
      console.log(validate.errors);

    } else {
      setErrors('');
      let body = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm_password: data.password,
        account_type: data.accountType,
        business_name: bussinessName,
        state: state,
        city: city,
        street1: address,
        postcode: zipCode,
        contact_number: phone
      };
      setLoading(true);
      let response = await Signup_api(body);
      if (response !== "Error" && response?.data?.success) {
        Toast.show(response?.data?.message, Toast.LONG);
        navigation.navigate('login')
      }
      setLoading(false);
    }
  }
  return (
    <SafeAreaView style={styles.safeareaview}>
      <Loader animating={loading} />
      <View style={styles.view}>
        <ScrollView>
          <Image source={require('../../Assets/Login/Logo.png')} style={styles.logo} />
          <Text style={styles.text}>Setup New Business</Text>
          <Text style={styles.text1}>
            Let’s setup new business. Please fillup the details below.
          </Text>

          <FormInput
            placeholder="Business Name"
            title="Business Name"
            leftChild={<BusinessName style={styles.userIcon} />}
            onChangeText={(text) => { setErrors(''), setBussinessName(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: bussinessName ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={bussinessName}
            error={errors === "Please Enter Business Name" ? "Please Enter Business Name" : null || errors === "Business Name must have atleast 2 characters" ? "Business Name must have atleast 2 characters" : null}
          />
          <FormInput
            placeholder="Address"
            title="Address"
            leftChild={<AddressIcon style={styles.userIcon} />}
            onChangeText={text => { setErrors(""), setAddress(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: address ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={address}
            error={errors === "Please Enter address" ? "Please Enter Address" : null || errors === "address must have atleast 8 characters" ? "Address must have atleast 8 characters" : null}
          />
          <FormInput
            placeholder="City"
            title="City"
            leftChild={<CityIcon style={styles.userIcon} />}
            onChangeText={text => { setErrors(''), setCity(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: city ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={city}
            error={errors === "Please Enter city" ? "Please Enter City" : null}
          />
          <FormInput
            placeholder="State"
            title="State"
            leftChild={<StateIcon style={styles.userIcon} />}
            onChangeText={text => { setErrors(''), setState(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: state ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={state}
            error={errors === "Please Enter state" ? "Please Enter State" : null}
          />
          <FormInput
            placeholder="Zip Code"
            title="Zip Code"
            keyboardType="number-pad"
            leftChild={<ZipCodeIcon style={styles.userIcon} />}
            onChangeText={text => { setErrors(''), setZipCode(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            maxLength={6}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: zipCode ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={zipCode}
            error={errors === "Please Enter zipCode" ? "Please Enter Zipcode" : null || errors === "The zip code must be between 5 and 6 digits" ? "The Zip code must be between 5 and 6 digits" : null}
          />

          <FormInput
            placeholder="Phone Number"
            title="Phone Number"
            maxLength={10}
            keyboardType="number-pad"
            leftChild={<PhonenmberIcon style={styles.userIcon} />}
            onChangeText={text => { setErrors(''), setPhone(text) }}
            style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black', flex: 1 }}
            containerStyle={{ flex: 1 }}
            textInputContainerStyle={[styles.forminputView, { flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: phone ? '#000' : '#F2F3F5' }]}
            placeholderTextColor={"#798293"}
            value={phone}
            error={errors === "Please Enter phone" ? "Please Enter Phone Number" : null || errors === "Your Phone Number must be 10 digits" ? "Your Phone Number must be 10 digits" : null}
          />

          <Button onPress={Submit} text={'Continue'} color={'#fff'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={'100%'} borderWidth={1} marginTop={30} marginBottom={10} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SetupBusiness;