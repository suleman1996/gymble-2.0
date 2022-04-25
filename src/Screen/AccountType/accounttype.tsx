import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import Button from '../../Components/Button/button';
import { UserIcon, UserHighlightIcon } from '../../Svgs/Login/IconSvg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { DownarrowIcon } from '../../BottomTab/Home/Svgs/Icons';
import AccountBottomsheet from './component/Bottomsheet';
import styles from './style';

const AccountType: React.FC<any> = ({ navigation, route }) => {
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const [type, setType] = useState('Select Account Type');
  const [showError, setShowError] = useState(false)

  const accountType = [
    {
      text: 'Business Facility',
    },
    {
      text: 'Service Provider',
    },
  ];

  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view}>
        <Image
          source={require('../../Assets/Login/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Select Account Type</Text>
        <Text style={styles.text1}>
          Select the type of account that best fits your business needs
        </Text>
        <Text style={styles.text2}>Account Type</Text>
        <View
          style={[
            styles.forminputView,
            { borderColor: '#F2F3F5' },
          ]}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={rbsheetOpen}>
            {type == 'Select Account Type' ? (
              <UserIcon style={styles.userIcon} />
            ) : (
              <UserHighlightIcon style={styles.userIcon} />
            )}
            <Text style={{ color: '#08101F', alignSelf: 'center' }}>{type}</Text>
          </TouchableOpacity>
          <DownarrowIcon style={styles.downarrow} onPress={rbsheetOpen} />
        </View>
        {showError && type == 'Select Account Type' &&
          <Text style={{ color: 'red', margin: 1 }}>Please select the Account Type</Text>
        }

        <RBSheet
          ref={refRBSheet}
          keyboardAvoidingViewEnabled={true}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: { backgroundColor: 'rgba(0,0,0,0.4)' },
            draggableIcon: { backgroundColor: '#D7DADF' },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#FFFFFF',
              height: 198,
            },
          }}>
          <AccountBottomsheet
            onPress={() => refRBSheet.current.close()}
            data={accountType}
            setDataa={setType}
            closeCenter={() => refRBSheet.current.close()}
          />
        </RBSheet>

        <Button
          onPress={() => {
            if (type == 'Select Account Type') {
              setShowError(true)
            } else {
              navigation.navigate('setupbusiness', { ...route.params, accountType: type })
            }
          }}
          text={'Continue'}
          color={'#fff'}
          backgroundColor={'#4AB5E3'}
          fontSize={15}
          height={50}
          width={'100%'}
          borderWidth={1}
          marginTop={30}
        />
      </View>
    </SafeAreaView>
  );
};
export default AccountType;
