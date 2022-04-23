import React from 'react';
import Svg, {
    Path,
    G,
    Defs,
    Rect,
    ClipPath,
    LinearGradient,
    Circle,
    Stop,
} from 'react-native-svg';

interface AppleProps {
    style?: any;
    onPress?: any;
}
const ImageLaoutIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.89738 18.9932L18.1164 18.9932C18.8806 18.9932 19.5 18.3737 19.5 17.6096L19.5 2.39055C19.5 1.62643 18.8806 1.007 18.1164 1.007L2.89738 1.007C2.13327 1.007 1.51383 1.62643 1.51383 2.39055L1.51383 17.6096C1.51383 18.3737 2.13327 18.9932 2.89738 18.9932Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.6063 9.30825C14.9435 9.30825 16.0275 8.22423 16.0275 6.88703C16.0275 5.54984 14.9435 4.46582 13.6063 4.46582C12.2691 4.46582 11.1851 5.54984 11.1851 6.88703C11.1851 8.22423 12.2691 9.30825 13.6063 9.30825Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.8136 18.9934C13.3681 16.6206 12.0941 14.4832 10.2188 12.9627C8.34348 11.4422 5.98896 10.6375 3.57533 10.6921C2.87895 10.6902 2.184 10.7551 1.5 10.8858" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M19.4862 14.0263C18.3718 13.65 17.2035 13.4583 16.0273 13.459C14.5385 13.4558 13.0648 13.7571 11.6968 14.3445" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    )
}
const UploadIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1 19.4619V21.3081C1 22.2873 1.38901 23.2265 2.08145 23.9189C2.77389 24.6114 3.71305 25.0004 4.69231 25.0004H21.3077C22.287 25.0004 23.2261 24.6114 23.9185 23.9189C24.611 23.2265 25 22.2873 25 21.3081V19.4619" stroke="#798293" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M7.46143 7.46154L12.9999 1L18.5383 7.46154" stroke="#798293" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13 1V17.6154" stroke="#798293" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        

    )
}



export {
    ImageLaoutIcon,
    UploadIcon
}