"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Images, addCardList } from "@/constants/constants";
import AddCard from "../../../components/addCard/AddCard";
import AddListsButton from "@/components/addListsButton/AddListsButton";
import axios from "axios";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";
import { URL } from "../../../constants/siteUrl";
const Page: React.FC = () => {
  const [listName, setListName] = useState("");
  const [email, setEmail] = useState("");
  const [textColor, settextColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [label, setLabel] = useState("");
  const [bgColor, setBgColor] = useState("");

  const sessionData = async () => {
    const session = await getSession();
    const email = session?.user?.email || "";
    setEmail(email);
  };
  useEffect(() => {
    sessionData();
  }, []);

  const handleCreateList = async () => {
    try {
      const response = await axios.post(
        `${URL}/api/todoList`,
        {
          ListName: listName,
          Email: email,
          textColor: textColor,
          borderColor: borderColor,
          label: label,
          bgColor: bgColor,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;
      toast.success("List Added Successfully");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  const handleSelectColor = (value: any) => {
    setBgColor(value.bgColor);
    setBorderColor(value.borderColor);
    setLabel(value.label);
    settextColor(value.textColor);
  };

  return (
    <div className="bg ">
      <div className="flex justify-between mt-[25px] px-[25px]">
        <Image src={Images.mainIcon} alt="" />
        <Link href="/settingPage">
          <Image src={Images.settingWhiteIcon} alt="" />
        </Link>
      </div>
      <div className=" text-center">
        <input
          type="text"
          placeholder="List name"
          className="placeholder-Accent text-Accent bg-Background mt-[16px] pl-[32px] pr-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-Border max-w-[447px] h-[58px] border-Border"
          value={listName}
          onChange={handleInputChange}
        />
      </div>
      <div className=" flex flex-wrap flex-col  md:flex-row md:ml-[277px] items-center md:mt-[31px]">
        {addCardList.map((value, i) => {
          if (
            value.bgColor &&
            value.borderColor &&
            value.label &&
            value.textColor
          ) {
            return (
              <AddCard
                key={i}
                label={value.label}
                bgColor={value.bgColor}
                textColor={value.textColor}
                borderColor={value.borderColor}
                className={`bg-${value.bgColor} border-${value.borderColor} text-${value.textColor}`}
                onClick={() => handleSelectColor(value)}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <AddListsButton onClick={handleCreateList} />
      </div>
    </div>
  );
};
export default Page;
