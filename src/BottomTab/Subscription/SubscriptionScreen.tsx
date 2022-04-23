import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import React, {useState} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
  SubscriptionScreenRadioButton,
  SubscriptionScreenHighLightRadioButton,
} from '../../Svgs/Profile/ProfileVectors';
import List from './List';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button/button';
const SubscriptionScreen: React.FC<any> = () => {
  const [seleted, setSelected] = useState(false);
  const [Bfocus, setBFocus] = useState(0);
  const data = List;
  const navigation = useNavigation();

  const onClick = (index: any) => {
    if (typeof index) {
      setBFocus(index);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.subContainer}>
          <ProfileBackIcon
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.text}>Subscription</Text>
          <ProfileDotsIcon style={styles.dotsIcon} />
        </View>
        <>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => onClick(index)}
                    style={[
                      styles.card,
                      {borderColor: index == Bfocus ? '#4AB5E3' : '#F2F3F5'},
                    ]}>
                    <View>
                      <View style={styles.cardContainer}>
                        <Text style={styles.cardText}>{item.title}</Text>

                        {index == Bfocus ? (
                          <SubscriptionScreenHighLightRadioButton
                            style={styles.cardIcon}
                          />
                        ) : (
                          <SubscriptionScreenRadioButton
                            style={styles.cardIcon}
                          />
                        )}
                      </View>
                      <View style={styles.cardNumber}>
                        <Text style={styles.number}>{item.price}</Text>
                      </View>
                    </View>
                    <View style={styles.detailContainer}>
                      <TouchableOpacity>
                        <Text style={styles.cardHolder}>{item.time}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.detailContainer}>
                      <Text style={styles.cardHolderName}>{item.status}</Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </>
      </ScrollView>
      <View>
        <Button
          text={'Continue'}
          color={'#fff'}
          fontSize={15}
          height={50}
          width={'80%'}
          borderWidth={1}
          marginTop={50}
          backgroundColor={'#4AB5E3'}
          marginBottom={10}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
