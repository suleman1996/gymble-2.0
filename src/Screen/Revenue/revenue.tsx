import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {DotIcon} from '../../BottomTab/Home/Svgs/Icons';
import {
  BlackarrowIcon,
  GreenarrowIcon,
  BluecircleIcon,
  GreencircleIcon,
  YellowcircleIcon,
  BigBluecircleIcon,
  BigGreencircleIcon,
  BigYellowcircleIcon,
} from '../../Svgs/Revenue/Icons';
import {LineChart} from 'react-native-chart-kit';
import styles from './style';
import chartConfig from '../../BottomTab/Home/home';

const Revenue: React.FC<any> = ({navigation}) => {
  const [active, setActive] = useState(false);
  const transactions = [
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      date: 'Date: 12/12/21',
      text: 'Booking',
      price: '$499',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      date: 'Date: 12/12/21',
      text: 'Booking',
      price: '$499',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      date: 'Date: 12/12/21',
      text: 'Booking',
      price: '$499',
    },
    {
      image: require('../../BottomTab/Home/Images/center.png'),
      date: 'Date: 12/12/21',
      text: 'Booking',
      price: '$499',
    },
  ];

   const chartConfig = {
     backgroundGradientFrom: '#FFFFFF',
     backgroundGradientTo: '#FFFFFF',
     decimalPlaces: 0,
     color: (opacity = 1) => `rgba(74, 181, 227, ${opacity})`,
     labelColor: (opacity = 1) => `rgba(121,130,147, ${opacity})`,
     style: {borderRadius: 6},
     propsForDots: {r: '0', strokeWidth: '2', stroke: '#ffa726'},
     propsForBackgroundLines: {strokeWidth: 0},
   };

  const Button = [{b1Text: 'Week'}, {b1Text: 'Month'}, {b1Text: 'Year'}];

  const onClick = index => {
    setActive(index);
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                style={{fontSize: 12, color: '#798293', marginHorizontal: 20}}>
                {item.date}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#08101F',
              marginHorizontal: 20,
              fontWeight: 'bold',
            }}>
            {item.price}
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

  const renderItemHorizontal = ({item, index}) => {
    return (
      <>
        <View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: index == active ? '#F2F3F5' : '#FFFFFF'},
            ]}
            onPress={() => onClick(index)}>
            <Text
              style={[
                styles.buttontext,
                {color: index == active ? '#08101F' : '#798293'},
              ]}>
              {item.b1Text}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.headerView}>
        <BlackarrowIcon
          style={styles.arrowicon}
          onPress={() => navigation.navigate('home')}
        />
        <Text style={styles.text}>Revenues</Text>
        <DotIcon style={styles.doticon} />
      </View>
      <ScrollView>
        <View style={styles.view}>
          <View>
            <FlatList
              data={Button}
              horizontal={true}
              renderItem={renderItemHorizontal}
            />
          </View>

          <View style={styles.view2}>
            <Text style={styles.text2}>$6,443.92</Text>
            <View style={styles.view3}>
              <Text style={styles.text3}>2.55%</Text>
              <GreenarrowIcon style={styles.greenarrowicon} />
            </View>
          </View>
          <Text style={styles.text4}>Total revenues in last 7 days</Text>
          <Text style={styles.text5}>Statistics</Text>

          <View style={styles.view4}>
            <View style={styles.view5}>
              <BluecircleIcon style={styles.bcicon} />
              <Text style={styles.text6}>Service</Text>
            </View>

            <View style={styles.view6}>
              <GreencircleIcon style={styles.bcicon} />
              <Text style={styles.text7}>Rental</Text>
            </View>

            <View style={styles.view7}>
              <YellowcircleIcon style={styles.bcicon} />
              <Text style={styles.text8}>Experiences</Text>
            </View>
          </View>

          <View>
            <LineChart
              data={{
                labels: ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [1, 7, 6, 4, 2, 5],
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(234,180,17,${opacity})`, // optional
                  },
                  {
                    data: [2, 4, 6, 8, 8, 2],
                    strokeWidth: 3,
                    color: (opacity = 1) => `rgba(65,201,110, ${opacity})`, // optional
                  },
                  {
                    data: [9, 4, 7, 8, 2, 4],
                    strokeWidth: 3,
                    color: (opacity = 2) => `rgba(74,181,227, ${opacity})`, // optional
                  },
                ],
              }}
              width={Dimensions.get('window').width * 1.23}
              height={180}
              withHorizontalLabels={false}
              withOuterLines={false}
              chartConfig={chartConfig}
              bezier
              style={{marginTop: 8, marginLeft: -60}}
            />
          </View>

          <View style={styles.view8}></View>
          <View style={styles.view9}>
            <BigBluecircleIcon />
            <View style={styles.view10}>
              <Text style={styles.text9}>$1,983</Text>
              <Text style={styles.text10}>Service</Text>
            </View>

            <BigGreencircleIcon />
            <View style={styles.view10}>
              <Text style={styles.text9}>$1,983</Text>
              <Text style={styles.text10}>Rental</Text>
            </View>

            <BigYellowcircleIcon />
            <View style={styles.view10}>
              <Text style={styles.text9}>$1,983</Text>
              <Text style={styles.text10}>Experience</Text>
            </View>
          </View>
          <View style={styles.view8}></View>

          <Text style={styles.text11}>Recent Transactions</Text>
          <FlatList data={transactions} renderItem={renderItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Revenue;
