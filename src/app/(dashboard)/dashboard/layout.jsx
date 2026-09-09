import Sidebar from "@/Components/Shared/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default layout;
