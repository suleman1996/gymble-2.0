import React, { useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import { CrossIcon, NotactiveIcon, ActiveIcon } from '../../../BottomTab/Home/Svgs/Icons';
import Button from '../../../Components/Button/button';

const Refundsheet: React.FC<any> = ({ onPress,onPressCancel,onPressYeah }) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 }}>
                <CrossIcon style={{ height: 20, width: 15, }} onPress={onPress} />
                <Text style={{ fontSize: 15, color: '#0A1326' }}>Refund</Text>
                <Text style={{ fontSize: 15, color: '#0A1326' }}></Text>
            </View>

            <Text style={{ color: '#08101F', fontSize: 17, fontWeight: 'bold', marginHorizontal: 20, marginTop: 50, textAlign: 'center' }}>Are you sure you want to {'\n'}refund Cody Fisher </Text>
            <View style={{ flexDirection: 'row',justifyContent:'space-around', marginHorizontal: 20,}}>
                <Button onPress={onPressCancel} text={'Cancel'} borderColor={'#4AB5E3'} color={'#4AB5E3'} backgroundColor={'#FFFFFF'} fontSize={15} height={50} width={'45%'} borderWidth={1} marginTop={30} />
                <Button onPress={onPressYeah} text={'Yeah'} color={'#fff'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={'45%'} borderWidth={1} marginTop={30} />
            </View>

        </SafeAreaView>
    )
}
export default Refundsheet;
