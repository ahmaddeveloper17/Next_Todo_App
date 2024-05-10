"use client";
import React from "react";
import useHomeTask from "./useHomeTask";
import { RiDeleteBinLine } from "react-icons/ri";
import { taskListProps } from "@/app/types/type";

function HomeTask() {
  const {
    taskName,
    loading,
    handleCreateTask,
    handleInputChange,
    completedTasks,
    filteredTodoTask,
    toggleCompletion,
    handleDeleteTask,
  } = useHomeTask();

  return (
    <div>
      <div className="mt-[32px]">
        <input
          type="email"
          placeholder="[task]"
          value={taskName}
          onChange={handleInputChange}
          className="placeholder-[#EA5455] w-[300px] sm:w-[450px] text-[#EA5455] pl-[32px] bg-[#F9F5EB] mt-[16px] font-ibm-plex-mono text-2xl font-medium leading-[39px] rounded-[16px] border-[5px] bordor-color-[#FF7315] lg:w-[597px] h-[58px] border-[#FF7315]"
        />
      </div>{" "}
      <div className="mt-[49px]">
        {loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="350"
            height="350"
            className="ml-[-60px] md:ml-10 lg:ml-20 xl:ml-55"
          >
            <linearGradient id="a11">
              <stop offset="0" stop-color="#EA5455" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#EA5455"></stop>
            </linearGradient>
            <circle
              fill="none"
              stroke="url(#a11)"
              stroke-width="11"
              stroke-linecap="round"
              stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
              cx="100"
              cy="100"
              r="70"
              transform-origin="center"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="discrete"
                dur="1.1"
                values="360;324;288;252;216;180;144;108;72;36"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
          </svg>
        ) : (
          <>
            <table>
              <tbody>
                {filteredTodoTask.map((task: taskListProps, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="w-8 h-8 mr-4 cursor-pointer"
                        type="checkbox"
                        style={{
                          appearance: "none",
                          border: "2px solid #FF7315",
                          borderRadius: "4px",
                          outline: "none",
                        }}
                        onClick={() => toggleCompletion(index)}
                      />
                    </td>
                    <td>
                      <label
                        className={`font-ibm-plex-mono text-[40px] md:text-[60px] text-[#EA5455] font-medium ${
                          completedTasks.includes(index) ? "line-through" : ""
                        }`}
                      >
                        {task.TaskName}
                      </label>
                    </td>
                    <td>
                      <button
                        className="text-[#EA5455] bg-[#f9f5eb] p-3 rounded-full md:ml-[120px]"
                        onClick={() => {
                          handleDeleteTask(task.id);
                        }}
                      >
                        <RiDeleteBinLine size={30} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div
        className="flex items-center justify-center"
        onClick={handleCreateTask}
      >
        <div className="w-[210px] mt-[34px] border-Border h-[63px] bg-Border border-[5px] rounded-[55px]">
          <button className="font-ibm-plex-mono text-30 font-medium leading-39 text-[#232020] py-[12px] px-[55px]">
            <h2>Add Task.</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeTask;
