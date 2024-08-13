import Image from "next/image";
import React from "react";
import PostPhoto from "@/assets/Feed/Blog-Photo.jpeg";

const BlogViewer = () => {
  return (
    <div className='mt-4'>
      <p className='mb-2'>
        Taking care of the family is one of the most important things in life.{" "}
      </p>
      <div className='flex rounded-[15px] border-[1px] border-solid border-[#ABABAB] gap-[25px]'>
        <Image
          src={PostPhoto}
          alt='Post Photo'
          className='w-[215px] h-[230px] rounded-[15px] object-cover'
        />
        <div className='mt-[10px]'>
          <h3 className='text-[18px] font-[600] mb-[10px]'>
            6 New Social Media Apps Every Business Owner Should Know{" "}
          </h3>
          <p className='text-[14.5px] font-[400]'>
            6 New Social Media Apps Every Business Owner Should Know In today's
            world, it can be hard to know which platforms are worth your time.
            Stay on top of the trending social media apps and incorporate them
          </p>
          <button className='mt-2 border-[#ABABAB] border-solid border-[1.5px] w-[100px] h-[30px] rounded-[15px] text-[16px] font-[600] text-[#808080]'>
            see more
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogViewer);
