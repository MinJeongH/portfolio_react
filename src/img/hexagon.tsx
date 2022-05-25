import React from 'react';
import { IImgProps } from '../export_interface';

export default function Hexagon({ fill, width, height, className }: IImgProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 302 348'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M151 0L301.688 87V261L151 348L0.311584 261V87L151 0Z'
        fill={fill}
      />
    </svg>
  );
}
