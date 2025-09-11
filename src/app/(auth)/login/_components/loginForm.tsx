import { useRouter } from "next/navigation";
import React from "react";
import { Form } from "react-hook-form";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.email || !e.password) return;
    console.log("Email:", e.email);
    console.log("Password:", e.password);

    const res = await AuthServices.login("/auth/login", { e });
    console.log(res);

    if (!res.success) {
      toast.error("wrong login credentials");
    }

    sessionStorage.setItem("token", res.data.token);
    toast.success("Signed in successfully");
    router.push("/dashboard");
  };
  return <Form onSubmit={handleSubmit}></Form>;
}
