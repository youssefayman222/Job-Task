import React from "react";

const ProfileStatistics = ({
  number,
  name,
}: {
  number: number;
  name: string;
}) => {
  return (
    <div className='flex flex-col items-center'>
      <h6 className='text-[16px] font-[600]'>{number}</h6>
      <p className='text-[#808080] text-[14px] font-[400]'>{name}</p>
    </div>
  );
};

export default ProfileStatistics;
