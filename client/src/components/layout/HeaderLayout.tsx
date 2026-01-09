import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex pt-15">
        <Sidebar />
        <main className=" lg:pl-55 py-3 px-3 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HeaderLayout;
