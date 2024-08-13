import React from "react";

const Videos = ({ active }: { active: boolean }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_1_848'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='25'
        height='24'
      >
        <rect
          x='0.666626'
          width='24'
          height='24'
          fill={active ? "#5E60FF" : "#D9D9D9"}
        />
      </mask>
      <g mask='url(#mask0_1_848)'>
        <path
          d='M4.66663 22C4.11663 22 3.64596 21.8043 3.25463 21.413C2.86263 21.021 2.66663 20.55 2.66663 20V10C2.66663 9.45 2.86263 8.979 3.25463 8.587C3.64596 8.19567 4.11663 8 4.66663 8H20.6666C21.2166 8 21.6876 8.19567 22.0796 8.587C22.471 8.979 22.6666 9.45 22.6666 10V20C22.6666 20.55 22.471 21.021 22.0796 21.413C21.6876 21.8043 21.2166 22 20.6666 22H4.66663ZM4.66663 20H20.6666V10H4.66663V20ZM10.6666 19L16.6666 15L10.6666 11V19ZM4.66663 7V5H20.6666V7H4.66663ZM7.66663 4V2H17.6666V4H7.66663Z'
          fill={active ? "#5E60FF" : "#666666"}
        />
      </g>
    </svg>
  );
};

export default React.memo(Videos);
