import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Button from '../../Components/Button/button';
import React, {useRef} from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
  ManageCardIcon,
} from '../../Svgs/Profile/ProfileVectors';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetCard from '../../Components/BottomSheetCard/ButtomSheetCard';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import data from './CardInfo';
const ManageCards: React.FC<any> = () => {
  let color = [
    '#00a3e0',
    '#10069F',
    '#994F14',
    '#DA291C',
    '#FFCD00',
    '#007A33',
    '#EB9CA8',
    '#7C878E',
    '#8A004F',
    '#000000',
    '#4CC1A1',
  ];
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Manage Cards</Text>
        <ProfileDotsIcon style={styles.dotsIcon} onPress={rbsheetOpen} />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              <View
                style={[
                  styles.card,
                  {backgroundColor: color[index % color.length]},
                ]}>
                <View>
                  <View style={styles.cardContainer}>
                    <Text style={styles.cardText}>{item.cardName}</Text>
                    <ManageCardIcon style={styles.cardIcon} />
                  </View>
                  <View style={styles.cardNumber}>
                    <Text style={styles.number}>{item.cardNumber}</Text>
                  </View>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.cardHolder}>Card Holder</Text>
                  <Text style={styles.expDate}>Exp Date</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.cardHolderName}>
                    {item.AcountHolderName}
                  </Text>
                  <Text style={styles.cardText}>{item.ExpDate}</Text>
                </View>
              </View>
            </>
          );
        }}
      />
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
              height: 250,
            },
          }}>
          <BottomSheetCard onPress={() => refRBSheet.current.close()} />
        </RBSheet>
      </View>
      <Button
        text={'+ Add Card'}
        color={'#4AB5E3'}
        fontSize={15}
        height={50}
        width={'80%'}
        borderWidth={1}
        marginTop={10}
        backgroundColor={'#fff'}
        // disabled={true}
        marginBottom={10}
        onPress={() => navigation.navigate('addCard')}
      />
    </SafeAreaView>
  );
};

export default ManageCards;
