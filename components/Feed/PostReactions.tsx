import React from "react";
import Image from "next/image";
import PostPhoto from "@/assets/Feed/Post-Photo.jpeg";
import CommentIco from "@/assets/Feed/CommentIco";
import LikeIco from "@/assets/Feed/LikeIco";
import Views from "@/assets/Feed/Views";
import MembershipsIco from "@/assets/left-bar-logos/MembershipsIco";

const PostReactions = ({ onComment }: { onComment?: () => any }) => {
  return (
    <div className='mt-5 flex  items-center justify-between'>
      <div
        className='flex flex-col items-center cursor-pointer'
        onClick={() => onComment?.()}
      >
        <CommentIco />
        <p className='text-[14px] font-[400] text-[#414142]'>87.3k Comment</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <Views />
        <p className='text-[14px] font-[400] text-[#414142]'>87.3k View</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <LikeIco />
        <p className='text-[14px] font-[400] text-[#414142]'>87.3k Like</p>
      </div>
      <div className='flex flex-col items-center cursor-pointer'>
        <MembershipsIco color='#414142' />
        <p className='text-[14px] font-[400] text-[#414142]'>
          87.3k Appreciate
        </p>
      </div>
    </div>
  );
};

export default React.memo(PostReactions);
