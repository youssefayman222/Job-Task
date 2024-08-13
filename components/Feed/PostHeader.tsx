import React from "react";
import TestUser from "@/assets/nav-logos/profile-photo.png";
import Image from "next/image";
import VerifiedIco from "@/assets/VerifiedIco";
import Saved from "@/assets/Feed/Saved";
import ThreeDots from "@/assets/Feed/ThreeDots";

const PostHeader = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-[19px]'>
        <Image
          src={TestUser}
          alt='User Profile Picture'
          className='w-[50px] h-[50px] object-cover rounded-[50px] border-[.5px] border-solid border-[#767676]'
        />
        <div>
          <div className='flex gap-[20px]'>
            <h5 className='flex items-center text-[16px] font-[600] color-[#000] gap-[7px]'>
              Josephine Fangula <VerifiedIco />
            </h5>
            <p className='text-[#5E60FF] text-[16px] font-[600] cursor-pointer follow-before'>
              Follow
            </p>
          </div>
          <div className='flex gap-[16px] color-[#808080] text-[14px] font-[400]'>
            <p>Graphic Designer</p>
            <p className='date-before'>5 week</p>
          </div>
        </div>
      </div>
      <div className='flex gap-[19px] cursor-pointer'>
        <Saved />
        <ThreeDots />
      </div>
    </div>
  );
};

export default React.memo(PostHeader);
