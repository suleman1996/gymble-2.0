import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  PaymentBackIcon,
  PaymentDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import data from './List';
import styles from './style';
const Payment: React.FC<any> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <PaymentBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Payments</Text>
        <PaymentDotsIcon style={styles.dotsIcon} />
      </View>

      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./images/pic.png')} />
            <View style={{marginHorizontal: 15}}>
              <Text style={styles.name}>Mrh Raju</Text>
              <Text style={styles.accountNo}>A/N: *****4395</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditDetails')}>
            <Text style={styles.edit}>Edit Details</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 15,
            marginBottom: 15,
          }}>
          <Text style={{color: '#7D90B2', fontSize: 12}}>Pending Amount:</Text>
          <Text style={{color: '#FFFFFF', fontSize: 20, marginHorizontal: 10}}>
            $50,3455
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={styles.payouts}>Previous Payouts</Text>
          <TouchableOpacity>
            <Text style={styles.showaAll}>Show All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginVertical: 10,
                      borderWidth: 0.5,
                      borderLeftColor: '#fff',
                      borderRightColor: '#fff',
                      borderTopColor: '#fff',
                      borderColor: '#F2F3F5',
                    }}>
                    <View>
                      <Text
                        style={{
                          color: '#08101F',
                          fontSize: 17,
                          fontWeight: '700',
                        }}>
                        {item.Payment}
                      </Text>
                      <Text
                        style={{
                          color: '#41C96E',
                          fontSize: 11,
                          fontWeight: '400',
                        }}>
                        {item.status}
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          color: '#798293',
                          fontSize: 15,
                          fontWeight: '400',
                        }}>
                        Payment ID
                      </Text>
                      <Text
                        style={{
                          color: '#08101F',
                          fontSize: 13,
                          fontWeight: '500',
                          alignSelf: 'center',
                        }}>
                        {item.ID}
                      </Text>
                    </View>

                    <View>
                      <Text
                        style={{
                          color: '#798293',
                          fontSize: 17,
                          fontWeight: '400',
                          alignSelf: 'center',
                        }}>
                        Date
                      </Text>
                      <Text
                        style={{
                          color: '#08101F',
                          fontSize: 13,
                          fontWeight: '500',
                        }}>
                        {item.Date}
                      </Text>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Payment;
