"use client";
import React from "react";
import useChangePassword from "./useChangePassword";

const ChangePassword = () => {
  const {
    visible,
    setVisible,
    setNewPassword,
    newPassword,
    handleChangePassword,
  } = useChangePassword();

  return (
    <>
      {!visible ? (
        <div className="flex justify-center">
          <button onClick={() => setVisible(true)}>
            <div className="flex flex-row  items-center bg-Background rounded-[55px] border-[5px] w-[318px] h-[63px] border-Border gap-3 mt-[64px]">
              <h2 className=" rounded-[30px] text-Border text-center bg-Background font-ibm-plex-mono text-2xl font-medium leading-[39px] w-full h-full ps-[8px] py-[12px]">
                Change Password
              </h2>
            </div>
          </button>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-Background text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-Background px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center">
                      <input
                        type="text"
                        placeholder="Change Password"
                        className="placeholder-Accent text-Accent bg-Background mt-[16px] pl-[32px] pr-[32px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[30px] border-[5px] bordor-color-Border max-w-[447px] h-[58px] border-Border"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-Background px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => {
                      setVisible(false);
                      handleChangePassword();
                    }}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-Accent shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChangePassword;
