import React from "react";
import RegisterForm from "../../../components/registerForm/RegisterForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="bg flex justify-center items-center">
      <RegisterForm />
      <Link href={"/signin"} className="font-bold text-neutral-900">
        Login
      </Link>
    </div>
  );
}
