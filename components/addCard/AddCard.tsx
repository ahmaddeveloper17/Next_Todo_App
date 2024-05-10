import React from "react";
import { AddCardProps } from "@/app/types/type";

function AddCard({
  bgColor,
  borderColor,
  textColor,
  label,
  onClick,
}: AddCardProps) {
  return (
    <button
      className={` font-ibm-plex-mono mt-[10px] rounded-[55px] m-8 text-30 font-medium bg-${bgColor} border-[5px] border-${borderColor} leading-39 w-64 py-[12px] px-[32px]`}
      onClick={onClick}
    >
      <h2 className="text-gray-50">{label}</h2>
    </button>
  );
}

export default AddCard;
