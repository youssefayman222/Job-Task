import React from "react";
import ProfilePhoto from "@/assets/nav-logos/profile-photo.png";
import Image from "next/image";

const Info = () => {
  return (
    <div className='w-[120px] h-[40px] rounded-[25px] flex items-center gap-[10px] bg-[#ECECEC]'>
      <div className='border-[1px] border-solid border-[#767676] rounded-[25px]'>
        <Image
          src={ProfilePhoto}
          alt='User Photo'
          //   width={40}
          //   height={40}
          className='rounded-[100px] w-[40px] h-[40px] object-cover'
        />
      </div>
      <p className='text-[14px] font-[600]'>Ibrahim</p>
    </div>
  );
};

export default React.memo(Info);
