// // setting page  ...
import Image from "next/image";
import React from "react";
import { authOptions } from "@/libs/AuthOptions";
import { getServerSession } from "next-auth";
import LogoutBtn from "@/components/logoutBtn/LogoutBtn";
import { Images } from "@/constants/constants";
import ChangePassword from "@/components/changePassword/ChangePassword";

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg">
      <div className="w-auto flex">
        <Image
          src={Images.mainIcon}
          alt=""
          className=" ml-[24px] pt-[24px] left-[24px]  "
        />
        <LogoutBtn />
      </div>
      <div>
        <div className="  flex flex-col items-center">
          <h2 className=" text-Accent text-[40px] mt-[80px] pl-[32px] font-Stint Ultra Condensed   md:text-[64px] font-medium leading-[39px]">
            Settings <span className="text-Border ml-[-16px]">.</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={Images.ProfileIcon} alt="" className="mt-[70px]" />
          <Image
            src={Images.editIcon}
            alt=""
            className="mt-[170px] ml-[-35px]"
          />
        </div>
        <div className="flex justify-center">
          <h2 className="w-[234px] h-[39px] mt-[11px] text-Accent font-ibm-plex-mono font-mono text-30 font-normal leading-39 text-center">
            Profile Photo
          </h2>
        </div>
        <div className="flex justify-center">
          <div>
            <h2 className="text-Accent mt-[44px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px]">
              Name
            </h2>
            <input
              type="text"
              placeholder={session?.user?.name ?? "Enter your Name"}
              className="placeholder-Accent text-Accent bg-Background mt-[16px] pl-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] border-Border w-[307px] sm:w-[447px] h-[58px]"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[32px]">
          <div>
            <h2 className="text-Accent font-ibm-plex-mono pl-[32px] text-2xl font-medium leading-[39px]">
              Email
            </h2>
            <input
              type="email"
              placeholder={session?.user?.email ?? "Enter Your Email"}
              className="placeholder-Accent text-Accent pl-[32px] bg-Background mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] border-Border w-[307px] sm:w-[447px] h-[58px]"
            />
          </div>
        </div>
        <ChangePassword />
        <div className="flex justify-center">
          <div className="w-[318px] border-Border h-[63px] mt-[10px] bg-Border text-center border-[5px] rounded-[55px]">
            <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-Background py-[12px] text-center">
              <h2>Sign In</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
