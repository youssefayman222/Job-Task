import React from "react";

const SendMessageIco = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_1_337'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <rect width='24' height='24' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_1_337)'>
        <path
          d='M10.85 15L10.55 13.5C10.35 13.4167 10.1627 13.3293 9.988 13.238C9.81267 13.146 9.63333 13.0333 9.45 12.9L8 13.35L7 11.65L8.15 10.65C8.11667 10.4167 8.1 10.2 8.1 10C8.1 9.8 8.11667 9.58333 8.15 9.35L7 8.35L8 6.65L9.45 7.1C9.63333 6.96667 9.81267 6.854 9.988 6.762C10.1627 6.67067 10.35 6.58333 10.55 6.5L10.85 5H12.85L13.15 6.5C13.35 6.58333 13.5377 6.675 13.713 6.775C13.8877 6.875 14.0667 7 14.25 7.15L15.7 6.65L16.7 8.4L15.55 9.4C15.5833 9.6 15.6 9.80833 15.6 10.025C15.6 10.2417 15.5833 10.45 15.55 10.65L16.7 11.65L15.7 13.35L14.25 12.9C14.0667 13.0333 13.8877 13.146 13.713 13.238C13.5377 13.3293 13.35 13.4167 13.15 13.5L12.85 15H10.85ZM11.85 12C12.4 12 12.871 11.8043 13.263 11.413C13.6543 11.021 13.85 10.55 13.85 10C13.85 9.45 13.6543 8.979 13.263 8.587C12.871 8.19567 12.4 8 11.85 8C11.3 8 10.829 8.19567 10.437 8.587C10.0457 8.979 9.85 9.45 9.85 10C9.85 10.55 10.0457 11.021 10.437 11.413C10.829 11.8043 11.3 12 11.85 12Z'
          fill='#1C1B1F'
        />
        <path
          d='M2 22V4C2 3.45 2.196 2.979 2.588 2.587C2.97933 2.19567 3.45 2 4 2H20C20.55 2 21.021 2.19567 21.413 2.587C21.8043 2.979 22 3.45 22 4V16C22 16.55 21.8043 17.021 21.413 17.413C21.021 17.8043 20.55 18 20 18H6L2 22ZM4 17.175L5.175 16H20V4H4V17.175Z'
          fill='#1C1B1F'
        />
      </g>
    </svg>
  );
};

export default React.memo(SendMessageIco);
