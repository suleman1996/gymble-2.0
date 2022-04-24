import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import { EditProfileEmailIcon, EditProfileEmailHighLightIcon } from '../../Svgs/Profile/ProfileVectors';
import { Login_api } from '../../utilis/Api/Api_controller';
import { LockIcon, LockHighlightIcon } from '../../Svgs/Login/IconSvg';
import EyeIcon from '../../Svgs/Login/EyeSvg';
import HideEyeIcon from '../../Svgs/createPassword/hideEyeSvg';
import Button from '../../Components/Button/button';
import { loginValidation } from '../../utilis/validation';
import Toast from 'react-native-simple-toast';
import Loader from '../../utilis/Loader';
import { save_data } from '../../utilis/AsyncStorage/Controller';
import { Applebutton, FBbutton, Googlebutton } from '../../Components/SocialButtons/socialButton';
import styles from './style';

const Login: React.FC<any> = ({ navigation }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [Lfocus, setLFocus] = useState('kodextech9@gmail.com');
  const [Pfocus, setPFocus] = useState('Test@123');
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);


  const onlogin = async () => {
    let validate = loginValidation(Lfocus, Pfocus);
    if (validate.valid == false) {
      setErrors(validate.errors);
    } else {
      setErrors('');
      let body = {
        username: Lfocus,
        password: Pfocus,
        app_type: "mobile"
      };
      setLoading(true);
      let res = await Login_api(body);
      if (res?.data?.success === true) {
        Toast.show('SignIn Successfuly', Toast.LONG);
        await save_data('@TOKEN', res?.data?.token);
        navigation.navigate('tab')
      } else {
        Toast.show('Invalid Email Address or Password', Toast.LONG);
      }
      setLoading(false);
    }
  };


  return (
    <SafeAreaView style={styles.safeareaview}>
      <Loader animating={loading} />
      <View style={styles.view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require('../../Assets/Login/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Welcome to Gymble Business</Text>
          <Text style={styles.text1}>Let’s get you right real quick</Text>
          <Text style={styles.text2}>Email</Text>
          <View
            style={[
              styles.forminputView,
              { borderColor: Lfocus ? '#000' : '#F2F3F5' },
            ]}>
            {!Lfocus ? (
              <EditProfileEmailIcon style={styles.userIcon} />
            ) : (
              <EditProfileEmailHighLightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter Email'}
              placeholderTextColor="#798293"
              onChangeText={text => { setErrors(""), setLFocus(text) }}
              error={errors === "Please Enter Your Email" ? "Please Enter Your Email" : null || errors === "Email format is invalid" ? "Email format is invalid" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
              value={Lfocus}
            />
          </View>

          <Text style={styles.text3}>Password</Text>
          <View
            style={[
              styles.forminputView2,
              { borderColor: Pfocus ? '#000' : '#F2F3F5' },
            ]}>
            {!Pfocus ? (
              <LockIcon style={styles.userIcon} />
            ) : (
              <LockHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter password'}
              placeholderTextColor="#798293"
              secureTextEntry={passwordVisibility}
              onChangeText={text => { setErrors(""), setPFocus(text) }}
              error={errors === "Please Enter Your Password" ? "Please Enter Your Password" : null || errors === "Password must should contain 6 digits" ? "Password must should contain 6 digits" : null}
              style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
              value={Pfocus}
            />
            {passwordVisibility ? (
              <EyeIcon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            ) : (
              <HideEyeIcon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            )}
          </View>

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate('resetPassword')}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>

          <Button
            text={'Login'}
            color={'#4AB5E3'}
            fontSize={15}
            height={50}
            width={'100%'}
            borderWidth={1}
            marginTop={50}
            onPress={onlogin}
          />

          <View style={styles.lineView}>
            <View style={styles.leftLine} />
            <Text style={styles.or}>Or</Text>
            <View style={styles.rightLine} />
          </View>

          <View style={styles.socialview}>
            <FBbutton height={50} width={104} borderWidth={1} />
            <Googlebutton height={50} width={104} borderWidth={1} />
            <Applebutton height={50} width={104} borderWidth={1} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footertext}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('account')}>
              <Text style={styles.footertext2}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;
