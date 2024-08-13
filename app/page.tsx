import PlusIcon from "@/assets/PlusIcon";
import Ads from "@/components/Ads/Ads";
import Feed from "@/components/Feed/Feed";
import ProfileCard from "@/components/ProfileCard";
import Stories from "@/components/Story/Stories";
import SuggestedFriends from "@/components/SuggestedFriends/SuggestedFriends";
import Todos from "@/components/Todos/Todos";
import TrendingHashtags from "@/components/TrendingHashtags/TrendingHashtags";
import Base from "@/Layout/Base";
import Image from "next/image";

export default function Home() {
  return (
    <Base>
      <div className='flex gap-[35px]'>
        <div>
          <Stories />
          <Feed />
        </div>
        <div>
          <ProfileCard />
          <TrendingHashtags />
          <Todos />
          <SuggestedFriends />
          <TrendingHashtags />
          <Ads />
        </div>
      </div>
      <div className='bg-[#5E60FF] w-[60px] h-[60px] rounded-[50px] fixed bottom-[24px] right-[7%] flex items-center justify-center cursor-pointer'>
        <PlusIcon />
      </div>
    </Base>
  );
}
