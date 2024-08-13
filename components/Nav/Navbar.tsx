import React from "react";
import Logo from "../Logo";
import NavItems from "./NavItems";
import Search from "./Search";
import Profile from "./Profile/Profile";

const Navbar = () => {
  return (
    <div className='flex justify-between pt-[11px] h-[55px] fixed top-0 left-0 right-0 bottom-0 bg-[#fff] main-shadow z-10'>
      <div className=' pl-[68px]'>
        <Logo />
      </div>
      <div className='ml-[91px] 2xl:ml-[337.5px]'>
        <NavItems />
      </div>
      <div className='flex items-center mb-3'>
        <div className='ml-[60px]'>
          <Search />
        </div>
        <div className='ml-[16px] mr-[50px]'>
          <Profile />{" "}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
