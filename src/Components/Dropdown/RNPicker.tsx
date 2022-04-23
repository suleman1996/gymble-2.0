import React, { useState } from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

const RNPicker: React.FC<any> = ({ placeholder, value, onValueChange, items, icon, style }) => {

    return (
        <View>
            <RNPickerSelect
                placeholder={placeholder}
                value={value}
                onValueChange={onValueChange}
                items={items}
                Icon={icon}
                style={style}
            />
        </View>
    )
}

export { RNPicker,}
