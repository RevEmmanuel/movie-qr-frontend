import React from "react";
import logo from "../images/logo.png";
import logoMob from "../images/tv.svg";

export default function Header() {

  return (
    // Container for Header
    <div className="flex w-[100%] justify-between items-center relative top-10 left-0 px-8 -720:p-2 -720:flex-col -720:items-start -720:gap-4">
      {/* container for logo */}
      <div>
        <img src={logo} className="-720:hidden" alt="" />
        <img src={logoMob} className="-720:block hidden" alt="" />
      </div>

      {/* container for sign in and hamburger */}
      <div className="flex justify-center items-center text-white gap-4 -720:absolute -720:top-4 -400:top-4  -720:right-4">
        <div className="bg-mainRed w-[40px] h-[40px] p-2 rounded-[50%] flex flex-col justify-center items-center gap-[6px]">
          <div className="w-[90%] rounded-[3px] bg-white h-[3px]"></div>
          <div className="w-[90%] rounded-[3px] bg-white h-[3px]"></div>
        </div>
      </div>
    </div>
  );
}
