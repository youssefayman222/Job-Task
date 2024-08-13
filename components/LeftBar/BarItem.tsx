import React from "react";
import BarRectangle from "./BarRectangle";

const BarItem = ({
  active,
  text,
  icon: Icon,
  onClick,
}: {
  active?: boolean;
  text: string;
  icon: any;
  onClick?: () => any;
}) => {
  return (
    <div
      className={`flex items-center gap-[10px] cursor-pointer w-[242px] h-[48px] px-[15px]  rounded-[15px] transition-[1.5s] ${
        active ? "bg-[#F0F2F5]" : "bg-white"
      } relative`}
      onClick={() => onClick?.()}
    >
      {active && (
        <div className='absolute left-[-20px]'>
          <BarRectangle />
        </div>
      )}
      <Icon />
      <p className='text-[#434343] text-[16px] font-[600]'>{text}</p>
      {active && (
        <div className='absolute right-[-20px] -rotate-180'>
          <BarRectangle />
        </div>
      )}
    </div>
  );
};

export default React.memo(BarItem);
