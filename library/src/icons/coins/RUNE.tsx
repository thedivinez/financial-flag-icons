import React from 'react';
import { IconProps } from '../types/types';

const RUNE: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" role="img" {...props}><circle cx="10" cy="10" r="10" fill="#101821"/><path fill="url(#a)" d="m5 16 8.382-3.528-2.653-2.689L5 16Zm3.08-8.902 2.653 2.685L15.469 4 8.08 7.098Z"/><defs><linearGradient id="a" x1="5" x2="15.468" y1="10" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#0CF"/><stop offset="1" stopColor="#3F9"/></linearGradient></defs></svg>
);

export default RUNE;
