import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <div className='mt-7 flex flex-col gap-4'>
      <Post type='Blog' />
      <Post type='Post' />
    </div>
  );
};

export default React.memo(Feed);
