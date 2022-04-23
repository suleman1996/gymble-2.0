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
const SelectDayIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15405 1V6.53846" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M14.8464 1V6.53846" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.15405 3.76953H12.0771" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M13.4614 14.1543H6.53833" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 9.30762H19" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

const SelectDayIconLight = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.92308 2.8457C1.67826 2.8457 1.44347 2.94296 1.27036 3.11607C1.09725 3.28918 1 3.52396 1 3.76878V12.0765C1 12.3213 1.09725 12.5561 1.27036 12.7292C1.44347 12.9023 1.67826 12.9995 1.92308 12.9995H12.0769C12.3217 12.9995 12.5565 12.9023 12.7296 12.7292C12.9027 12.5561 13 12.3213 13 12.0765V3.76878C13 3.52396 12.9027 3.28918 12.7296 3.11607C12.5565 2.94296 12.3217 2.8457 12.0769 2.8457H10.2308" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.76929 1V4.69231" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.231 1V4.69231" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.76929 2.8457H8.38467" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M9.30752 9.76953H4.69214" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 6.53809H13" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}
const SelectHourIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.65405 3.76953C10.6738 3.76953 12.6108 4.57186 14.0389 6.00003C15.4671 7.42819 16.2694 9.36519 16.2694 11.3849C16.2694 13.4046 15.4671 15.3416 14.0389 16.7698C12.6108 18.198 10.6738 19.0003 8.65405 19.0003V3.76953Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.5769 1H10.7308" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8.65405 1V3.76923" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M15.5771 3.07715L16.9618 4.46176" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.26758 5.99805L4.73527 7.46574" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1.03857 11.3848H3.1155" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.26758 16.7704L4.73527 15.3027" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}
const SelectTimeSlotIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.0002 6.53809V9.99962L13.5172 14.0981" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}

const DuretionLightIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5.76929 2.8457C7.11577 2.8457 8.40711 3.38059 9.35921 4.3327C10.3113 5.28481 10.8462 6.57614 10.8462 7.92263C10.8462 9.26911 10.3113 10.5604 9.35921 11.5126C8.40711 12.4647 7.11577 12.9995 5.76929 12.9995V2.8457Z" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M4.38452 1H7.15375" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.76929 1V2.84615" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.3848 2.38477L11.3078 3.30784" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M2.17847 4.33203L3.15693 5.31049" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M0.692383 7.92285H2.077" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M2.17847 11.5136L3.15693 10.5352" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    )
}
const EditIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.5 16.5H14.1866" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8.4202 12.4633L4.96021 13.0861L5.53687 9.58001L13.2988 1.84115C13.406 1.73305 13.5336 1.64725 13.6741 1.5887C13.8147 1.53015 13.9654 1.5 14.1177 1.5C14.2699 1.5 14.4207 1.53015 14.5612 1.5887C14.7017 1.64725 14.8293 1.73305 14.9365 1.84115L16.1591 3.06369C16.2672 3.1709 16.353 3.29846 16.4115 3.43901C16.4701 3.57955 16.5002 3.7303 16.5002 3.88255C16.5002 4.0348 16.4701 4.18555 16.4115 4.3261C16.353 4.46664 16.2672 4.5942 16.1591 4.70142L8.4202 12.4633Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>



    )
}
const TrashIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1.5769 4.96191H15.4231" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.30762 4.96191H13.6922V15.3465C13.6922 15.6525 13.5707 15.946 13.3543 16.1624C13.1379 16.3788 12.8444 16.5004 12.5384 16.5004H4.46146C4.15544 16.5004 3.86196 16.3788 3.64557 16.1624C3.42918 15.946 3.30762 15.6525 3.30762 15.3465V4.96191Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M5.61548 4.96154V4.38462C5.61548 3.61957 5.91939 2.88585 6.46036 2.34488C7.00133 1.80391 7.73505 1.5 8.50009 1.5C9.26514 1.5 9.99886 1.80391 10.5398 2.34488C11.0808 2.88585 11.3847 3.61957 11.3847 4.38462V4.96154" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.76929 7.26953V13.6157" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M10.2307 7.26953V13.6157" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>



    )
}
const ClockLightIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M7 4.69238V7.00007L9.34462 9.73238" stroke="#798293" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>



    )
}

export {
    SelectDayIcon, SelectDayIconLight,
    SelectHourIcon,
    SelectTimeSlotIcon,
    DuretionLightIcon,
    EditIcon,
    TrashIcon,
    ClockLightIcon
}