import React from "react";

const Messaging = ({
  active,
  color,
  pointer,
}: {
  active: boolean;
  color?: string;
  pointer?: boolean;
}) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        cursor: pointer ? "pointer" : "default",
      }}
    >
      <mask
        id='mask0_1_851'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <path
          d='M0 0H24V24H0V0Z'
          fill={active ? "#5E60FF" : color ? color : "#D9D9D9"}
        />
      </mask>
      <g mask='url(#mask0_1_851)'>
        <path
          d='M2 17V3C2 2.71667 2.096 2.479 2.288 2.287C2.47933 2.09567 2.71667 2 3 2H16C16.2833 2 16.5207 2.09567 16.712 2.287C16.904 2.479 17 2.71667 17 3V12C17 12.2833 16.904 12.5207 16.712 12.712C16.5207 12.904 16.2833 13 16 13H6L2 17ZM7 18C6.71667 18 6.479 17.904 6.287 17.712C6.09567 17.5207 6 17.2833 6 17V15H19V6H21C21.2833 6 21.5207 6.09567 21.712 6.287C21.904 6.479 22 6.71667 22 7V22L18 18H7ZM15 4H4V12.175L5.175 11H15V4Z'
          fill={active ? "#5E60FF" : color ? color : "#666666"}
        />
      </g>
    </svg>
  );
};

export default React.memo(Messaging);
