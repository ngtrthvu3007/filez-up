import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const MainLayout = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const onOpenSideBar = () => setOpenSideBar(!openSideBar);

  return (
    <div>
      <Sidebar open={openSideBar} onOpen={onOpenSideBar} />
      <div className="md:ml-64 bg-gray-900 ">
        <Navbar onOpen={onOpenSideBar} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
