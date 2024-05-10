import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function useLoginForm() {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/todoList");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return { setEmail, setPassword, loading, email, password, login };
}
