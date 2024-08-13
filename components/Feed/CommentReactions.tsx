import LikeComment from "@/assets/Feed/LikeComment";
import ReplyIco from "@/assets/Feed/ReplyIco";
import React from "react";

const CommentReactions = ({
  likesCount,
  repliesCount,
}: {
  likesCount: number;
  repliesCount: number;
}) => {
  return (
    <div className='absolute right-[-69px] top-[12px] flex flex-col gap-[8px] '>
      <div className='bg-white flex items-center gap-[10px] border-solid border-[#ABABAB] border-[1px] rounded-[20px] h-[26px]  px-2 w-fit'>
        <LikeComment />
        <p className='text-[#525252] text-[12px] font-[400]'>
          {likesCount}k Like
        </p>
      </div>
      <div className='bg-white flex items-center gap-[10px] border-solid border-[#ABABAB] border-[1px] rounded-[20px] h-[26px]  px-2 w-fit'>
        <ReplyIco />
        <p className='text-[#525252] text-[12px] font-[400]'>
          {repliesCount} Reply
        </p>
      </div>
    </div>
  );
};

export default React.memo(CommentReactions);
