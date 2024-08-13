"use client";
import Messaging from "@/assets/nav-logos/Messaging";
import React, { useState } from "react";

const Messages = () => {
  const [hasMessages, setHasNMessages] = useState(true);
  return (
    <div className='relative'>
      <Messaging active={false} color='#1C1B1F' pointer />
      {hasMessages && (
        <div className='absolute w-[5px] h-[5px] rounded-[50%] bg-[#5E60FF] bottom-[18px] right-[0px]' />
      )}
    </div>
  );
};

export default React.memo(Messages);
