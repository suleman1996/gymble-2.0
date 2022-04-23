import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// import AlphabetFlatList from 'react-native-alphabetflatlist';
import AlphabetList from 'react-native-flatlist-alphabet';
import {names, colors, sizes} from './ContactList';

const Contacts: React.FC<any> = () => {
  const navigation = useNavigation();
  const fun = item => {
    navigation.navigate('facilityCustomerInfo', {item});
  };
  // const renderItem = ({item, index}) => {
  //   return (
  //     <View style={styles.rowContainer}>
  //       <TouchableOpacity
  //         // onPress={this.onPressRow.bind(this, item, index)}
  //         style={styles.rowButton}>
  //         <View style={styles.titleTextContainer}>
  //           <Image source={item.img} />
  //           <Text style={styles.titleText}>{item.name}</Text>
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  const renderListItem = item => {
    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('facilityCustomerInfo')}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={item.img} style={{height: 40, width: 40}} />
          <Text style={styles.listItemLabel}>{item.value}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSectionHeader = section => {
    return (
      <View style={styles.sectionHeaderContainer}>
        {/* <Text style={styles.sectionHeaderLabel}>{section.title}</Text> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AlphabetList
        style={{flex: 1}}
        data={names}
        renderItem={renderListItem}
        renderSectionHeader={renderSectionHeader}
        getItemHeight={() => sizes.itemHeight}
        sectionHeaderHeight={sizes.headerHeight}
        letterItemStyle={{height: 30}}
        alphabetContainer={{backgroundColor: '#F2F3F5', borderRadius: 8}}
        indexLetterColor={'#798293'}
        indexLetterSize={12}
      />
      {/* <AlphabetFlatList
        renderItem={renderItem}
        data={names}
        mainFlatListContainerStyle={{flex: 1}}
        alphabetListProps={{
          selectedAlphabetTextStyle: {
            color: '#fff',
          },
          selectedAlphabetButtonStyle: {
            backgroundColor: 'orange',
            height: 30,
            width: 30,
            borderRadius: 15,
            shadowOpacity: 0.5,
            shadowOffset: {width: 2, height: 2},
            elevation: 4,
          },
          alphabetButtonStyle: {
            backgroundColor: '#fff',
            height: 30,
            width: 30,
            borderRadius: 15,
            shadowOpacity: 0.5,
            shadowOffset: {width: 2, height: 2},
            elevation: 4,
          },
          alphabetListContainerStyle: {
            flex: 0.2,
          },
          showsVerticalScrollIndicator: false,
        }}
      /> */}
    </View>
  );
};

export default Contacts;
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // rowContainer: {
  //   // flex: 1,
  //   width: '90%',
  //   backgroundColor: 'white',
  //   shadowColor: '#707070',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 4,
  //   shadowOffset: { width: 1, height: 2 },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 2,
  //   elevation: 2,
  //   flexDirection: 'row',
  //   margin: 20,
  //   marginVertical: 10,
  // },
  // titleText: {
  //   color: '#828282',
  // },
  // titleTextContainer: {
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // rowButton: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   // paddingTop: '5%',
  //   // paddingBottom: '5%'
  // },

  //AlphabetList
  container: {
    flex: 1,
    backgroundColor: colors.background.light,
  },

  listItemContainer: {
    flex: 1,
    height: sizes.itemHeight,
    paddingHorizontal: sizes.spacing.regular,
    justifyContent: 'center',
    borderTopColor: colors.seperatorLine,
    borderTopWidth: 1,
  },

  listItemLabel: {
    color: colors.text.dark,
    fontSize: 14,
    marginHorizontal: 10,
  },

  sectionHeaderContainer: {
    // height: sizes.headerHeight,
    // backgroundColor: colors.background.dark,
    // justifyContent: 'center',
    // paddingHorizontal: sizes.spacing.regular,
  },

  sectionHeaderLabel: {
    color: colors.background.light,
  },
});
