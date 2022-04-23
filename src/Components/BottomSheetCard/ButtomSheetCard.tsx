import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {CrossIcon, DeleteIcon, EditIcon} from '../../BottomTab/Home/Svgs/Icons';
import {ProfileDotsIcon} from '../../Svgs/Profile/ProfileVectors';
import {useNavigation} from '@react-navigation/native';
const BottomSheetCard: React.FC<any> = ({onPress}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <CrossIcon style={styles.icon} onPress={onPress} />
        <Text style={styles.text}>More</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <>
        <View style={styles.border}>
          <TouchableOpacity
            onPress={() => navigation.navigate('editCard')}
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EditIcon style={styles.icon} onPress={onPress} />
              <Text
                style={{fontSize: 15, color: '#08101F', marginHorizontal: 20}}>
                Edit Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.border}>
          <TouchableOpacity
            // onPress={() => onHandling(index)}
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <DeleteIcon style={styles.icon} onPress={onPress} />
              <Text
                style={{fontSize: 15, color: '#08101F', marginHorizontal: 20}}>
                Delete Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginHorizontal: 20,
  },
  backIcon: {
    width: 15,
    height: 18,
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dotsIcon: {
    width: 0,
    height: 0,
    marginHorizontal: 10,
  },
  border: {
    borderWidth: 0.5,
    marginTop: 15,
    marginHorizontal: 10,
    height: 50,
    borderTopColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderBottomColor: '#F2F3F5',
  },
  icon: {height: 18, width: 16},
});
export default BottomSheetCard;
