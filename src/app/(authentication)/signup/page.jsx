import SignUpForm from "@/Components/authentication/SignUpForm";
import { Card } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-400px)] mt-10">
      <Card className="w-lg mx-auto p-10" variant="default">
        <Card.Header>
          <Card.Title className="text-2xl font-bold ">
            রেজিস্টার করুন
          </Card.Title>
          <Card.Description>
            রেজিস্টার করতে এখানে আপনার তথ্য প্রবেশ করুন
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <SignUpForm />
        </Card.Content>
      </Card>
    </div>
  );
};

export default page;
