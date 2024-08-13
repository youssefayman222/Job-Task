"use client";
import React, { useState } from "react";
import { IBarItem } from "../Nav/NavItems";
import HomeIco from "@/assets/left-bar-logos/HomeIco";
import AdsIco from "@/assets/left-bar-logos/AdsIco";
import BlogsIco from "@/assets/left-bar-logos/BlogsIco";
import Donation from "@/assets/left-bar-logos/Donation";
import EventsIco from "@/assets/left-bar-logos/EventsIco";
import FriendsIco from "@/assets/left-bar-logos/FriendsIco";
import GroupsIco from "@/assets/left-bar-logos/GroupsIco";
import JobIco from "@/assets/left-bar-logos/JobIco";
import MembershipsIco from "@/assets/left-bar-logos/MembershipsIco";
import SavedIco from "@/assets/left-bar-logos/SavedIco";
import TrendIco from "@/assets/left-bar-logos/TrendIco";
import BarItem from "./BarItem";
import LeftBarSm from "./LeftBarSm";

const items: IBarItem = [
  {
    logo: HomeIco,
    title: "News Feed",
    id: 1,
  },
  {
    logo: TrendIco,
    title: "Trend Hashtags",
    id: 2,
  },
  {
    logo: SavedIco,
    title: "Saved Posts",
    id: 3,
  },
  {
    logo: GroupsIco,
    title: "Groups",
    id: 4,
  },
  {
    logo: BlogsIco,
    title: "Blogs",
    id: 5,
  },
  {
    logo: EventsIco,
    title: "Events",
    id: 6,
  },
  {
    logo: FriendsIco,
    title: "Find friends",
    id: 7,
  },
  {
    logo: JobIco,
    title: "Job Search",
    id: 8,
  },
  {
    logo: Donation,
    title: "Donation",
    id: 9,
  },
  {
    logo: AdsIco,
    title: "Create advertisement",
    id: 10,
  },
  {
    logo: MembershipsIco,
    title: "Update membership",
    id: 11,
  },
];

const LeftBar = () => {
  const [selectedID, setSelectedID] = useState(1);
  return (
    <>
      <div className='main-filter fixed w-[282px] h-[100%] left-0 top-[55px] bg-[#fff] -z-10 hidden 2xl:flex'>
        <div className='mt-[40px] flex flex-col gap-[10px] w-full items-center'>
          {items.map(({ logo, title, id }) => (
            <BarItem
              text={title}
              icon={logo}
              key={id}
              active={selectedID == id}
              onClick={() => setSelectedID(id)}
            />
          ))}
        </div>
      </div>
      <LeftBarSm />
    </>
  );
};

export default React.memo(LeftBar);
