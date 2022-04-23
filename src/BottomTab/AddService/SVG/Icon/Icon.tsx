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
const PeopleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.2308 7.92315C8.95138 7.92315 10.3462 6.52835 10.3462 4.80777C10.3462 3.08719 8.95138 1.69238 7.2308 1.69238C5.51022 1.69238 4.11542 3.08719 4.11542 4.80777C4.11542 6.52835 5.51022 7.92315 7.2308 7.92315Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M13.4615 18.3078H1V16.9232C1 15.2706 1.65645 13.6858 2.82495 12.5173C3.99345 11.3488 5.57827 10.6924 7.23077 10.6924C8.88327 10.6924 10.4681 11.3488 11.6366 12.5173C12.8051 13.6858 13.4615 15.2706 13.4615 16.9232V18.3078Z" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.7693 1.69238C13.5956 1.69238 14.388 2.02061 14.9722 2.60486C15.5565 3.18911 15.8847 3.98152 15.8847 4.80777C15.8847 5.63402 15.5565 6.42643 14.9722 7.01068C14.388 7.59492 13.5956 7.92315 12.7693 7.92315" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M14.9846 10.9551C16.164 11.4038 17.1794 12.2 17.8965 13.2384C18.6135 14.2769 18.9983 15.5085 18.9999 16.7705V18.3074H16.923" stroke="#798293" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    );
};

const SelectedPeopleIcon = ({ style, onPress }: AppleProps) => {
    return (
        <Svg style={style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.2308 7.92315C8.95138 7.92315 10.3462 6.52835 10.3462 4.80777C10.3462 3.08719 8.95138 1.69238 7.2308 1.69238C5.51022 1.69238 4.11541 3.08719 4.11541 4.80777C4.11541 6.52835 5.51022 7.92315 7.2308 7.92315Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M13.4615 18.3078H1V16.9232C1 15.2706 1.65645 13.6858 2.82495 12.5173C3.99345 11.3488 5.57827 10.6924 7.23077 10.6924C8.88327 10.6924 10.4681 11.3488 11.6366 12.5173C12.8051 13.6858 13.4615 15.2706 13.4615 16.9232V18.3078Z" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M12.7693 1.69238C13.5956 1.69238 14.388 2.02061 14.9722 2.60486C15.5565 3.18911 15.8847 3.98152 15.8847 4.80777C15.8847 5.63402 15.5565 6.42643 14.9722 7.01068C14.388 7.59492 13.5956 7.92315 12.7693 7.92315" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M14.9846 10.9551C16.164 11.4038 17.1794 12.2 17.8965 13.2384C18.6135 14.2769 18.9983 15.5085 18.9999 16.7705V18.3074H16.923" stroke="#08101F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>


    );
};

export { PeopleIcon, SelectedPeopleIcon }

