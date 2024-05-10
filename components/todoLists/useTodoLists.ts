"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { TodoItem } from "@/app/types/type";
import toast from "react-hot-toast";
import { getSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { fetchData } from "@/redux/slices/list";
import { URL } from "../../constants/siteUrl";
function useTodoLists() {
  const [listName, setListName] = useState<string>("");
  const [listId, setListId] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const handleEmail = async () => {
    const session = await getSession();
    const email = session?.user?.email || "";
    setCurrentUserEmail(email);
  };
  useEffect(() => {
    handleEmail();
  }, []);

  const dispatch = useDispatch();
  const { loading, labels } = useSelector((state: RootState) => state.list);
  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);
  const filteredTodoList = labels.filter(
    (labels) => labels.Email === currentUserEmail
  );

  //delete
  const handleDeleteList = async (id: string) => {
    try {
      await axios.delete(`${URL}/api/todoList/?id=${id}`);

      toast.success("Task Deleted Successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };
  // update
  const handleUpdateList = async (todoItem: TodoItem) => {
    setListId(todoItem.id);
    setListName(todoItem.ListName);
    setIsVisible(true);
  };

  const update = async () => {
    try {
      const response = await axios.put(`${URL}/api/todoList`, {
        list: listName,
        id: listId,
      });
      if (response.status === 200) {
        toast.success("Task Updated Successfully");
        setIsVisible(false);
      } else {
        toast.error("Failed to update task");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  };

  return {
    loading,
    isVisible,
    listName,
    filteredTodoList,
    setListName,
    labels,
    handleDeleteList,
    handleUpdateList,
    update,
  };
}

export default useTodoLists;
