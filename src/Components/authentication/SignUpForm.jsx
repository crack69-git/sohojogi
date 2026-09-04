"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  Spinner,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());
    console.log(Data);
    const { data, error } = await authClient.signUp.email({
      name: Data.name,
      email: Data.email,
      password: Data.password,
      image: Data.profileImage,
      role: Data.role,
      callbackURL: "/login",
    });
    if (data) {
      alert("Sign up successful!");
      setLoading(false);
      router.push("/login");
    }
    if (error) {
      alert("Sign up failed: " + error.message);
      setLoading(false);
      return;
    }
  };
  return (
    <div>
      <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>নাম</Label>
          <Input placeholder="আপনার নাম..." />
          <FieldError />
        </TextField>
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
        <TextField isRequired name="profileImage" type="text">
          <Label>প্রোফাইল ছবি</Label>
          <Input placeholder="আপনার প্রোফাইল ছবির URL..." />
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
          <Description>
            পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে, একটি বড় হাতের অক্ষর এবং একটি
            সংখ্যা থাকতে হবে。
          </Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-4">
          <Label isRequired>রোল</Label>
          <RadioGroup
            defaultValue="user"
            name="role"
            orientation="horizontal"
            isRequired
          >
            <Radio value="user">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator className="border rounded-full" />
                </Radio.Control>
                ব্যবহারকারী
              </Radio.Content>
            </Radio>
            <Radio value="admin">
              <Radio.Content>
                <Radio.Control>
                  <Radio.Indicator className="border rounded-full" />
                </Radio.Control>
                এডমিন
              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>

        <div className="flex gap-2">
          <Button
            type="submit"
            className="w-full mb-6 bg-sky-900 flex items-center justify-center gap-2"
            isDisabled={loading}
          >
            {loading && <Spinner size="sm" color="white" />}
            রেজিস্টার
          </Button>
        </div>
      </Form>

      <div className="mt-6">
        <p className="mt-5">
          একাউন্ট আছে?{" "}
          <Link href="/login" className="underline text-blue-600">
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
