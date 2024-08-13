import OnlineIndicator from "@/assets/right-bar-logos/OnlineIndicator";
import Image from "next/image";
import React from "react";

const UserAvatar = ({ src, online }: { src: any; online: boolean }) => {
  return (
    <div className='relative cursor-pointer'>
      <Image
        src={src}
        alt='A friend'
        className='w-[50px] h-[50px] object-cover border-solid border-[.5px] border-[#767676] rounded-[25px]'
      />
      {online && (
        <div className='absolute bottom-0 right-0'>
          <OnlineIndicator />
        </div>
      )}
    </div>
  );
};

export default React.memo(UserAvatar);
