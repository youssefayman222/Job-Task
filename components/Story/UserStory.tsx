"use client";
import Image from "next/image";
import React from "react";
import TestUserStory from "@/assets/story-section/test-story-user.png";
import AddStoryBtn from "@/assets/story-section/AddStoryBtn";
import { useRouter } from "next/navigation";

const UserStory = () => {
  const router = useRouter();
  return (
    <div className='cursor-pointer' onClick={() => router.push("/story")}>
      <div className='relative'>
        <Image
          src={TestUserStory}
          alt='Your Photo | Add Photo'
          className='object-cover w-[60px] h-[60px] rounded-[50px] border-[3px] border-[#808080] border-dashed'
        />
        {/* <div className='w-[30px] h-[10px] bg-[#808080] rounded-[0px]' /> */}
      </div>
      <p className='w-[76px] overflow-hidden text-ellipsis text-[#000] text-[12px] font-[400]'>
        Josephinaededi
      </p>
    </div>
  );
};

export default React.memo(UserStory);
