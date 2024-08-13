import Image from "next/image";
import React from "react";
import UserPhoto from "@/assets/nav-logos/profile-photo.png";
import VerifiedIco from "@/assets/VerifiedIco";

const Friend = () => {
  return (
    <div className='flex items-end'>
      <div className='flex gap-[5px]'>
        <Image
          src={UserPhoto}
          alt='User Photo'
          className='object-cover w-[50px] h-[50px] rounded-[50px] border-[1px] border-solid border-[#767676]'
        />
        <div>
          <h5 className='flex items-center text-[16px] font-[600] color-[#000] gap-[3px]'>
            Josephine Fangula <VerifiedIco />
          </h5>
          <p className='text-[12px] font-[400] text-[#808080]'>
            Followed by Random{" "}
          </p>
        </div>
        <button className='w-[82px] h-[30px] rounded-[15px] border-[2px] border-solid border-[#5E60FF] py-[4px] px-[17px] text-center text-[16px] text-[#000] font-[600] flex items-center justify-center'>
          Follow
        </button>
      </div>
    </div>
  );
};

export default React.memo(Friend);
