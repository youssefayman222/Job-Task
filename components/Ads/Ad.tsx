import Image from "next/image";
import React from "react";
import AdPhoto from "@/assets/Ad-Photo.png";

const Ad = () => {
  return (
    <div className='flex w-[330px] h-[160px] cursor-pointer'>
      <Image
        src={AdPhoto}
        alt='Ad Photo'
        className='w-[160px] h-[160px] object-cover rounded-[20px] rounded-br-none rounded-tr-none'
      />
      <div className='bg-[#ECECEC] rounded-[20px] rounded-bl-none rounded-tl-none p-3 flex flex-col justify-between'>
        <h6 className='text-[14px] font-[400]'>Ford Motor Company</h6>
        <p className='text-[12px] font-[400] text-[#767676] mb-1'>
          https://www.ford.com/usa
        </p>
        <p className='text-[15px] font-[400] text-[#000] text-center w-[135px] '>
          manufacturer headquartered in Dearborn,
        </p>
        <button className='m-auto rounded-[30px] py-[5px] px-[10px] bg-[#808080] text-white text-[14px]'>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default React.memo(Ad);
