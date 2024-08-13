import React from "react";

const Flag = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_1_188'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='20'
        height='20'
      >
        <rect y='6.10352e-05' width='20' height='20' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1_188)'>
        <path
          d='M4 17.0001V3.00006H11L11.5 5.00006H16V13.0001H11L10.5 11.0001H5.5V17.0001H4ZM12.1667 11.5001H14.5V6.50006H10.3333L9.83333 4.50006H5.5V9.50006H11.6667L12.1667 11.5001Z'
          fill='#1C1B1F'
        />
      </g>
    </svg>
  );
};

export default React.memo(Flag);
