import Image from "next/image";
import React from "react";
import AccountIco from "@/assets/left-bar-logos/AccountIco";
import HashtagIco from "@/assets/left-bar-logos/HashtagIco";
import Saved from "@/assets/Feed/Saved";
import GroupsBlack from "@/assets/left-bar-logos/GroupsBlack";
import EventsBlack from "@/assets/left-bar-logos/EventsBlack";
import LikeComment from "@/assets/Feed/LikeComment";
import VideoIco from "@/assets/left-bar-logos/VideoIco";
import ChannelsIco from "@/assets/left-bar-logos/ChannelsIco";

const LeftBarItem = ({ icon: Icon, name }: { icon: any; name: string }) => {
  return (
    <div className='flex flex-col items-center text-center text-wrap cursor-pointer'>
      <Icon />
      <p>{name}</p>
    </div>
  );
};

const LeftBarSm = () => {
  return (
    <div className='main-filter fixed w-[100px] h-[100%] left-0 top-[55px] bg-[#fff] -z-10 2xl:hidden flex'>
      <div className='mt-[-100px] flex flex-col justify-center gap-[25px] items-center'>
        <LeftBarItem icon={AccountIco} name='Feed' />
        <LeftBarItem icon={HashtagIco} name='Hashtags' />
        <LeftBarItem icon={Saved} name='Saved Posts' />
        <LeftBarItem icon={GroupsBlack} name='Groups' />
        <LeftBarItem icon={EventsBlack} name='Events' />
        <LeftBarItem icon={LikeComment} name='Liked' />
        <LeftBarItem icon={VideoIco} name='Upload Video' />
        <LeftBarItem icon={ChannelsIco} name='Channels' />
      </div>
    </div>
  );
};

export default React.memo(LeftBarSm);
