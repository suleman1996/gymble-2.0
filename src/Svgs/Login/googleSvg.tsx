import React from 'react';
import Svg, { Path } from 'react-native-svg'

interface GoogleProps {
    style?: any,
}
const GoogleIcon = ({ style }: GoogleProps) => {
    return (
        <Svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M23.7135 12.2763C23.7135 11.4605 23.6474 10.6404 23.5063 9.83789H12.1875V14.4589H18.6692C18.4003 15.9492 17.536 17.2676 16.2705 18.1054V21.1037H20.1375C22.4083 19.0137 23.7135 15.9272 23.7135 12.2763Z" fill="#4285F4" />
                <Path d="M12.1874 24.0008C15.4238 24.0008 18.1532 22.9382 20.1418 21.1039L16.2748 18.1055C15.1989 18.8375 13.81 19.252 12.1918 19.252C9.06115 19.252 6.40673 17.1399 5.45431 14.3003H1.46387V17.3912C3.50098 21.4434 7.65016 24.0008 12.1874 24.0008Z" fill="#34A853" />
                <Path d="M5.45004 14.3005C4.94738 12.8101 4.94738 11.1963 5.45004 9.70593V6.61499H1.464C-0.238001 10.0058 -0.238001 14.0006 1.464 17.3914L5.45004 14.3005Z" fill="#FBBC04" />
                <Path d="M12.1874 4.74966C13.8982 4.7232 15.5517 5.36697 16.7907 6.54867L20.2168 3.12262C18.0474 1.0855 15.1681 -0.034466 12.1874 0.000808666C7.65016 0.000808666 3.50098 2.55822 1.46387 6.61481L5.4499 9.70575C6.39791 6.86173 9.05674 4.74966 12.1874 4.74966Z" fill="#EA4335" />
        </Svg>
    )
}
export default GoogleIcon