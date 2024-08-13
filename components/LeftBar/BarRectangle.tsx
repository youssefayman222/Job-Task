import React from "react";

const BarRectangle = () => {
  return (
    <svg
      width='5'
      height='50'
      viewBox='0 0 5 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.38419e-06 -2.18557e-07C2.76143 -9.78512e-08 5 2.23858 5 5L5 45C5 47.7614 2.76142 50 1.98616e-07 50L2.38419e-06 -2.18557e-07Z'
        fill='#5E60FF'
      />
    </svg>
  );
};

export default React.memo(BarRectangle);
