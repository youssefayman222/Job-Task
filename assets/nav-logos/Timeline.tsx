import React from "react";

const Timeline = ({ active }: { active: boolean }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_1_842'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill={active ? "#5E60FF" : "#D9D9D9"} />
      </mask>
      <g mask='url(#mask0_1_845)'>
        <path
          d='M5.33331 21C4.78331 21 4.31231 20.8043 3.92031 20.413C3.52898 20.021 3.33331 19.55 3.33331 19V5C3.33331 4.45 3.52898 3.979 3.92031 3.587C4.31231 3.19567 4.78331 3 5.33331 3H16.3333L21.3333 8V19C21.3333 19.55 21.1376 20.021 20.7463 20.413C20.3543 20.8043 19.8833 21 19.3333 21H5.33331ZM5.33331 19H19.3333V9H15.3333V5H5.33331V19ZM7.33331 17H17.3333V15H7.33331V17ZM7.33331 9H12.3333V7H7.33331V9ZM7.33331 13H17.3333V11H7.33331V13Z'
          fill={active ? "#5E60FF" : "#D9D9D9"}
        />
      </g>
    </svg>
  );
};

export default React.memo(Timeline);
