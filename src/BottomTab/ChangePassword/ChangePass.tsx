import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import styles from './styles';
import {LockIcon, LockHighlightIcon} from '../../Svgs/Login/IconSvg';
import {useNavigation} from '@react-navigation/native';
import {FormInput} from '../../utilis/Text_input';
import {Update_Password} from '../../utilis/Api/Api_controller';
import Button from '../../Components/Button/button';
import {passwordValidation} from '../../utilis/validation';
import Toast from 'react-native-simple-toast';
import Loader from '../../utilis/Loader';
import {save_data} from '../../utilis/AsyncStorage/Controller';
const ChangePass: React.FC<any> = () => {
  const navigation = useNavigation();
  // const [Pfocus, setPFocus] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [passwordVisibility2, setPasswordVisibility2] = useState(true);
  const [current, setCurrent] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const onChangeHandler = async () => {
    let validate = passwordValidation(newPass, confirm);
    if (validate.valid == false) {
      setErrors(validate.errors);
    } else {
      setErrors('');
      let body = {
        password: current,
        new_password: newPass,
        confirm_password: confirm,
      };
      setLoading(true);
      let res = await Update_Password(body);
      // console.log("hamara error==>",res);
      setLoading(false);
      if (res.data?.success === true) {
        setLoading(false);
        Toast.show(res.data.message, Toast.LONG);
        await save_data('TOKEN', res.data.token);
        //  navigation.navigate('tab');
      } else {
        setLoading(false);
        //  Toast.show('Invalid email address or password', Toast.LONG);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loader animating={loading} />
      <ScrollView>
        <View style={styles.view1}>
          <ProfileBackIcon
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Change Password</Text>
          <ProfileDotsIcon style={styles.dotsIcon} />
        </View>
        <Text style={styles.text3}>Current Password</Text>
        <View style={[styles.forminputView2]}>
          {passwordVisibility ? (
            <LockIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            />
          ) : (
            <LockHighlightIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility(!passwordVisibility)}
            />
          )}

          <FormInput
            placeholder={'Enter password'}
            placeholderTextColor="#798293"
            secureTextEntry={passwordVisibility}
            onChangeText={text => {
              setCurrent(text);
            }}
            style={styles.view2}
          />
        </View>
        <Text style={styles.text3}>New Password</Text>
        <View style={[styles.forminputView2]}>
          {passwordVisibility1 ? (
            <LockIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility1(!passwordVisibility1)}
            />
          ) : (
            <LockHighlightIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility1(!passwordVisibility1)}
            />
          )}

          <FormInput
            placeholder={'Enter password'}
            placeholderTextColor="#798293"
            secureTextEntry={passwordVisibility1}
            onChangeText={text => {
              setNewPass(text);
            }}
            style={styles.view2}
          />
        </View>
        <Text style={styles.text3}>Confirm Password</Text>
        <View style={[styles.forminputView2]}>
          {passwordVisibility2 ? (
            <LockIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility2(!passwordVisibility2)}
            />
          ) : (
            <LockHighlightIcon
              style={styles.userIcon}
              onPress={() => setPasswordVisibility2(!passwordVisibility2)}
            />
          )}

          <FormInput
            placeholder={'Enter password'}
            placeholderTextColor="#798293"
            secureTextEntry={passwordVisibility2}
            onChangeText={text => {
              setConfirm(text);
            }}
            style={styles.view2}
          />
        </View>
      </ScrollView>
      <Button
        text={'Change Password'}
        color={'#fff'}
        fontSize={15}
        height={50}
        width={'80%'}
        marginTop={50}
        backgroundColor={current && newPass && confirm ? '#4AB5E3' : '#9BA2AE'}
        marginBottom={10}
        disabled={current && newPass && confirm ? false : true}
        onPress={onChangeHandler}
      />
    </SafeAreaView>
  );
};
export default ChangePass;
