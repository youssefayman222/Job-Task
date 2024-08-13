import React from "react";
import Ad from "./Ad";

const Ads = () => {
  return (
    <div className='w-[350px] h-[350px] bg-white post-shadow p-[10px] rounded-[20px] mt-5 flex gap-[10px] flex-col'>
      <Ad />
      <Ad />
    </div>
  );
};

export default React.memo(Ads);
