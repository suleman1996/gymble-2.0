import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {FormInput} from '../../utilis/Text_input';
import {
  UserIcon,
  LockIcon,
  UserHighlightIcon,
  LockHighlightIcon,
} from '../../Svgs/Login/IconSvg';
import EyeIcon from '../../Svgs/Login/EyeSvg';
import EmailIcon from '../../Svgs/Createaccount/letterSvg';
import EmailHighlightIcon from '../../Svgs/Createaccount/LetterHighlightSVG';
import HideEyeIcon from '../../Svgs/createPassword/hideEyeSvg';
import Button from '../../Components/Button/button';
import {
  Applebutton,
  FBbutton,
  Googlebutton,
} from '../../Components/SocialButtons/socialButton';
import styles from './style';
import {Signup_api} from '../../utilis/Api/Api_controller';
import {Signup_validation} from '../../utilis/validation';
import Toast from 'react-native-simple-toast';
import Loader from '../../utilis/Loader';
import {save_data} from '../../utilis/AsyncStorage/Controller';
const CreateAccount: React.FC<any> = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [Lfocus, setLFocus] = useState('');
  const [Pfocus, setPFocus] = useState('');
  const [Efocus, setEFocus] = useState('');
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  
  const onChangeHandler = async () => {
    // let validate = Signup_validation(firstname, lastname, Lfocus, Pfocus);
    let validate = Signup_validation(Lfocus,Efocus,Pfocus);
    // console.log(validate);
    if (validate.valid == false) {
      setErrors(validate.errors);
    } else {
      setErrors('');
      let body = {
        first_name: firstname,
        last_name: lastname,
        email: Efocus,
        password: Pfocus,
      };
      // setLoading(true);
      let res = await Signup_api(body);
      console.log(res.data)
      // console.log('hamara error==>', res);
      // setLoading(false);
      // if (res.data?.success === true) {
      //   setLoading(false);
      //   console.log(res.data)
      //   Toast.show(res.data.message, Toast.LONG);
      //   await save_data('TOKEN', res.data.token);
      //   // navigation.navigate('accounttype');
      // } else {
      //   setLoading(false);
      //   Toast.show('Invalid email address or password', Toast.LONG);
      // }
    }
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <Loader animating={loading} />
      <View style={styles.view}>
        <ScrollView>
          <Image
            source={require('../../Assets/Login/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Welcome to Gymble Business</Text>
          <Text style={styles.text1}>Let’s get you right real quick</Text>

          <Text style={styles.text2}>Full Name</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Lfocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Lfocus ? (
              <UserIcon style={styles.userIcon} />
            ) : (
              <UserHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Type full name'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(""),setLFocus(text)}}
              error={errors === "Please Enter Your Name" ? "Please Enter Your Name" : null || errors === "Name must should contain 3 letters" ? "Name must should contain 3 letters" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.textemail}>Email</Text>
          <View
            style={[
              styles.forminputView,
              {borderColor: Efocus ? '#000' : '#F2F3F5'},
            ]}>
            {!Efocus ? (
              <EmailIcon style={styles.userIcon} />
            ) : (
              <EmailHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter email'}
              placeholderTextColor="#798293"
              onChangeText={text => {setErrors(" "),setEFocus(text)}}
              error={errors === "Please Enter Your Email" ? "Please Enter Your Email" : null || errors === "Email format is invalid" ? "Email format is invalid" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
            />
          </View>

          <Text style={styles.text3}>Password</Text>
          <View
            style={[
              styles.forminputView2,
              {borderColor: Pfocus ? '#000' : '#F2F3F5'},
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
              onChangeText={text => {setErrors(" "),setPFocus(text)}}
              error={errors === "Please Enter Your Password" ? "Please Enter Your Password" : null || errors === "Password must should contain 6 digits" ? "Password must should contain 6 digits" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
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

          <Button
            onPress={onChangeHandler}
            onPressIn={() => {
              // const arr = Lfocus.split(' ');
              // setFirstName(arr[0]);
              // setLastName(arr[1]);
              // console.log(arr[0], arr[1]);
              // console.log(Lfocus);
              let str = Lfocus;
              let substrings = str.split(' ');
              setFirstName(substrings[0]);
              setLastName(substrings[1]);
            }}
            text={'Create Account'}
            color={'#4AB5E3'}
            fontSize={15}
            height={50}
            width={'100%'}
            borderWidth={1}
            marginTop={30}
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
            <Text style={styles.footertext}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.footertext2}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default CreateAccount;
