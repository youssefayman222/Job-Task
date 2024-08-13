import React from "react";

const PlusIcon = () => {
  return (
    <svg
      width='34'
      height='34'
      viewBox='0 0 34 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 0.640015V33.36'
        stroke='white'
        stroke-width='4'
        stroke-miterlimit='10'
      />
      <path
        d='M33.36 17H0.640015'
        stroke='white'
        stroke-width='4'
        stroke-miterlimit='10'
      />
    </svg>
  );
};

export default React.memo(PlusIcon);
