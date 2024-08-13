import React from "react";

const SavedIco = () => {
  return (
    <svg
      width='14'
      height='18'
      viewBox='0 0 14 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 18V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H12C12.55 0 13.021 0.195667 13.413 0.587C13.8043 0.979 14 1.45 14 2V18L7 15L0 18ZM2 14.95L7 12.8L12 14.95V2H2V14.95Z'
        fill='#5E60FF'
      />
    </svg>
  );
};

export default React.memo(SavedIco);
