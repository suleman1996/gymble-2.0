import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {
  SelectDayIcon, SelectDayIconLight,
  SelectHourIcon,
  SelectTimeSlotIcon,
  DuretionLightIcon,
  EditIcon,
  TrashIcon,
  ClockLightIcon
} from '../SVG/Icon'
import styles from './style';
import React, {useEffect } from 'react';
import {
  ProfileBackIcon,
  ProfileDotsIcon,
} from '../../../Svgs/Profile/ProfileVectors';
import CardButton from '../../../Components/Button/cardButton';
const AddedScheduling: React.FC<any> = ({ navigation }) => {
    const SchedulingData=[
        {
            Day:"Wednesday",
            MinTime:"10 minutes",
            Duration:"60 minutes",
            HourAvailable:"9:30 AM-1:30 PM"
        },
        {
            Day:"Thursday",
            MinTime:"10 minutes",
            Duration:"60 minutes",
            HourAvailable:"9:30 AM-1:30 PM"
        },
        {
            Day:"Friday",
            MinTime:"5 minutes",
            Duration:"60 minutes",
            HourAvailable:"9:30 AM-11:30 AM"
        },
        {
            Day:"Wednesday",
            MinTime:"10 minutes",
            Duration:"60 minutes",
            HourAvailable:"9:30 AM-1:30 PM"
        },
        {
            Day:"Wednesday",
            MinTime:"10 minutes",
            Duration:"60 minutes",
            HourAvailable:"9:30 AM-1:30 PM"
        },
    ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <ProfileBackIcon
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text}>Added Scheduling</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <ScrollView>
          {
              SchedulingData.map((item,id)=>{
                  return(
                    <View key={id} style={styles.scheduleCardView}>
                    <View style={styles.cardSubView1}>
                      <View style={styles.cardSubViewhalf}>
                        <View style={styles.rowViewInCard}>
                          <SelectDayIconLight style={styles.cardIcon} />
                          <Text style={styles.cardIconText}>Day</Text>
          
                        </View>
                        <Text style={styles.cardSubHeading}>{item.Day}</Text>
          
                        <View style={styles.rowViewInCard}>
                          <ClockLightIcon style={styles.cardIcon} />
                          <Text style={styles.cardIconText}>Min. Time Between</Text>
                        </View>
                        <Text style={styles.cardSubHeading}>{item.MinTime}</Text>
                      </View >
                      <View style={styles.cardSubViewhalf}>
                        <View style={styles.rowViewInCard}>
                          <DuretionLightIcon style={styles.cardIcon} />
                          <Text style={styles.cardIconText}>Duration</Text>
          
                        </View>
                        <Text style={styles.cardSubHeading}>{item.Duration}</Text>
          
                        <View style={styles.rowViewInCard}>
                          <ClockLightIcon style={styles.cardIcon} />
                          <Text style={styles.cardIconText}>Hour Available</Text>
                        </View>
                        <Text style={styles.cardSubHeading}>{item.HourAvailable}</Text>
                      </View >
          
                    </View>
                    <View style={styles.cardSubView2}>
                      <CardButton
                        text={'Delete'}
                        Icon={<TrashIcon style={styles.cardIcon} />}
                        color={'#798293'}
                        fontSize={15}
                        height={40}
                        width={'40%'}
                        backgroundColor='#F2F3F5'
                      />
                      <CardButton
                        text={'Edit'}
                        Icon={<EditIcon style={styles.cardIcon} />}
                        color={'#fff'}
                        fontSize={15}
                        height={40}
                        width={'40%'}
                        backgroundColor='#4AB5E3'
                      />
          
          
                    </View>
          
                  </View>
                  )
              })
          }
  
     


      </ScrollView>
    </SafeAreaView>
  );
};

export default AddedScheduling;
