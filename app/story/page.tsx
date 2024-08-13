"use client";
import StoryCarousel from "@/components/StoryCarsoul/Carsoul";
import React, { useEffect, useState } from "react";
import StoryPhoto from "@/assets/StoryPhoto.png";
import XIcon from "@/assets/XIcon";
import SendIcon from "@/assets/Feed/SendIcon";
import { useRouter } from "next/navigation";

const SLIDE_COUNT = 5;
const SLIDES = [
  {
    id: 1,
    image: StoryPhoto,
  },
  {
    id: 1,
    image: StoryPhoto,
  },
  {
    id: 1,
    image: StoryPhoto,
  },
  {
    id: 1,
    image: StoryPhoto,
  },
  {
    id: 1,
    image: StoryPhoto,
  },
];

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div
        className='absolute right-[23px] top-[23px] z-10'
        onClick={() => router.push("/")}
      >
        <XIcon />
      </div>
      <StoryCarousel slides={SLIDES} />
    </>
  );
};

export default Page;
