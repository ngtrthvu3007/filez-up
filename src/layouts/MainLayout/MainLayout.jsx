import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const MainLayout = ({ children, page }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const onOpenSideBar = () => setOpenSideBar(!openSideBar);

  return (
    <div>
      <Sidebar open={openSideBar} onOpen={onOpenSideBar} page={page} />
      <div className="md:ml-64 h-[100vh] bg-gray-900 ">
        <Navbar onOpen={onOpenSideBar} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
