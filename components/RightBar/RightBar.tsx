import AddFriendIco from "@/assets/right-bar-logos/AddFriendIco";
import SendMessageIco from "@/assets/right-bar-logos/SendMessageIco";
import React, { useMemo } from "react";
import TestUser from "@/assets/right-bar-logos/test-user.png";
import UserAvatar from "./UserAvatar";
import SearchFriendIco from "@/assets/right-bar-logos/SearchFriendIco";

const RightBar = () => {
  const users = useMemo(
    () => [
      {
        photo: TestUser,
        isOnline: true,
      },
      {
        photo: TestUser,
        isOnline: true,
      },
      {
        photo: TestUser,
        isOnline: false,
      },
    ],
    []
  );
  return (
    <div className='main-filter fixed w-[100px] h-[100%] right-0 top-[55px] bg-[#fff] -z-10'>
      <div className='relative mt-[32px] flex flex-col gap-[25px] w-full items-center border-b-[1px] border-solid border-[#000] pb-4'>
        <div className='w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#ECECEC] cursor-pointer'>
          <SendMessageIco />
        </div>
        <div className='w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#ECECEC] cursor-pointer'>
          <AddFriendIco />
        </div>
      </div>
      <div className='flex items-center flex-col mt-3 gap-[15px]'>
        {users.map(({ photo, isOnline }) => (
          <UserAvatar src={photo} online={isOnline} />
        ))}
      </div>
      <div className='w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-[#ECECEC] text-center absolute left-[25%] bottom-[10%] cursor-pointer'>
        <SearchFriendIco />
      </div>
    </div>
  );
};

export default React.memo(RightBar);
