import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FormInput } from '../../utilis/Text_input';
import Button from '../../Components/Button/button';
import EmailIcon from '../../Svgs/Createaccount/letterSvg';
import EmailHighlightIcon from '../../Svgs/Createaccount/LetterHighlightSVG';
import ArrowIcon from '../../Svgs/Reset/arrowSvg';
import styles from './style';
import { ForgotPassword_api } from '../../utilis/Api/Api_controller';
import Loader from '../../utilis/Loader';
import Toast from 'react-native-simple-toast';
import { forgetPasswordValidation } from '../../utilis/validation';



const ResetPassword: React.FC<any> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false)

  const onPress = async () => {
    let validate = forgetPasswordValidation(email);
    if (validate.valid == false) {
      setErrors(validate.errors);
    } else {
      setErrors('');
      let body = {
        username: email,
        app_type: 'web',
      };
      setLoading(true)
      let response = await ForgotPassword_api(body);
      if (response !== "Error" && response?.data?.success) {
        Toast.show(response?.data?.message, Toast.LONG);
        navigation.navigate('resend')
      }
      setLoading(false)
    }
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <Loader animating={loading} />
      <View style={styles.view}>
        <ScrollView>
          <ArrowIcon style={styles.arrowicon} onPress={() => navigation.navigate('login')} />
          <Text style={styles.topText}>Reset password</Text>
          <Text style={styles.detailtext}>
            Enter the email associated with your account{'\n'} and we’ll send
            you instructions to reset your password
          </Text>

          <Text style={styles.textemail}>Email</Text>
          <View style={[styles.forminputView, { borderColor: email ? '#000' : '#F2F3F5' }]}>
            {!email ? (
              <EmailIcon style={styles.userIcon} />
            ) : (
              <EmailHighlightIcon style={styles.userIcon} />
            )}
            <FormInput
              placeholder={'Enter Email'}
              placeholderTextColor="#798293"
              onChangeText={text => { setErrors(""), setEmail(text) }}
              error={errors === "Please Enter Your Email" ? "Please Enter Your Email" : null}
              style={{
                height: 50,
                borderRadius: 10,
                fontSize: 15,
                color: 'black',
              }}
              value={email}
            />
          </View>

          <Button
            onPress={onPress}
            text={'Continue'}
            color={email ? '#fff' : '#4AB5E3'}
            backgroundColor={email ? '#4AB5E3' : null}
            fontSize={15}
            height={50}
            width={'100%'}
            borderWidth={1}
            marginTop={50}
            marginBottom={10}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ResetPassword;