"use client";
import React from "react";

const AddListsButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div className="flex items-center justify-center" onClick={onClick}>
      <div className="w-[210px] mt-[94px] border-Border h-[63px] bg-Border border-[5px] rounded-[55px]">
        <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-Background py-[12px] px-[55px]">
          <h2>Add List.</h2>
        </button>
      </div>
    </div>
  );
};

export default AddListsButton;
