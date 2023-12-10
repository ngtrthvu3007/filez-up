import React from "react";
import { Link } from "react-router-dom";
import { Logo, LeftArrow, UploadIcon, Files } from "../Icons";

const SideBar = ({ open, onOpen }) => {
  return (
    <div>
      <div className={`h-full w-64 flex-col fixed inset-y-0 z-30 md:flex ${open ? "" : "hidden"} bg-white`}>
        <div className="shadow-sm border-r h-full relative">
          <div className="p-5 border-b">
            <Link to="/" className="flex items-center">
              <img alt="logo" width={60} height={60} src={Logo} />
              <div className="ml-1 text-2xl font-bold text-[#8b73fe] font-mono">Filez Up</div>
            </Link>
          </div>
          <div className="flex flex-col float-left w-full">
            <Link to="/upload">
              <button className="flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 bg-blue-50 text-primary">
                <UploadIcon />
                <h2>Upload</h2>
              </button>
            </Link>
            <Link to="/your-files">
              <button className="flex gap-2 p-4 px-6 hover:bg-gray-100 w-fulltext-gray-500 null">
                <Files />
                <h2>Files</h2>
              </button>
            </Link>
          </div>
          <div
            className=" lg:hidden md:hidden absolute top-0 rounded p-1 bg-white right-[-1.75rem]"
            onClick={() => onOpen()}>
            <img src={LeftArrow} alt="Hide Sidebar Icon" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
