"use client";
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
import React from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
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
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>পাসওয়ার্ড</Label>
          <Input placeholder="আপনার পাসওয়ার্ড লিখুন..." />
          <Description>
            পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে, একটি বড় হাতের অক্ষর এবং একটি
            সংখ্যা থাকতে হবে।
          </Description>
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
