import LeftBar from "@/components/LeftBar/LeftBar";
import Navbar from "@/components/Nav/Navbar";
import RightBar from "@/components/RightBar/RightBar";
import React from "react";

const Base = ({ children }: { children: any }) => {
  return (
    <>
      <Navbar />
      <RightBar />
      <LeftBar />
      {children}
    </>
  );
};

export default Base;
