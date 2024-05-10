import React, { useEffect, useState } from "react";
import axios from "axios";
import { taskListProps } from "@/app/types/type";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { fetchtask } from "@/redux/slices/task";
import { URL } from "../../constants/siteUrl";
function useHomeTask() {
  const [taskName, setTaskName] = useState("");
  const params = useSearchParams();
  const taskid = params.get("id");

  //
  const handleCreateTask = async () => {
    try {
      const response = await axios.post(
        `${URL}/api/homeTask`,
        {
          TaskName: taskName,
          TaskId: taskid,
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
    setTaskName(event.target.value);
  };
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state: RootState) => state.task);
  useEffect(() => {
    dispatch(fetchtask() as any);
  }, [dispatch]);
  const filteredTodoTask = tasks.filter((tasks) => tasks.TaskId == taskid);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const toggleCompletion = (index: number) => {
    const newCompletedTasks = [...completedTasks];
    if (newCompletedTasks.includes(index)) {
      newCompletedTasks.splice(newCompletedTasks.indexOf(index), 1);
    } else {
      newCompletedTasks.push(index);
    }
    setCompletedTasks(newCompletedTasks);
  };

  //
  const handleDeleteTask = async (id: string) => {
    try {
      await axios.delete(`${URL}/api/homeTask/?id=${id}`);

      toast.success("Task Deleted Successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };
  return {
    taskName,
    tasks,
    handleCreateTask,
    handleInputChange,
    completedTasks,
    filteredTodoTask,
    setCompletedTasks,
    toggleCompletion,
    loading,
    handleDeleteTask,
  };
}

export default useHomeTask;
