import React from "react";
import Friend from "./Friend";

const SuggestedFriends = () => {
  return (
    <div className='w-[350px]  bg-white post-shadow rounded-[20px] mt-7 p-5 '>
      <h4 className='text-[16px] font-[700] text-[#000] mb-5'>
        People you may know
      </h4>
      <div className='flex flex-col gap-[20px]'>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};

export default SuggestedFriends;
