"use client";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useRegisterForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const register = async () => {
    setLoading(true);
    try {
      await axios.post("/api/register", {
        email,
        password,
        name,
      });
      setLoading(true);
      toast.success("Successfully registered");

      router.push("/signin");
    } catch (err: any) {
      toast.error(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return{email,password,name,setEmail,setName,setPassword,confirmPassword,setConfirmPassword,loading,register}
}
