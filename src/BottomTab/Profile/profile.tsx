import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {
  ProfileCameraIcon,
  ProfileCardIcon,
  ProfileChangePasswordIcon,
  ProfileEmailIcon,
  ProfileLogoutIcon,
  ProfileNotificationIcon,
  ProfileSubscriptionIcon,
  ProfileWalletIcon,
  ProfileBackIcon,
  ProfileForwardIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import RBSheet from 'react-native-raw-bottom-sheet';
import LogoutButtomSheet from '../../Components/LogoutButtomSheet/LogoutButtomSheet';
import {useNavigation} from '@react-navigation/native';

const Profile: React.FC<any> = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            height: 30,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <ProfileBackIcon
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Profile</Text>
          <ProfileDotsIcon style={styles.dotsIcon} />
        </View>

        <View>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require('./images/profile.png')}
            />
            <ProfileCameraIcon style={styles.cameraIcon} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Text style={styles.profileName}>Mrh Raju</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('EditProfile')}>
                <ProfileEmailIcon style={styles.emailIcon} />
                <Text style={styles.profileEdit}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.email}>hello:abcdefg@gmail.com</Text>
          </View>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate('payment')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ProfileWalletIcon style={styles.wallet} />
              <Text style={styles.optionName}>Payments</Text>
            </View>
            <View>
              <ProfileForwardIcon style={styles.forward} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate('subscription')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ProfileSubscriptionIcon style={styles.wallet} />
              <Text style={styles.optionName}>Subscription</Text>
            </View>
            <View>
              <ProfileForwardIcon style={styles.forward} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate('ManageCards')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ProfileCardIcon style={styles.wallet} />
              <Text style={styles.optionName}>Manage Cards</Text>
            </View>
            <View>
              <ProfileForwardIcon style={styles.forward} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate('notification')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ProfileNotificationIcon style={styles.wallet} />
              <Text style={styles.optionName}>Notification Settings</Text>
            </View>
            <View>
              <ProfileForwardIcon style={styles.forward} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate('changePass')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ProfileChangePasswordIcon style={styles.wallet} />
              <Text style={styles.optionName}>Change Password</Text>
            </View>
            <View>
              <ProfileForwardIcon style={styles.forward} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logout} onPress={rbsheetOpen}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
                marginBottom: 10,
              }}>
              <ProfileLogoutIcon style={styles.wallet} />
              <Text style={{color: '#798293', fontSize: 15}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <RBSheet
            ref={refRBSheet}
            keyboardAvoidingViewEnabled={true}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
              draggableIcon: {backgroundColor: '#D7DADF'},
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#FFFFFF',
                height: 273,
              },
            }}>
            <LogoutButtomSheet
              onPress={() => refRBSheet.current.close()}
              cancel={() => refRBSheet.current.close()}
            />
          </RBSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
