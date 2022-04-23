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
const ExperienceDateSimpleIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15402 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8463 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15402 3.76953H12.0771"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 14.1543H6.5383"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 9.30762H19"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceDateHighLightIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15401 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8463 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15401 3.76953H12.0771"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4614 14.1543H6.53829"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 9.30762H19"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceTimeIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0002 6.53809V9.99962L13.5171 14.0981"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceTimeHighLightIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.0002 6.53809V9.99962L13.5171 14.0981"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceFrequencyIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15402 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8463 1V6.53846"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15402 3.76953H12.0771"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 11.3846C5.53615 11.3846 5.8461 11.0747 5.8461 10.6923C5.8461 10.31 5.53615 10 5.15379 10C4.77144 10 4.46149 10.31 4.46149 10.6923C4.46149 11.0747 4.77144 11.3846 5.15379 11.3846Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99996 11.3846C10.3823 11.3846 10.6923 11.0747 10.6923 10.6923C10.6923 10.31 10.3823 10 9.99996 10C9.6176 10 9.30765 10.31 9.30765 10.6923C9.30765 11.0747 9.6176 11.3846 9.99996 11.3846Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8461 11.3846C15.2284 11.3846 15.5384 11.0747 15.5384 10.6923C15.5384 10.31 15.2284 10 14.8461 10C14.4637 10 14.1538 10.31 14.1538 10.6923C14.1538 11.0747 14.4637 11.3846 14.8461 11.3846Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 15.5389C5.53615 15.5389 5.8461 15.229 5.8461 14.8466C5.8461 14.4643 5.53615 14.1543 5.15379 14.1543C4.77144 14.1543 4.46149 14.4643 4.46149 14.8466C4.46149 15.229 4.77144 15.5389 5.15379 15.5389Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceFrequencyHighLightIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.38462 3.76953C2.01739 3.76953 1.66521 3.91541 1.40554 4.17508C1.14588 4.43474 1 4.78692 1 5.15415V17.6157C1 17.9829 1.14588 18.3351 1.40554 18.5948C1.66521 18.8544 2.01739 19.0003 2.38462 19.0003H17.6154C17.9826 19.0003 18.3348 18.8544 18.5945 18.5948C18.8541 18.3351 19 17.9829 19 17.6157V5.15415C19 4.78692 18.8541 4.43474 18.5945 4.17508C18.3348 3.91541 17.9826 3.76953 17.6154 3.76953H14.8462"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15401 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8463 1V6.53846"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15401 3.76953H12.0771"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 11.3846C5.53614 11.3846 5.8461 11.0747 5.8461 10.6923C5.8461 10.31 5.53614 10 5.15379 10C4.77144 10 4.46148 10.31 4.46148 10.6923C4.46148 11.0747 4.77144 11.3846 5.15379 11.3846Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.99994 11.3846C10.3823 11.3846 10.6923 11.0747 10.6923 10.6923C10.6923 10.31 10.3823 10 9.99994 10C9.61759 10 9.30764 10.31 9.30764 10.6923C9.30764 11.0747 9.61759 11.3846 9.99994 11.3846Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.8461 11.3846C15.2284 11.3846 15.5384 11.0747 15.5384 10.6923C15.5384 10.31 15.2284 10 14.8461 10C14.4637 10 14.1538 10.31 14.1538 10.6923C14.1538 11.0747 14.4637 11.3846 14.8461 11.3846Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.15379 15.5389C5.53614 15.5389 5.8461 15.229 5.8461 14.8466C5.8461 14.4643 5.53614 14.1543 5.15379 14.1543C4.77144 14.1543 4.46148 14.4643 4.46148 14.8466C4.46148 15.229 4.77144 15.5389 5.15379 15.5389Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceSlotIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.2308 7.92315C8.95138 7.92315 10.3462 6.52835 10.3462 4.80777C10.3462 3.08719 8.95138 1.69238 7.2308 1.69238C5.51022 1.69238 4.11542 3.08719 4.11542 4.80777C4.11542 6.52835 5.51022 7.92315 7.2308 7.92315Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4615 18.3078H1V16.9232C1 15.2706 1.65645 13.6858 2.82495 12.5173C3.99345 11.3488 5.57827 10.6924 7.23077 10.6924C8.88327 10.6924 10.4681 11.3488 11.6366 12.5173C12.8051 13.6858 13.4615 15.2706 13.4615 16.9232V18.3078Z"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.7693 1.69238C13.5956 1.69238 14.388 2.02061 14.9722 2.60486C15.5565 3.18911 15.8847 3.98152 15.8847 4.80777C15.8847 5.63402 15.5565 6.42643 14.9722 7.01068C14.388 7.59492 13.5956 7.92315 12.7693 7.92315"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.9846 10.9551C16.164 11.4038 17.1794 12.2 17.8965 13.2384C18.6135 14.2769 18.9983 15.5085 18.9999 16.7705V18.3074H16.923"
        stroke="#798293"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
const ExperienceSlotHighLightIcon = ({style, onPress}: AppleProps) => {
  return (
    <Svg
      style={style}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.2308 7.92315C8.95138 7.92315 10.3462 6.52835 10.3462 4.80777C10.3462 3.08719 8.95138 1.69238 7.2308 1.69238C5.51022 1.69238 4.11541 3.08719 4.11541 4.80777C4.11541 6.52835 5.51022 7.92315 7.2308 7.92315Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.4615 18.3078H1V16.9232C1 15.2706 1.65645 13.6858 2.82495 12.5173C3.99345 11.3488 5.57827 10.6924 7.23077 10.6924C8.88327 10.6924 10.4681 11.3488 11.6366 12.5173C12.8051 13.6858 13.4615 15.2706 13.4615 16.9232V18.3078Z"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.7693 1.69238C13.5956 1.69238 14.388 2.02061 14.9722 2.60486C15.5565 3.18911 15.8847 3.98152 15.8847 4.80777C15.8847 5.63402 15.5565 6.42643 14.9722 7.01068C14.388 7.59492 13.5956 7.92315 12.7693 7.92315"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.9846 10.9551C16.164 11.4038 17.1794 12.2 17.8965 13.2384C18.6135 14.2769 18.9983 15.5085 18.9999 16.7705V18.3074H16.923"
        stroke="#08101F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export {
  ExperienceDateSimpleIcon,
  ExperienceDateHighLightIcon,
  ExperienceTimeIcon,
  ExperienceTimeHighLightIcon,
  ExperienceFrequencyIcon,
  ExperienceFrequencyHighLightIcon,
  ExperienceSlotIcon,
  ExperienceSlotHighLightIcon,
};
