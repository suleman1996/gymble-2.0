import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
const NotificationScreen: React.FC<any> = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Notification Settings</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>

      <View style={styles.toggleView}>
        <Text style={styles.name}>Push Notifications</Text>
        <View>
          <ToggleSwitch
            isOn={isEnabled1}
            onColor="#4AB5E3"
            offColor="#F2F3F5"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="large"
            onToggle={toggleSwitch1}
          />
        </View>
      </View>
      <View style={styles.view1}>
        <Text style={styles.name}>Email Notifications</Text>
        <View>
          <ToggleSwitch
            isOn={isEnabled2}
            onColor="#4AB5E3"
            offColor="#F2F3F5"
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="large"
            onToggle={toggleSwitch2}
          />
        </View>
      </View>
      <View style={styles.view1}>
        <Text style={styles.name}>SMS Notification</Text>
        <View>
          <ToggleSwitch
            isOn={isEnabled3}
            onColor="#4AB5E3"
            offColor="#F2F3F5"
            size="large"
            onToggle={toggleSwitch3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default NotificationScreen;
