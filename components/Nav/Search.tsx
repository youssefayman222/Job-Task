"use client";
import SearchIcon from "@/assets/nav-logos/SearchIcon";
import React, { useDeferredValue, useState } from "react";

const Search = () => {
  const [searchContent, setSearchContent] = useState();
  /**
   * * NOTE: this variable will ensure that the search content is taken right after user finishing typing
   * * to ensure seamless search experience
   */
  const deferredSearchContent = useDeferredValue(searchContent);
  return (
    <>
      <div className='flex gap-[29px]'>
        <div className=' border-[3px] border-solid border-[#D9D9D9] w-[35px] h-[35px] rounded-[50%] flex items-center justify-center flex-col'>
          <p className='text-[13px] font-[600] text-[#808080] mb-[-5px]'>99</p>
          <p className='text-[10px] font-[600] text-[#9A9A9A]'>min</p>
        </div>
        <div className='bg-[#ECECEC] rounded-[25px] flex items-center w-[280px] h-[35px]'>
          <div className=' pl-[16px] mr-[10px]'>
            <SearchIcon />
          </div>
          <input
            className='text-[16px] font-[400] text-[#808080] outline-none bg-transparent'
            placeholder='Search Dzneer'
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(Search);
