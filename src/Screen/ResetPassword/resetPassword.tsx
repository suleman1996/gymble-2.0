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
import Button from '../../Components/Button/button';
import EmailIcon from '../../Svgs/Createaccount/letterSvg';
import EmailHighlightIcon from '../../Svgs/Createaccount/LetterHighlightSVG';
import ArrowIcon from '../../Svgs/Reset/arrowSvg';
import styles from './style';
import {Reset_Password} from '../../utilis/Api/Api_controller';
const ResetPassword: React.FC<any> = ({navigation}) => {
  const [Efocus, setEFocus] = useState(false);
  const onChangeHandler = async () => {
    navigation.goBack('login');
    let body = {
      email: Efocus,
    };
    const res = await Reset_Password(body);
    console.log(res);
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <ScrollView>
          <TouchableOpacity onPress={onChangeHandler}>
            <ArrowIcon style={styles.arrowicon} />
          </TouchableOpacity>
          <Text style={styles.topText}>Reset password</Text>
          <Text style={styles.detailtext}>
            Enter the email associated with your account{'\n'} and we’ll send
            you instructions to reset your password
          </Text>
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
              placeholder={'Enter your email'}
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
          <Button
            onPress={() => navigation.navigate('resend')}
            text={'Continue'}
            color={Efocus ? '#fff' : '#4AB5E3'}
            backgroundColor={Efocus ? '#4AB5E3' : null}
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
