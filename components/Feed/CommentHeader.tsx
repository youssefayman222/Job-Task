import React from "react";
import UserPhoto from "@/assets/nav-logos/profile-photo.png";
import Image from "next/image";

const CommentHeader = ({
  userPhoto,
  username,
}: {
  userPhoto: any;
  username: string;
}) => {
  return (
    <div className='flex items-center gap-[10px]'>
      <Image
        src={userPhoto}
        alt='User photo'
        className='w-[30px] h-[30px] border-solid border-[.5px] object-cover border-[#767676] rounded-[50px]'
      />
      <h5 className='text-[16px] font-[600] text-[#000]'>{username}</h5>
    </div>
  );
};

export default React.memo(CommentHeader);
