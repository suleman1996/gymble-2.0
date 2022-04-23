import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Image, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { LeftarrowIcon, WhitedotIcon, PremiumIcon, DocIcon } from '../../Svgs/Customerinfo/Icons';
import { CalenderIcon, TimeIcon } from '../../BottomTab/Home/Svgs/Icons';
import styles from './style';
import Button from '../../Components/Button/button';
import { renderItemHorizontal } from '../../BottomTab/Home/home';


const CustomerInfo: React.FC<any> = ({ navigation, route }) => {
    let status = route.params.item

    // useEffect(() => {
    //     console.log('status', status)
    // })

    const personpic = [
        {
            img: require('../../BottomTab/Home/Images/test_1.png'),
        },
        {
            img: require('../../BottomTab/Home/Images/test_2.png'),
        },
        {
            img: require('../../BottomTab/Home/Images/test_3.png'),
        },
        {
            img: require('../../BottomTab/Home/Images/test_4.png'),
        },
        {
            img: require('../../BottomTab/Home/Images/test_5.png'),
        },
        {
            img: null,
        },
    ]
    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.headerView}>
                <LeftarrowIcon style={styles.arrowicon} onPress={() => navigation.navigate('home')} />
                <Text style={styles.text}>Customer Information</Text>
                <WhitedotIcon style={styles.doticon} />
            </View>

            <View style={styles.view3}>
                <View style={styles.view1}>
                    <Image source={require('../../BottomTab/Home/Images/test_5.png')} style={styles.image} />
                    <View><Text style={styles.text1}>Mrh Raju</Text><Text style={styles.text2}>Joined in Center</Text></View>
                </View>
                <TouchableOpacity style={styles.view2}>
                    <PremiumIcon style={styles.premiumIcon} />
                    <Text style={styles.text3}>Premium User</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.MainView}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Text style={styles.MainText}>Activity</Text>
                    <View style={styles.MainView1}>
                        <Text style={styles.MainViewText}>Morning Group{'\n'}Workout</Text>
                        <Text style={styles.MainViewText2}>Participants</Text>
                        <View style={styles.flatlistView}>
                            <FlatList
                                style={{ paddingStart: 4 }}
                                data={personpic}
                                horizontal={true}
                                maxToRenderPerBatch={5}
                                renderItem={renderItemHorizontal}
                            />
                        </View>
                        <Text style={styles.MainViewText3}>Time Frame</Text>
                        <View style={styles.MainView2}>
                            <CalenderIcon style={styles.calenderIcon} /><Text style={styles.MainViewText4}>20 Jan</Text>
                            <TimeIcon style={styles.calenderIcon} /><Text style={styles.MainViewText5}>10:30 PM</Text>
                        </View>
                    </View>

                    <Text style={styles.MainText2}>Service Details</Text>
                    <View style={styles.MainView3}>
                        <View style={styles.MainView4}>
                            <Text style={styles.MainText3}>Confirmation ID</Text>
                            <Text style={styles.MainText3}>GB98241</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#F2F3F5', marginTop: 10, marginHorizontal: 15 }}></View>

                        <View style={styles.MainView4}>
                            <Text style={styles.MainText3}>Price</Text>
                            <Text style={styles.MainText3}>$45.00</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#F2F3F5', marginTop: 10, marginHorizontal: 15 }}></View>

                        <View style={styles.MainView4}>
                            <Text style={styles.MainText3}>Service Fee</Text>
                            <Text style={styles.MainText3}>$10.00</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#F2F3F5', marginTop: 10, marginHorizontal: 15 }}></View>

                        <View style={styles.MainView4}>
                            <Text style={styles.MainText4}>Service Fee</Text>
                            <Text style={styles.MainText4}>$10.00</Text>
                        </View>
                    </View>

                    {!status ?
                        <View>
                            <Text style={styles.MainText2}>Customer Notes</Text>
                            <View style={styles.MainView5}>
                                <Text style={styles.MainText5}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                            </View>

                            <Text style={styles.MainText2}>My Notes</Text>
                            <View style={styles.MainView5}>
                                <Text style={styles.MainText5}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</Text>
                            </View>

                            <Text style={styles.MainText2}>Attachments</Text>
                            <View style={styles.LastView}>
                                <DocIcon style={styles.docicon} />
                                <TouchableOpacity>
                                    <Text style={styles.doctext}>Gymble Documents.doc</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.footer}>
                            {status == 'Rejected' ? null
                                :
                                <Button text={status == 'Upcoming' ? 'Cancel' : status == 'Pending' ? 'Reject' : status == 'Completed' ? 'Refund' : 'Reject'} borderColor={'#4AB5E3'} color={'#4AB5E3'} backgroundColor={'#FFFFFF'} fontSize={15} height={50} width={'45%'} borderWidth={1} />
                            }
                            <Button text={status == 'Upcoming' ? 'Message' : status == 'Completed' ? 'Message' : status == 'Rejected' ? 'Message' : 'Accept'} color={'#fff'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={status == 'Rejected' ? '80%' : '45%'} borderWidth={1} />
                        </View>

                    }
                </ScrollView>

                {/* <View style={styles.footer}>
                    {status == 'Rejected' ? null
                        :
                        <Button text={status == 'Upcoming' ? 'Cancel' : status == 'Pending' ? 'Reject' : status == 'Completed' ? 'Refund' : 'Reject'} borderColor={'#4AB5E3'} color={'#4AB5E3'} backgroundColor={'#FFFFFF'} fontSize={15} height={50} width={'45%'} borderWidth={1} />
                    }
                    <Button text={status == 'Upcoming' ? 'Message' : status == 'Completed' ? 'Message' : status == 'Rejected' ? 'Message' : 'Accept'} color={'#fff'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={status == 'Rejected' ? '80%' : '45%'} borderWidth={1} />
                </View> */}
            </View>
        </SafeAreaView>
    )
}
export default CustomerInfo