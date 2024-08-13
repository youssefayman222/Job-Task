"use client";
import NotificationsIcon from "@/assets/nav-logos/NotificationsIcon";
import React, { useState } from "react";

const Notifications = () => {
  const [hasNotifications, setHasNotifications] = useState(true);
  return (
    <div className='relative'>
      <NotificationsIcon />
      {hasNotifications && (
        <div className='absolute w-[17px] h-[17px] rounded-[50%] bg-[#5E60FF] top-[-8px] right-[-9px] flex items-center justify-center'>
          <p className='text-[12.5px] text-[#fff] font-[600]'>8</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(Notifications);
