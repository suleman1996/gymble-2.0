import React from 'react';
import {SafeAreaView, View, Image, Text, Alert} from 'react-native';
import Office from '../Office/office';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Booking from '../Booking/booking';
import MassageScreen from '../Messages/Massages';
import Profile from '../Profile/profile';
import Home from '../Home/home';
import {HomeIcon,OfficeIcon,ProfileIcon,MessageIcon} from '../../Svgs/Bottomtabicons/Icons';

const Tabs: React.FC<any> = ({navigation}) => {

  const tabs = createBottomTabNavigator();

  return (
    <tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 50,
          backgroundColor: '#F8F8F8',
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          borderBottomLeftRadius: 0,
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
        },
      }}
      screenOptions={{headerShown: false}}>
      <tabs.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <HomeIcon
                stroke={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 25,
                  width: 25,
                  color: 'red',
                  alignSelf: 'center',
                  // tintColor: focused ? "#4AB5E3" : "#748c94",
                  zIndex: 1,
                }}
              />
              <Text
                style={{color: focused ? '#4AB5E3' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <tabs.Screen
        name="office"
        component={Office}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <OfficeIcon
                stroke={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 25,
                  width: 25,
                  color: 'red',
                  alignSelf: 'center',
                  // tintColor: focused ? "#4AB5E3" : "#748c94",
                  zIndex: 1,
                }}
              />
              <Text
                style={{color: focused ? '#4AB5E3' : '#748c94', fontSize: 12}}>
                Office
              </Text>
            </View>
          ),
        }}
      />
      <tabs.Screen
        name="booking"
        component={Booking}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../Assets/Icon/Frame.png')}
                resizeMode="contain"
                style={{
                  // width: 56,
                  // height: 56,
                  alignSelf: 'center',
                  // backgroundColor:'red',
                  top: -30,
                  // tintColor: focused ? "#4AB5E3" : "#4AB5E3",
                }}
              />
              <Text
                style={{
                  color: focused ? '#4AB5E3' : '#748c94',
                  fontSize: 12,
                  top: -35,
                  alignSelf: 'center',
                }}>
                Bookings
              </Text>
            </View>
          ),
        }}
      />
      <tabs.Screen
        name="message"
        component={MassageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../Assets/Icon/Chat.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  alignSelf: 'center',
                  tintColor: focused ? '#4AB5E3' : '#748c94',
                }}
              />
              {/* <MessageIcon stroke={focused ? "#4AB5E3":'#798293'} style={{
                                height: 25,
                                width: 25,
                                color: 'red',
                                alignSelf: 'center',
                                // tintColor: focused ? "#4AB5E3" : "#748c94",
                                zIndex: 1,
                            }} /> */}
              <Text
                style={{color: focused ? '#4AB5E3' : '#748c94', fontSize: 12}}>
                Messages
              </Text>
            </View>
          ),
        }}
      />

      <tabs.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <ProfileIcon
                stroke={focused ? '#4AB5E3' : '#798293'}
                style={{
                  height: 25,
                  width: 25,
                  color: 'red',
                  alignSelf: 'center',
                  // tintColor: focused ? "#4AB5E3" : "#748c94",
                  zIndex: 1,
                }}
              />
              <Text
                style={{color: focused ? '#4AB5E3' : '#748c94', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </tabs.Navigator>
  );
};
export default Tabs;
