"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Divider } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());
    console.log(Data);
    const { data, error } = await authClient.signIn.email({
      email: Data.email,
      password: Data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      setLoading(false);
      alert("Login successful!");
      router.push("/");
    }
    if (error) {
      setLoading(false);
      alert("Login failed: " + error.message);
      return;
    }
  };
  return (
    <div>
      <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>ইমেইল</Label>
          <Input placeholder="আপনার ইমেইল..." />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          defaultValue="12345678"
        >
          <Label>পাসওয়ার্ড</Label>
          <Input placeholder="আপনার পাসওয়ার্ড লিখুন..." />

          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full mb-6 bg-sky-900">
            লগইন
          </Button>
        </div>
      </Form>
      <Divider>or</Divider>
      <div className="mt-6">
        <Button className="w-full" variant="outline">
          <FcGoogle />
          Login with Google
        </Button>
        <p className="mt-5">
          একাউন্ট নেই ?{" "}
          <Link href="/signup" className="underline text-blue-600">
            রেজিস্টার করুন/একাউন্ট খুলুন{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
