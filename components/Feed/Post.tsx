"use client";
import React, { useState } from "react";

import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostReactions from "./PostReactions";
import Comments from "./Comments";
import BlogViewer from "./BlogViewer";

const Post = ({ type }: { type: "Blog" | "Post" }) => {
  const [showComment, setShowComment] = useState(false);
  return (
    <div className='w-[39.4rem] bg-[#fff] rounded-[25px] p-[15px] post-shadow'>
      <PostHeader />
      {type == "Blog" ? <BlogViewer /> : <PostContent />}
      <PostReactions onComment={() => setShowComment((prev) => !prev)} />
      {showComment && <Comments />}
    </div>
  );
};

export default React.memo(Post);
