"use client";
import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const todos = [
  {
    id: 1,
    content: "Read pages 20 from marketing book",
  },
  {
    id: 2,
    content: "important task to get done today",
  },
  {
    id: 3,
    content:
      "Here is an example of putting long tasks that skip the first line",
  },
];

const Todos = () => {
  return (
    <div className='w-[350px]  bg-white post-shadow rounded-[20px] mt-7 p-5'>
      <h4 className='text-[16px] font-[700] text-[#000] mb-5'>
        3 Important Things To Get Done Today
      </h4>
      <div className='flex gap-[20px] flex-col'>
        <Todo content={"Read pages 20 from marketing book"} checked={false} />
        <Todo content={"important task to get done today"} checked={true} />
        <Todo
          content={
            "Here is an example of putting long tasks that skip the first line"
          }
          checked={false}
        />
      </div>
    </div>
  );
};

export default React.memo(Todos);
