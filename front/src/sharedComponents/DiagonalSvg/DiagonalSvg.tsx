import React, { FC } from 'react';

type DiagonalSvgProps = {
  className: string;
};

const DiagonalSvg: FC<DiagonalSvgProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 10'
    preserveAspectRatio='none'
  >
    <defs>
      <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
        <stop offset='0%' stopColor='#c02d28'></stop>
        <stop offset='100%' stopColor='#e66225'></stop>
      </linearGradient>
    </defs>
    <polygon points='0,2 0,0 100,0 100,10' fill='url(#linear)'></polygon>
  </svg>
);

export default DiagonalSvg;
