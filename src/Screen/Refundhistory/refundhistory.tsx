import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, View, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { BlackarrowIcon } from '../../Svgs/Revenue/Icons'
import { BlackDotIcon, SortIcon, CalenderIcon } from '../../Svgs/Bookings/Icons'
import styles from './style'

const Refundhistory: React.FC<any> = ({ navigation }) => {

    const refundhistory = [
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
            name: 'Cody Fisher',
            text: 'Morning Group Workout',
            amount: '$55.00',
        },
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
            name: 'Cody Fisher',
            text: 'Morning Group Workout',
            amount: '$55.00',
        },
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
            name: 'Cody Fisher',
            text: 'Morning Group Workout',
            amount: '$55.00',
        },
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
            name: 'Cody Fisher',
            text: 'Morning Group Workout',
            amount: '$55.00',
        },
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
            name: 'Cody Fisher',
            text: 'Morning Group Workout',
            amount: '$55.00',
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.img} style={styles.flatlistimage} />
                        <View style={styles.flatlistview}>
                            <Text style={styles.flatlistname}>{item.name}</Text>
                            <Text style={styles.flatlisttext}>{item.text}</Text>
                        </View>
                    </View>
                    <Text style={styles.flatlistamount}>{item.amount}</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#F2F3F5', marginTop: 15, }}></View>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.view}>
                <ScrollView>

                    <View style={styles.headerView}>
                        <BlackarrowIcon style={styles.arrowicon} onPress={() => navigation.goBack()}/>
                        <Text style={styles.text}>Refund History</Text>
                        <BlackDotIcon style={styles.doticon} />
                    </View>
                    <Text style={styles.date}>24 Mar, 2022</Text>

                    <FlatList
                        data={refundhistory}
                        renderItem={renderItem}
                    />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Refundhistory