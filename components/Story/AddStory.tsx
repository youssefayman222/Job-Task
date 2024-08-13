import Image from "next/image";
import React from "react";
import TestUserStory from "@/assets/story-section/test-story-user.png";
import AddStoryBtn from "@/assets/story-section/AddStoryBtn";

/* Frame 110 */

const AddStory = () => {
  return (
    <div className='cursor-pointer'>
      <div className='relative'>
        <Image
          src={TestUserStory}
          alt='Your Photo | Add Photo'
          className='object-cover w-[60px] h-[60px] rounded-[50px]'
        />
        <div className='absolute bottom-0 right-[.66rem]'>
          <AddStoryBtn />
        </div>
        <input
          type='file'
          className='absolute top-[6%] h-[100%] w-[84%] opacity-0 cursor-pointer'
        />
      </div>
      <p className='w-[76px] overflow-hidden text-ellipsis text-[#000] text-[12px] font-[400]'>
        Josephinaededi
      </p>
    </div>
  );
};

export default React.memo(AddStory);
