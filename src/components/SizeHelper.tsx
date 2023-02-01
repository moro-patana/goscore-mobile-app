import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const sm = Math.round(width * 0.04);
export const md = Math.round(width * 0.06);
export const lg = Math.round(width * 0.16);
export const xl = Math.round(width * 0.2);
