"use client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMailUnread } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";

const ContactCard = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="w-9/12 mx-auto bg-sky-950 text-white p-10 rounded-lg shadow-lg mt-20 grid grid-cols-2 gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MdAttachEmail className="text-yellow-300" />
          আমাদের সাথেই থাকুন
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          যদি আমাদের সার্ভিস নিয়ে আপনার কোনও প্রশ্ন থাকে বা সাহায্যের প্রয়োজন
          হয়, দয়া করে এখানে ফর্মটি পূরণ করুন। আমরা আমাদের সর্বোচ্চ চেষ্টা করি
          ১ ব্যবসায়িক দিনের মধ্যে উত্তর দিতে।
        </p>
        <div className="flex items-center gap-2 mt-4">
          <IoMailUnread className="text-2xl" />
          <span className="font-semibold">ইমেইল: </span>
          tanchangyaashutosh0356@gmail.com
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaPhoneAlt className="text-2xl" />
          <span className="font-semibold">মোবাইল: </span>+880 1837472026
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaMapLocationDot className="text-2xl" />
          <span className="font-semibold">ঠিকানা: </span>চট্টগ্রাম, বাংলাদেশ
        </div>
      </div>
      <div className="flex flex-col justify-center bg-teal-50  rounded-lg p-10 text-black">
        <Form className="w-full" onSubmit={onSubmit}>
          <Fieldset>
            <FieldGroup>
              <TextField isRequired name="name">
                <Label className="text-[16px]">আপনার নাম</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>
              <TextField isRequired name="phone" type="tel">
                <Label className="text-[16px]">আপনার ফোন</Label>
                <Input placeholder="+880 1837472026" />
                <FieldError />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label className="text-[16px]">ইমেইল</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
              <TextField isRequired name="bio">
                <Label className="text-[16px]">বিস্তারিত লিখুন</Label>
                <TextArea rows="5" placeholder="সমস্যা বিস্তারিতভাবে বলুন..." />

                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit" className="bg-teal-900 rounded-lg">
                <IoIosSend />
                বার্তা পাঠান
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="rounded-lg text-teal-900 border"
              >
                রিসেট করুন
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default ContactCard;
