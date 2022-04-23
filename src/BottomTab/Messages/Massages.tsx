import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import {MassageIcon} from '../../Svgs/Facility/Icons';
import styles from './style';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';

import {useNavigation} from '@react-navigation/native';
import {Messages} from './MassagesList';

const MassageScreen: React.FC<any> = () => {
  const navigation = useNavigation();

  const fun = item => {
    navigation.navigate('chatScreen', {item});
  };

  const [search,setSearch] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Message</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <View style={styles.searchView}>
        <View style={styles.inputView}>
          <MassageIcon style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search contacts..."
            textContentType="name"
            placeholderTextColor="#798293"
            onChangeText={(text) => { setSearch(text) }}

          />
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={Messages.filter((item)=>item.name.toUpperCase().includes(search.toUpperCase()))}
          renderItem={({ item }) => {

            return (
              // <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <TouchableOpacity style={styles.touch1} onPress={() => fun(item)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.view2}>
                    <Image style={styles.img} source={item.image} />
                    <View style={styles.view3}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.msg}>{item.message}</Text>
                    </View>
                  </View>

                  <View style={{justifyContent: 'center'}}>
                    <Text style={styles.msg}>{item.time}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              // </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default MassageScreen;
