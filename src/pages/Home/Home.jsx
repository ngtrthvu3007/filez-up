import React from "react";
import { Link } from "react-router-dom";
import { Logo, AuthImage, Menu } from "../../components/Icons";
import { Dropdown } from "flowbite-react";
import DropdownSection from "../../components/Dropdown/Dropdown";

const Home = () => {
  const Button = () => {
    return (
      <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
        <span className="sr-only">Toggle menu</span>
        <Menu />
      </button>
    );
  };

  const DropdownItem = () => {
    return (
      <>
        <Dropdown.Item>
          <Link className=" pl-1 text-[14px] font-semibold" to="/upload">
            Upload
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="pl-1 text-[14px] font-semibold" to="/files">
            Your Files
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <a className="pl-1 text-[14px] font-semibold" href="https://github.com/ngtrthvu3007" target="_blank">
            About Me
          </a>
        </Dropdown.Item>
      </>
    );
  };

  return (
    <div>
      <header>
        <div className="mx-auto flex h-16  max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center">
            <img alt="logo" width={50} height={50} src={Logo} style={{ color: "transparent" }} />
            <div className="ml-1 text-2xl text-[#8b73fe] font-semibold font-mono">Filez Up</div>
          </div>
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white transition hover:text-[#8b73fe]/75 font-semibold" to="/upload">
                    Upload
                  </Link>
                </li>
                <li>
                  <Link className="text-white transition hover:text-[#8b73fe]/75 font-semibold" to="/files">
                    Your Files
                  </Link>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-[#8b73fe]/75 font-semibold"
                    href="https://github.com/ngtrthvu3007"
                    target="_blank">
                    About Me
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-primary px-5 py-2.5  text-sm font-medium text-white  transition bg-[#8b73fe]"
                  to="/sign-in">
                  Get Started
                </Link>
              </div>
              <DropdownSection Button={Button} Item={DropdownItem} useHeader={false} />
            </div>
          </div>
        </div>
      </header>
      <section className="">
        <img src={AuthImage} alt="Filez Up Auth Page" className="absolute inset-0 h-full w-full object-cover z-[-1] " />
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <div className="text-white mb-2">Upload your files </div>
              <div className="text-white">Share your files in one place</div>
            </h1>
            <p className="mt-4 sm:text-xl/relaxed text-white">
              Drag and drop your file directly on our cloud and share it with your friends secuarely with password and
              send it on email
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-primary px-12 py-3 text-sm  font-medium text-white shadow bg-[#8b73fe] focus:outline-none focus:ring  sm:w-auto"
                to="/sign-in">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
