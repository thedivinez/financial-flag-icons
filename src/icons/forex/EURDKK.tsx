import React from 'react';
import { IconProps } from '../types/types';

const EURDKK: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
        <path d="M13.027 0v26.051c7.194 0 13.026-5.832 13.026-13.025C26.053 5.832 20.221 0 13.027 0Z" fill="#214391" />
        <path d="M13.025 0C5.832 0 0 5.832 0 13.026s5.832 13.025 13.025 13.025c7.194 0 7.194-26.05 0-26.05Z" fill="#2B479D" />
        <path
            d="m13.002 2.259.318.978h1.028l-.832.604.318.978-.832-.605-.831.605.317-.978-.832-.604h1.029l.317-.978ZM13.002 20.716l.318.979h1.028l-.832.604.318.977-.832-.604-.831.604.317-.977-.832-.604h1.029l.317-.979ZM18.069 3.895l.317.978h1.028l-.832.604.318.978-.831-.605-.832.605.317-.978-.831-.604h1.028l.317-.978ZM21.526 7.305l.317.977h1.029l-.832.605.318.978-.832-.605-.832.605.318-.978-.832-.605h1.028l.318-.977ZM21.61 15.92l.317.978h1.029l-.832.604.318.978-.832-.604-.832.604.318-.978-.832-.604h1.028l.318-.978ZM4.608 7.305l.317.977h1.028l-.831.605.317.978-.831-.605-.832.605.317-.978-.831-.605H4.29l.318-.977ZM22.326 11.414l.318.977h1.028l-.832.604.318.979-.832-.604-.831.604.318-.979-.832-.604h1.028l.317-.977ZM3.82 11.414l.318.977h1.028l-.832.604.318.979-.831-.604-.832.604.318-.979-.832-.604h1.028l.318-.977ZM4.494 15.92l.318.978H5.84l-.832.604.318.978-.832-.604-.831.604.317-.978-.832-.604h1.029l.317-.978ZM18.217 19.476l.318.977h1.028l-.832.605.318.978-.832-.605-.832.605.318-.978-.832-.605H17.9l.318-.977ZM8.102 3.895l.317.978h1.029l-.832.604.318.978-.832-.605-.832.605.318-.978-.832-.604h1.028l.318-.978ZM7.729 19.413l.317.978h1.029l-.832.604.318.978-.832-.604-.832.604.318-.978-.832-.604H7.41l.318-.978Z"
            fill="#F8D12E"
        />
        <circle cx={25.333} cy={27.167} r={13.581} fill="#fff" stroke="#fff" strokeWidth={0.5} />
        <mask
            id="eurdkk_svg__a"
            style={{
                maskType: 'alpha'
            }}
            maskUnits="userSpaceOnUse"
            x={12}
            y={13}
            width={27}
            height={28}
        >
            <path d="M25.331 40.498c7.363 0 13.332-5.968 13.332-13.331 0-7.363-5.969-13.332-13.332-13.332C17.97 13.835 12 19.805 12 27.167c0 7.363 5.969 13.331 13.331 13.331Z" fill="red" />
        </mask>
        <g mask="url(#eurdkk_svg__a)">
            <path d="M42.865 13H5.041v28.837h37.824V13Z" fill="#C60C30" />
            <path d="M21.434 13h-4.118v28.837h4.118V13Z" fill="#fff" />
            <path d="M43.096 25.413H5.04v4.18h38.055v-4.18Z" fill="#fff" />
        </g>
    </svg>
);

export default EURDKK;
