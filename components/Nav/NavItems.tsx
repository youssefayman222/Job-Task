"use client";
import React, { useState } from "react";
import Timeline from "@/assets/nav-logos/Timeline";
import Blogs from "@/assets/nav-logos/Blogs";
import Videos from "@/assets/nav-logos/Videos";
import Messaging from "@/assets/nav-logos/Messaging";

export type IBarItem = Array<{
  logo: any;
  title: string;
  id: number;
}>;

const items: IBarItem = [
  {
    logo: Timeline,
    title: "Timeline",
    id: 1,
  },
  {
    logo: Blogs,
    title: "Blogs",
    id: 2,
  },
  {
    logo: Videos,
    title: "Videos",
    id: 3,
  },
  {
    logo: Messaging,
    title: "Messaging",
    id: 4,
  },
];

const NavItems = () => {
  const [activeID, setActiveID] = useState<number>(1);
  return (
    <div className='flex gap-[65px]'>
      {items.map(({ title, logo: Logo, id }) => (
        <div
          className='flex flex-col items-center cursor-pointer'
          onClick={() => setActiveID(id)}
        >
          <Logo active={activeID == id} />
          <p
            className={`text-[10px] font-[400] ${
              activeID == id ? "text-[#5E60FF]" : "text-[#666666]"
            }`}
          >
            {title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(NavItems);
