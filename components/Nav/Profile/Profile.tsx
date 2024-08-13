import React from "react";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Info from "./Info";

const Profile = () => {
  return (
    <div className='flex gap-[21px] items-center'>
      <Messages />
      <Notifications />
      <Info />
    </div>
  );
};

export default React.memo(Profile);
