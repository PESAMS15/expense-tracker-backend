import React from "react";

import DashBoard from "../Pages/DashBoard";

const Layout = ({ children }) => {
  return (
    <div className="flex">
    <DashBoard />
      <div>
        <div className=" bg-gradient-to-b from-[#f5f5f5] to-[#D9CAFF] w-full p-5 lg:p-[2rem] lg:h-[100vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
