// Home page ...
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Images } from "@/constants/constants";
import HomeTask from "@/components/hometask/HomeTask";

function Home() {
  return (
    <div>
      <div className=" bg-[#F9F5EB] w-auto h-[96px] flex">
        <Image
          src={Images.mainIcon}
          alt=""
          className=" ml-[24px] pt-[24px] left-[24px]  "
        />
        <Link href="/settingPage">
          <Image
            src={Images.settingRedIcon}
            alt=""
            className=" ml-[24px] pt-[24px] absolute right-[24px] "
          />
        </Link>
      </div>
      <div className="home  h-full flex flex-col items-center">
        <div className="">
          <h2 className=" text-[#EA5455] mt-[80px] pl-[32px] font-ibm-plex-mono text-[55px] md:text-[74px] font-medium leading-[39px]">
            Home List.
          </h2>
        </div>
        <HomeTask />
      </div>
    </div>
  );
}
export default Home;
