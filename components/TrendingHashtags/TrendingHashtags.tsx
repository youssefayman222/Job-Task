import React from "react";
import Hashtag from "./Hashtag";
import { Separator } from "../ui/separator";

const TrendingHashtags = () => {
  return (
    <div className='w-[350px]  bg-white post-shadow rounded-[20px] mt-7 p-5 '>
      <h4 className='text-[16px] font-[700] text-[#000] mb-5'>
        Trending Hashtags
      </h4>
      <Hashtag type='Earth' name='New_Social_media' count={10} />
      <Hashtag type='Earth' name='video_Games' count={500} />
      <Hashtag type='Earth' name='social_platform' count={145} />
      <Separator className='mb-3' />
      <Hashtag type='EN' name='one_ummah' count={125} />
      <Hashtag type='EN' name='new_social_platform' count={123} />
      <Hashtag type='EN' name='new_social_platform' count={120} />
      <Separator className='mb-3' />
      <Hashtag type='Flag' name='Trend_Hashtag_in_ABCDE' count={105} />
      <Hashtag type='Flag' name='new_social_platform' count={25} />
      <Hashtag type='Flag' name='new_social_platform' count={15} />
    </div>
  );
};

export default React.memo(TrendingHashtags);
