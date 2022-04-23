import React, { useState } from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import SuccessIcon from '../../Svgs/Success/SuccessSVG';
import Button from '../../Components/Button/button';
import styles from './style';

const Congrats: React.FC<any> = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.view}>
                <SuccessIcon style={styles.success}/>
                <Text style={styles.congrats}>Congratulations...</Text>
                <Text style={styles.text}>This subtext will change according the events and it will change dynamically.</Text>
                <Button onPress={()=> navigation.navigate('login')} text={'Done'} color={'#FFFFFF'} backgroundColor={'#4AB5E3'} fontSize={15} height={50} width={'100%'} borderWidth={1} marginTop={50} />

        
            </View>
        </SafeAreaView>
    )
}
export default Congrats