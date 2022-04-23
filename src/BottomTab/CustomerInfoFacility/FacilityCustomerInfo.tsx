import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  LeftarrowIcon,
  WhitedotIcon,
  DocIcon,
  ChatIcon,
  SimplPremiumIcon,
} from '../../Svgs/Customerinfo/Icons';
import styles from './style';
const FacilityCustomerInfo: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.headerView}>
        <LeftarrowIcon
          style={styles.arrowicon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Customer Information</Text>
        <WhitedotIcon style={styles.doticon} />
      </View>

      <View style={styles.view3}>
        <View style={styles.view1}>
          <Image source={require('./pic.png')} style={styles.image} />
          <View>
            <Text style={styles.text1}>Jacob Jones</Text>
            <View style={{flexDirection: 'row'}}>
              <SimplPremiumIcon style={styles.premiumIcon} />
              <Text style={styles.text3}>Premium User</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.view2}>
          <ChatIcon style={styles.chatIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.MainView}>
        <ScrollView>
          <Text style={styles.MainText2}>Customer Information</Text>
          <View style={styles.MainView3}>
            <View style={styles.MainView4}>
              <Text style={styles.MainText3}>Email</Text>
              <Text style={styles.MainText3}>hello.jacobjones@gmail.com</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#F2F3F5',
                marginTop: 10,
                marginHorizontal: 15,
              }}></View>

            <View style={styles.MainView4}>
              <Text style={styles.MainText3}>Phone</Text>
              <Text style={styles.MainText3}>845461111164</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#F2F3F5',
                marginTop: 10,
                marginHorizontal: 15,
              }}></View>

            <View style={styles.MainView4}>
              <Text style={styles.MainText3}>Membership</Text>
              <Text style={styles.MainText3}>Gold Subscription</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#F2F3F5',
                marginTop: 10,
                marginHorizontal: 15,
              }}></View>

            <View style={styles.MainView4}>
              <Text style={styles.MainText4}>Membership</Text>
              <Text style={styles.MainText4}>Paid</Text>
            </View>
          </View>
          <View>
            <Text style={styles.MainText2}>Customer Notes</Text>
            <View style={styles.MainView5}>
              <Text style={styles.MainText5}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
            </View>
            <Text style={styles.MainText2}>My Notes</Text>
            <View style={styles.MainView5}>
              <Text style={styles.MainText5}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </Text>
            </View>
            <Text style={styles.MainText2}>Attachments</Text>
            <View style={styles.LastView}>
              <DocIcon style={styles.docicon} />
              <TouchableOpacity>
                <Text style={styles.doctext}>Gymble Documents.doc</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FacilityCustomerInfo;
