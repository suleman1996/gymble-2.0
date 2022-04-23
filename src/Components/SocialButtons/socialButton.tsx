import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AppleIcon from '../../Svgs/Login/appleSvg'
import FBIcon from '../../Svgs/Login/facebookSvg'
import GoogleIcon from '../../Svgs/Login/googleSvg'

const Applebutton: React.FC<any> = ({ text, fontWeight,fontSize ,backgroundColor, onPress, marginTop, color, elevation, flex,height,width,borderWidth }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: flex,alignSelf:'center', backgroundColor: backgroundColor,borderWidth:borderWidth, height: height,width:width, borderRadius: 10, justifyContent: 'center', marginTop: marginTop, elevation: elevation,borderColor:'#D7DADF'}}>
          <AppleIcon style={{height:24,width: 24,alignSelf:'center'}}/>
        </TouchableOpacity>
    )
}
const FBbutton: React.FC<any> = ({ text, fontWeight,fontSize ,backgroundColor, onPress, marginTop, color, elevation, flex,height,width,borderWidth }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: flex,alignSelf:'center', backgroundColor: backgroundColor,borderWidth:borderWidth, height: height,width:width, borderRadius: 10, justifyContent: 'center', marginTop: marginTop, elevation: elevation,borderColor:'#D7DADF'}}>
          <FBIcon style={{height:24,width: 24,alignSelf:'center'}}/>
        </TouchableOpacity>
    )
}
const Googlebutton: React.FC<any> = ({ text, fontWeight,fontSize ,backgroundColor, onPress, marginTop, color, elevation, flex,height,width,borderWidth }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ flex: flex,alignSelf:'center', backgroundColor: backgroundColor,borderWidth:borderWidth, height: height,width:width, borderRadius: 10, justifyContent: 'center', marginTop: marginTop, elevation: elevation,borderColor:'#D7DADF'}}>
          <GoogleIcon style={{height:24,width: 24,alignSelf:'center'}}/>
        </TouchableOpacity>
    )
}
export {Applebutton,FBbutton,Googlebutton};
