import React from "react";
import PostPhoto from "@/assets/Feed/Post-Photo.jpeg";
import Image from "next/image";

const PostContent = () => {
  return (
    <div className='mt-4'>
      <p>
        Taking care of the family is one of the most important things in life.{" "}
      </p>
      <Image src={PostPhoto} alt="Post's photo" className='rounded-[15px]' />
    </div>
  );
};

export default React.memo(PostContent);
