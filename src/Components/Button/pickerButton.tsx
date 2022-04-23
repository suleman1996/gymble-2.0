import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const PickerButton: React.FC<any> = ({ disabled,text,marginBottom, fontWeight,fontSize,marginHorizontal ,backgroundColor, onPress, marginTop, color, elevation, flex,height,width,borderWidth,borderColor }) => {
    // console.log(borderColor)

    
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{ marginBottom: marginBottom,marginHorizontal:marginHorizontal,flex: flex,alignSelf:'center', backgroundColor: backgroundColor,borderWidth:borderWidth, height: height,width:width, borderRadius: 30, justifyContent: 'center', marginTop: marginTop, elevation: elevation,borderColor:borderColor}}>
            <Text style={{ color: color, fontSize: fontSize, textAlign: 'center', fontWeight: fontWeight }}> {text}</Text>
        </TouchableOpacity>
    )
}

export default PickerButton;
