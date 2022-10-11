import React from 'react';

const Spot = ({ ...props }) => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
        <g clipPath="url(#spot_svg__a)">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.994.882C6.614.882.631 6.895.631 14.312s5.983 13.43 13.363 13.43 13.363-6.013 13.363-13.43S21.374.882 13.994.882Z" fill="#3D3E3C" />
            <path
                d="M14.403 8.2a.803.803 0 0 0-.787-.603c-.315 0-.63.21-.761.603-1.207 4.119-3.83 5.247-3.83 8.158 0 2.597 2.046 4.67 4.617 4.67 2.544 0 4.617-2.073 4.617-4.67 0-2.911-2.623-4.013-3.856-8.158Zm-.761 11.988c-2.098 0-3.777-1.705-3.777-3.83 0-1.259.603-2.125 1.416-3.331.787-1.076 1.731-2.44 2.361-4.46.603 2.02 1.574 3.384 2.334 4.486.84 1.18 1.443 2.046 1.443 3.305 0 2.125-1.705 3.83-3.777 3.83Zm0-1.679a2.072 2.072 0 0 1-2.098-2.098c0-.21-.21-.42-.42-.42-.236 0-.42.21-.42.42a2.933 2.933 0 0 0 2.938 2.937c.21 0 .42-.183.42-.42 0-.21-.21-.419-.42-.419Z"
                fill="#fff"
            />
        </g>
        <defs>
            <clipPath id="spot_svg__a">
                <path fill="#fff" transform="translate(.63 .043)" d="M0 0h26.86v27.699H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default Spot;
