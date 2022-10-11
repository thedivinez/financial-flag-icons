import React from 'react';

const EURPLN = ({ ...props }) => (
    <svg viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
        <path d="M13.027 0v26.05c7.194 0 13.026-5.83 13.026-13.024C26.053 5.832 20.221 0 13.027 0Z" fill="#214391" />
        <path d="M13.025 0C5.832 0 0 5.832 0 13.026s5.832 13.025 13.025 13.025c7.194 0 7.194-26.05 0-26.05Z" fill="#2B479D" />
        <path
            d="m13.002 2.259.318.978h1.028l-.832.604.318.978-.832-.605-.831.605.317-.978-.832-.604h1.029l.317-.978ZM13.002 20.716l.318.979h1.028l-.832.604.318.977-.832-.604-.831.604.317-.977-.832-.604h1.029l.317-.979ZM18.069 3.895l.317.978h1.028l-.832.604.318.978-.831-.605-.832.605.317-.978-.831-.604h1.028l.317-.978ZM21.526 7.305l.317.977h1.029l-.832.605.318.977-.832-.604-.832.604.318-.977-.832-.605h1.028l.318-.977ZM21.61 15.92l.317.978h1.029l-.832.604.318.978-.832-.604-.832.604.318-.978-.832-.604h1.028l.318-.978ZM4.608 7.305l.317.977h1.028l-.831.605.317.977-.831-.604-.832.604.317-.977-.831-.605H4.29l.318-.977ZM22.326 11.414l.318.977h1.028l-.832.604.318.979-.832-.605-.831.604.318-.978-.832-.604h1.028l.317-.977ZM3.82 11.414l.318.977h1.028l-.832.604.318.979-.831-.605-.832.604.318-.978-.832-.604h1.028l.318-.977ZM4.494 15.92l.318.978H5.84l-.832.604.318.978-.832-.604-.831.604.317-.978-.832-.604h1.029l.317-.978ZM18.217 19.476l.318.977h1.028l-.832.605.318.978-.832-.605-.832.605.318-.978-.832-.605H17.9l.318-.977ZM8.102 3.895l.317.978h1.029l-.832.604.318.978-.832-.605-.832.605.318-.978-.832-.604h1.028l.318-.978ZM7.729 19.413l.317.978h1.029l-.832.604.318.978-.832-.604-.832.604.318-.978-.832-.604H7.41l.318-.978Z"
            fill="#F8D12E"
        />
        <path d="M25.33 40.91c7.5 0 13.58-6.08 13.58-13.58s-6.08-13.58-13.58-13.58-13.58 6.08-13.58 13.58 6.08 13.58 13.58 13.58Z" fill="#F0F0F0" stroke="#fff" strokeWidth={0.5} />
        <mask
            id="eurpln_svg__a"
            style={{
                maskType: 'alpha'
            }}
            maskUnits="userSpaceOnUse"
            x={12}
            y={14}
            width={27}
            height={27}
        >
            <path d="M25.5 41C32.956 41 39 34.956 39 27.5S32.956 14 25.5 14 12 20.044 12 27.5 18.044 41 25.5 41Z" fill="#D80027" />
        </mask>
        <g mask="url(#eurpln_svg__a)">
            <path d="M50.593 14H4.375v14.231h46.218V14Z" fill="#fff" />
            <path d="M50.58 27.969H4.36V42.2H50.58V27.969Z" fill="#FE0201" />
        </g>
    </svg>
);

export default EURPLN;