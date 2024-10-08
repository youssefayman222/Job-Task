import React from "react";

const BlogsIco = () => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2 18C1.45 18 0.979 17.8043 0.587 17.413C0.195667 17.021 0 16.55 0 16V2C0 1.45 0.195667 0.979 0.587 0.587C0.979 0.195667 1.45 0 2 0H13L18 5V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H2ZM2 16H16V6H12V2H2V16ZM4 14H14V12H4V14ZM4 6H9V4H4V6ZM4 10H14V8H4V10Z'
        fill='#5E60FF'
      />
    </svg>
  );
};

export default React.memo(BlogsIco);
