import React from 'react';

const USDSEK = ({ ...props }) => (
    <svg viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
        <path d="M13.34 26.68c7.368 0 13.34-5.972 13.34-13.34C26.68 5.973 20.708 0 13.34 0 5.973 0 0 5.973 0 13.34c0 7.368 5.973 13.34 13.34 13.34Z" fill="#F0F0F0" />
        <path
            d="M12.762 13.34h13.92c0-1.204-.16-2.37-.46-3.48h-13.46v3.48ZM12.762 6.38h11.962a13.41 13.41 0 0 0-3.078-3.48h-8.884v3.48ZM13.343 26.68c3.14 0 6.025-1.085 8.304-2.9H5.039a13.283 13.283 0 0 0 8.304 2.9ZM1.961 20.3h22.764a13.26 13.26 0 0 0 1.499-3.48H.463A13.26 13.26 0 0 0 1.96 20.3Z"
            fill="#D80027"
        />
        <path
            d="M6.18 2.083h1.215l-1.13.822.431 1.329-1.13-.821-1.131.821.373-1.148A13.413 13.413 0 0 0 2.22 5.969h.39l-.72.523c-.112.187-.22.377-.323.57l.344 1.058-.641-.466c-.16.338-.305.683-.436 1.036l.378 1.165H2.61l-1.13.822.431 1.329-1.13-.822-.678.493C.035 12.222 0 12.777 0 13.34h13.34V0c-2.635 0-5.092.764-7.16 2.083Zm.516 9.923-1.13-.822-1.131.822.432-1.33-1.131-.82h1.398l.431-1.33.432 1.33h1.398l-1.13.82.431 1.33Zm-.432-5.215.432 1.329-1.13-.821-1.131.821.432-1.33-1.131-.82h1.398l.431-1.33.432 1.33h1.398l-1.13.82Zm5.217 5.215-1.13-.822-1.131.822.432-1.33-1.131-.82h1.398l.431-1.33.432 1.33h1.398l-1.13.82.431 1.33Zm-.432-5.215.432 1.329-1.13-.821-1.131.821.432-1.33-1.131-.82h1.398l.431-1.33.432 1.33h1.398l-1.13.82Zm0-3.886.432 1.329-1.13-.821-1.131.821.432-1.33-1.131-.82h1.398l.431-1.33.432 1.33h1.398l-1.13.82Z"
            fill="#0052B4"
        />
        <path d="M24.33 40.91c7.5 0 13.58-6.08 13.58-13.58s-6.08-13.58-13.58-13.58-13.58 6.08-13.58 13.58 6.08 13.58 13.58 13.58Z" fill="#F0F0F0" stroke="#fff" strokeWidth={0.5} />
        <mask
            id="usdsek_svg__a"
            style={{
                maskType: 'alpha'
            }}
            maskUnits="userSpaceOnUse"
            x={11}
            y={14}
            width={27}
            height={27}
        >
            <path d="M24.5 41C31.956 41 38 34.956 38 27.5S31.956 14 24.5 14 11 20.044 11 27.5 17.044 41 24.5 41Z" fill="#D80027" />
        </mask>
        <g mask="url(#usdsek_svg__a)">
            <path d="M49 14H3v28h46V14Z" fill="#056BA8" />
            <path
                d="M23.127 42h-5.75c0-3.677-.001-7.354.003-11.031 0-.14-.033-.173-.177-.172-4.734.004-9.468.003-14.201.003v-5.6c4.738 0 9.477 0 14.216.003.13 0 .162-.031.162-.158-.004-3.682-.003-7.363-.003-11.045h5.75v11.015c0 .185 0 .185.186.185h25.452c.08 0 .161-.009.236.028V30.8c-8.571 0-17.143 0-25.715-.003-.13 0-.163.03-.163.158.004 3.682.003 7.363.003 11.045Z"
                fill="#FECC0A"
            />
        </g>
    </svg>
);

export default USDSEK;
