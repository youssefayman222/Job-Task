"use client";
import React, { useRef, useState } from "react";
import AddStory from "./AddStory";
import UserStory from "./UserStory";

const Stories = () => {
  const scrollContainerRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className='max-w-[40.32rem] h-[119px] rounded-[20px] bg-[#fff] flex items-center p-[20px] main-shadow overflow-scroll gap-[15px] hide-scrollbar'
    >
      <AddStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
    </div>
  );
};

export default React.memo(Stories);
