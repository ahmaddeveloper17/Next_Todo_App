import React from "react";
import Image from "next/image";
import { Images } from "@/constants/constants";

function page() {
  return (
    <div className="bg w-full h-full flex flex-col  ">
      <Image
        src={Images.mainIcon}
        alt=""
        className=" ml-[24px] pt-[24px] left-[24px]  "
      />
      <div className="bg w-full h-full flex flex-col justify-center items-center">
        <div className="">
          <h2 className="font-ibm-mono  text-Accent pl-[32px] text-3xl font-medium leading-[39px]">
            Password
          </h2>
          <input
            type="Password"
            placeholder="Password"
            className=" placeholder-Accent text-Accent pl-[32px] bg-Background mt-[16px] font-ibm-plex-mono text-3xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-Border"
          />
        </div>

        <div className="">
          <h2 className=" text-Accent mt-[32px] font-ibm-plex-mono pl-[32px] text-3xl font-medium leading-[39px]">
            Confirm Password
          </h2>
          <input
            type="Password"
            placeholder="Confirm Password"
            className=" placeholder-Accent text-Accent pl-[32px] bg-Background mt-[16px] font-ibm-plex-mono text-3xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-[#FF7315] w-[307px] sm:w-[447px] h-[58px] border-Border"
          />
          <h3 className="font-ibm-mono text-Accent mt-[16px] font-medium text-20 leading-26 text-right">
            Forget Password.
          </h3>
        </div>
        <div className="w-[174px] border-Border h-[63px] left-496 mt-[10px] bg-Border border-[5px] rounded-[55px] ">
          <button className=" font-ibm-plex-mono w-[156px] text-30 font-medium leading-39 text-left text-Background py-[12px] px-[35px]">
            <h2>Sign Up</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
