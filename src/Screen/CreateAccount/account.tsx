import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import { UserIcon, LockIcon, UserHighlightIcon, LockHighlightIcon } from '../../Svgs/Login/IconSvg';
import EyeIcon from '../../Svgs/Login/EyeSvg';
import EmailIcon from '../../Svgs/Createaccount/letterSvg';
import EmailHighlightIcon from '../../Svgs/Createaccount/LetterHighlightSVG';
import HideEyeIcon from '../../Svgs/createPassword/hideEyeSvg';
import Button from '../../Components/Button/button';
import { Applebutton, FBbutton, Googlebutton } from '../../Components/SocialButtons/socialButton';
import styles from './style';
import { Signup_validation } from '../../utilis/validation';
const CreateAccount: React.FC<any> = ({ navigation, route }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  const onChangeHandler = async () => {
    let validate = Signup_validation({ name, email, password });
    if (validate.valid == false) {
      setErrors(validate.errors);

    } else {
      setErrors('');
      navigation.navigate("accounttype", { name, email, password })
    }
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
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
              { borderColor: name ? '#000' : '#F2F3F5' },
            ]}>
            {!name ? (
              <UserIcon style={styles.userIcon} />
            ) : (
              <UserHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Type full name'}
              placeholderTextColor="#798293"
              onChangeText={text => { setErrors(""), setName(text) }}
              error={errors === "Please Enter Your Name" ? "Please Enter Your Name" : null || errors === "Name must should contain 3 letters" ? "Name must should contain 3 letters" : null}
              style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
              value={name}
            />
          </View>

          <Text style={styles.textemail}>Email</Text>
          <View
            style={[
              styles.forminputView,
              { borderColor: email ? '#000' : '#F2F3F5' },
            ]}>
            {!email ? (
              <EmailIcon style={styles.userIcon} />
            ) : (
              <EmailHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter email'}
              placeholderTextColor="#798293"
              onChangeText={text => { setErrors(" "), setEmail(text) }}
              error={errors === "Please Enter Your Email" ? "Please Enter Your Email" : null || errors === "Email format is invalid" ? "Email format is invalid" : null}
              style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
              value={email}
            />
          </View>

          <Text style={styles.text3}>Password</Text>
          <View
            style={[
              styles.forminputView2,
              { borderColor: password ? '#000' : '#F2F3F5' },
            ]}>
            {!password ? (
              <LockIcon style={styles.userIcon} />
            ) : (
              <LockHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter password'}
              placeholderTextColor="#798293"
              secureTextEntry={passwordVisibility}
              onChangeText={text => { setErrors(" "), setPassword(text) }}
              error={errors === "Please Enter Your Password" ? "Please Enter Your Password" : null || errors === "Password must should contain 6 digits" ? "Password must should contain 6 digits" : null || errors === "Password Does not have Number" ? "Password must be a combination of Number" : null || errors === "Password Does not have UpperCase" ? "Password must be a combination UpperCase Letters" : null || errors === "Password Does not have LowerCase" ? "Password must be a combination of small, capital letters, numbers and special characters" : null || errors === "Password Does not have Special Character" ? "Password must be a combination of Special Characters" : null}
              style={{ height: 50, borderRadius: 10, fontSize: 15, color: 'black' }}
              maxLength={12}
              value={password}
            />
            {passwordVisibility ? (
              <HideEyeIcon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            ) : (
              <EyeIcon
                style={styles.eyeIcon}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              />
            )
            }
          </View>

          <Button
            onPress={onChangeHandler}
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
