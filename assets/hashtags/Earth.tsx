import React from "react";

const Earth = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_1_150'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='20'
        height='20'
      >
        <rect width='20' height='20' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1_150)'>
        <path
          d='M10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18ZM10 16.4375C10.2361 16.2014 10.4722 15.7604 10.7083 15.1146C10.9444 14.4688 11.125 13.7639 11.25 13H8.75C8.875 13.7639 9.05556 14.4688 9.29167 15.1146C9.52778 15.7604 9.76389 16.2014 10 16.4375ZM8.10417 16.2292C7.90972 15.8125 7.73958 15.3333 7.59375 14.7917C7.44792 14.25 7.32639 13.6528 7.22917 13H4.25C4.65278 13.7917 5.1875 14.4688 5.85417 15.0312C6.52083 15.5938 7.27083 15.9931 8.10417 16.2292ZM11.8958 16.2292C12.7292 15.9931 13.4792 15.5938 14.1458 15.0312C14.8125 14.4688 15.3472 13.7917 15.75 13H12.7708C12.6736 13.6528 12.5521 14.25 12.4062 14.7917C12.2604 15.3333 12.0903 15.8125 11.8958 16.2292ZM12.9583 11.5H16.3125C16.3819 11.2361 16.4306 10.9826 16.4583 10.7396C16.4861 10.4965 16.5 10.25 16.5 10C16.5 9.75 16.4861 9.5 16.4583 9.25C16.4306 9 16.3819 8.75 16.3125 8.5H12.9583C12.9861 8.76389 13.0035 9.02431 13.0104 9.28125C13.0174 9.53819 13.0208 9.79167 13.0208 10.0417C13.0208 10.2917 13.0174 10.5382 13.0104 10.7812C13.0035 11.0243 12.9861 11.2639 12.9583 11.5ZM8.5625 11.5H11.4375C11.4653 11.2222 11.4826 10.9618 11.4896 10.7188C11.4965 10.4757 11.5 10.2361 11.5 10C11.5 9.76389 11.4965 9.52083 11.4896 9.27083C11.4826 9.02083 11.4653 8.76389 11.4375 8.5H8.5625C8.53472 8.76389 8.51736 9.02083 8.51042 9.27083C8.50347 9.52083 8.5 9.76389 8.5 10C8.5 10.2361 8.50347 10.4792 8.51042 10.7292C8.51736 10.9792 8.53472 11.2361 8.5625 11.5ZM3.6875 11.5H7.04167C7.01389 11.2361 6.99653 10.9757 6.98958 10.7188C6.98264 10.4618 6.97917 10.2083 6.97917 9.95833C6.97917 9.70833 6.98264 9.46181 6.98958 9.21875C6.99653 8.97569 7.01389 8.73611 7.04167 8.5H3.6875C3.61806 8.76389 3.56944 9.01736 3.54167 9.26042C3.51389 9.50347 3.5 9.75 3.5 10C3.5 10.25 3.51389 10.4965 3.54167 10.7396C3.56944 10.9826 3.61806 11.2361 3.6875 11.5ZM12.7708 7H15.75C15.3472 6.20833 14.8125 5.53125 14.1458 4.96875C13.4792 4.40625 12.7292 4.00694 11.8958 3.77083C12.0903 4.1875 12.2604 4.66667 12.4062 5.20833C12.5521 5.75 12.6736 6.34722 12.7708 7ZM8.75 7H11.25C11.125 6.23611 10.9444 5.53125 10.7083 4.88542C10.4722 4.23958 10.2361 3.79861 10 3.5625C9.76389 3.79861 9.52778 4.23958 9.29167 4.88542C9.05556 5.53125 8.875 6.23611 8.75 7ZM4.25 7H7.22917C7.32639 6.34722 7.44792 5.75 7.59375 5.20833C7.73958 4.66667 7.90972 4.1875 8.10417 3.77083C7.27083 4.00694 6.52083 4.40625 5.85417 4.96875C5.1875 5.53125 4.65278 6.20833 4.25 7Z'
          fill='#1C1B1F'
        />
      </g>
    </svg>
  );
};

export default React.memo(Earth);
