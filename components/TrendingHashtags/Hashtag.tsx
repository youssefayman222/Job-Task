import Earth from "@/assets/hashtags/earth";
import EN from "@/assets/hashtags/EN";
import Flag from "@/assets/hashtags/Flag";
import React from "react";

const Hashtag = ({
  type,
  name,
  count,
}: {
  type: "EN" | "Flag" | "Earth";
  name: string;
  count: number;
}) => {
  return (
    <div className='flex justify-between mb-2 cursor-pointer'>
      <div className='flex gap-[15px] '>
        {type == "EN" ? <EN /> : type == "Earth" ? <Earth /> : <Flag />}
        <p className='text-[16px] font-[400] text-[#000] text-ellipsis text-nowrap w-[175px] overflow-hidden'>
          #{name}
        </p>
      </div>
      <div className='bg-[#F0F2F5] min-w-[74px] h-[20px] rounded-[24px] py-[2px] px-[12px]'>
        <p className='text-[12px] font-normal'>{count}K Post</p>
      </div>
    </div>
  );
};

export default React.memo(Hashtag);
