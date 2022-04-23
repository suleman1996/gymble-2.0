import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import SwitchSelector from 'react-native-switch-selector';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const options = [
  {
    label: 'Recent ',
    value: 'recent',
  },
  {
    label: 'Previous',
    value: 'previous',
  },
];
const NotificationList: React.FC<any> = () => {
  const navigation = useNavigation();
  const [data, setData] = useState('recent');
  const recent = [
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: 'Just Now',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
  ];
  const previous = [
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: 'Just Now',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      comment: 'Checkout more about the booking',
      text: 'New Booking',
      status: '1 min ago',
    },
  ];

  const renderRecent = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={item.image} />
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: '#08101F',
                  marginHorizontal: 20,
                  fontWeight: 'bold',
                }}>
                {item.text}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#798293',
                  marginHorizontal: 20,
                }}>
                {item.comment}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#798293',
              marginHorizontal: 12,
              fontWeight: '400',
            }}>
            {item.status}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F2F3F5',
            marginTop: 15,
            marginHorizontal: 15,
          }}></View>
      </>
    );
  };
  const renderPrevious = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image source={item.image} />
            <View>
              <Text
                style={{
                  fontSize: 15,
                  color: '#798293',
                  marginHorizontal: 20,
                  fontWeight: 'bold',
                }}>
                {item.text}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#798293',
                  marginHorizontal: 20,
                }}>
                {item.comment}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#798293',
              marginHorizontal: 12,
              fontWeight: '400',
            }}>
            {item.status}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#F2F3F5',
            marginTop: 15,
            marginHorizontal: 15,
          }}></View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Notifications</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <View style={{marginHorizontal: 10, marginVertical: 20}}>
        <SwitchSelector
          initial={0}
          textColor={'#000'}
          selectedColor={'#000'}
          buttonColor={'#FFFFFF'}
          borderColor={'#F2F3F5'}
          hasPadding
          options={options}
          fontSize={12}
          backgroundColor={'#F2F3F5'}
          onPress={value => {
            setData(value);
          }}
        />
      </View>

      {data === 'recent' ? (
        <>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.text2}>24 notifications</Text>
            <View>
              <TouchableOpacity>
                <Text style={styles.text3}>Mark all as read</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList data={recent} renderItem={renderRecent} />
        </>
      ) : (
        <>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.text2}>Nothing Here</Text>
            <View>
              <Text style={styles.text4}>Mark all as read</Text>
            </View>
          </View>
          <FlatList data={previous} renderItem={renderPrevious} />
        </>
      )}
    </SafeAreaView>
  );
};

export default NotificationList;
