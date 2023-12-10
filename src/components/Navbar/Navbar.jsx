import React from "react";
import { Link } from "react-router-dom";
import { Logo, Option } from "../Icons";

const Navbar = ({ onOpen }) => {
  return (
    <div className="flex p-5 border-b  items-center justify-between md:justify-end text-white">
      <div onClick={() => onOpen()}>
        <Option />
      </div>
      <Link to="/" className="flex items-center lg:hidden">
        <img alt="logo" width={50} height={50} src={Logo} />
        <div className="ml-1 text-2xl font-bold text-[#8b73fe] font-mono">Filez Up</div>
      </Link>
      <div>
        <button>
          <div className="rounded-3xl">
            <img
              src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yWjJWUmpIejl1MVlNaVZGUDBnMXVyc2ZrdHAifQ?width=160"
              className="rounded-full object-cover"
              title="Vũ"
              alt="Vũ"
              width="40"
              height="40"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
