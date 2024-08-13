import React from "react";
import UserPhoto from "@/assets/nav-logos/profile-photo.png";
import Image from "next/image";
import Emoji from "@/assets/Feed/Emoji";
import UploadPhoto from "@/assets/Feed/UploadPhoto";
import MicIcon from "@/assets/Feed/MicIcon";
import SendIcon from "@/assets/Feed/SendIcon";

const PostComment = () => {
  return (
    <div className='w-[600px] h-[40px] rounded-[20px] bg-[#ECECEC] flex items-center mt-4'>
      <div className='mx-2 pr-3 border-solid border-r-[1px] border-[#808080]'>
        <Image
          src={UserPhoto}
          alt='User photo'
          className='w-[30px] h-[30px] rounded-[50px] object-cover border-solid border-[.5px] border-[#767676]'
        />
      </div>
      <input
        type='text'
        className='outline-none w-[75%] bg-transparent'
        placeholder='Write a comment...'
      />
      <div className='flex cursor-pointer gap-[8px]'>
        <Emoji />
        <UploadPhoto />
        <MicIcon />
        <SendIcon />
      </div>
    </div>
  );
};

export default React.memo(PostComment);
