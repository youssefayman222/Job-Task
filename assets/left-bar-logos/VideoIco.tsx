import React from "react";

const VideoIco = () => {
  return (
    <svg
      width='20'
      height='16'
      viewBox='0 0 20 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 12H9V9H12V7H9V4H7V7H4V9H7V12ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V6.5L20 2.5V13.5L16 9.5V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2ZM2 14H14V2H2V14Z'
        fill='#1C1B1F'
      />
    </svg>
  );
};

export default React.memo(VideoIco);
