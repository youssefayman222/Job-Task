import React from "react";
import { Checkbox } from "../ui/checkbox";

const Todo = ({ checked, content }: { checked: boolean; content: string }) => {
  return (
    <div
      className={`w-[320px]  rounded-[15px] py-[5px] px-[10px] ${
        checked ? "bg-[#ECECEC]" : "bg-[#5E60FF26]"
      } flex justify-between items-center cursor-pointer`}
    >
      <p
        className={`${
          checked ? " text-[#808080] line-through" : "text-[#000]"
        } text-[15px] font-[400]`}
      >
        {content}
      </p>
      <Checkbox checked={checked} />
    </div>
  );
};

export default React.memo(Todo);
