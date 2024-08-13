import React from "react";
import ProfilePic from "@/assets/Profile-Pic.png";
import UserPhoto from "@/assets/nav-logos/profile-photo.png";
import Image from "next/image";
import VerifiedIco from "@/assets/VerifiedIco";
import NewIco from "@/assets/NewIco";
import ProfileStatistics from "./ProfileStatistics";

const ProfileCard = () => {
  return (
    <div className='w-[350px] h-[200px] rounded-[20px]  post-shadow'>
      <div>
        <Image
          src={ProfilePic}
          alt='Profile Pic'
          className='rounded-[20px] rounded-br-none rounded-bl-none h-[100px] object-cover'
        />
      </div>
      <div className='bg-[#fff] rounded-[20px] rounded-tl-none rounded-tr-none z-10'>
        <div className='flex'>
          <Image
            src={UserPhoto}
            alt='Profile Photo'
            className='w-[75px] h-[75px] border-[2px] border-solid border-[#fff] avatar-shadow object-cover rounded-[50px] -mt-10 ml-3 mr-2'
          />
          <div>
            <h5 className='flex items-center text-[16px] font-[600] color-[#000] gap-[7px]'>
              Josephine Fangula <VerifiedIco />
              <span>
                <NewIco />
              </span>
            </h5>
            <p className='font-[400] text-[14px] text-[#808080]'>
              Graphic Designer
            </p>
          </div>
        </div>
        <div className='flex justify-between px-6 mt-3 pb-2'>
          <ProfileStatistics number={224} name='Posts' />
          <ProfileStatistics number={10.624} name='Followers' />
          <ProfileStatistics number={1.125} name='Following' />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileCard);
