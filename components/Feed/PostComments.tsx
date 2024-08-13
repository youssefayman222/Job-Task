import React from "react";
import Image from "next/image";
import LikeComment from "@/assets/Feed/LikeComment";
import ReplyIco from "@/assets/Feed/ReplyIco";
import CommentHeader from "./CommentHeader";
import CommentReactions from "./CommentReactions";

export type Comment = {
  userPhoto: any;
  username: string;
  content: string;
  reactions: {
    repliesCount: number;
    likesCount: number;
  };
  replies: Comment[];
};

// * Exposes a comment with its replies
// type CommentWReplies = {
//   comment: {
//     data: Comment;
//     replies: CommentWReplies[];
//   };
// };

const PostComments = ({
  userPhoto,
  username,
  content,
  reactions,
  replies,
}: Comment) => {
  return (
    <div className='mt-5'>
      <div className='w-fit max-w-[520px] text-wrap pb-[11px] pr-[2.4rem] pt-[6px] pl-[8px] rounded-[20px] bg-[#ECECEC] flex flex-col relative'>
        <CommentHeader userPhoto={userPhoto} username={username} />
        <p className='ml-[30px] text-[#000] text-[15px] font-[400]'>
          {content}
        </p>
        <CommentReactions
          repliesCount={reactions.repliesCount}
          likesCount={reactions.likesCount}
        />
      </div>
      <div className='ml-5'>
        {replies.map((data) => (
          <PostComments
            userPhoto={data.userPhoto}
            username={data.username}
            content={data.content}
            reactions={data.reactions}
            replies={data.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PostComments);
