import React from "react";
import AuthImage from "../../assets/images/Auth.jpg";
import { Link } from "react-router-dom";
import Logo from "../../assets/vite.svg";

const Auth = ({ type }) => {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-screen lg:grid-cols-12">
        <section className=" flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img src={AuthImage} alt="Filez Up Auth Page" className="absolute inset-0 h-full w-full object-cover " />
          <div className="hidden lg:relative lg:block lg:p-32">
            <div className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl flex">
              <span>Welcome to</span>
              <div className="font-bold text-2xl flex items-center ml-2">
                <img src={Logo} alt="Filez up Logo" loading="lazy" width={50} height={50} />
                <div className="ml-1 text-2xl font-bold text-[#8b73fe]">Filez Up</div>
              </div>
            </div>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 z-50">
          <div className="max-w-xl lg:max-w-3xl bg-white rounded ">
            <div className="w-fit rounded">
              <div className="flex flex-col items-stretch justify-start gap-8 shadow-2xl w-[25rem] p-12 rounded">
                <div className="font-bold text-2xl flex items-center">
                  <img src={Logo} alt="Filez up Logo" loading="lazy" width={50} height={50} />
                  <div className="ml-1 text-2xl font-bold text-[#8b73fe]">Filez Up</div>
                </div>
                <div className="font-semibold text-xl"> {type === "sign_in" ? "LOGIN" : "REGISTER"} </div>
                {type !== "sign_in" && (
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-semibold">
                      Name
                    </label>
                    <div className="mt-2 border border-gray-300 p-2 rounded">
                      <input type="text" placeholder="Your name" className="w-full outline-none" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <div className="mt-2 border border-gray-300 p-2 rounded">
                    <input type="text" placeholder="Your email" className="w-full outline-none" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <div className="mt-2 border border-gray-300 p-2 rounded">
                    <input type="text" placeholder="Your password" className="w-full outline-none" />
                  </div>
                </div>
                <div className="bg-[#8b73fe] py-1 rounded text-center text-white font-semibold cursor-pointer">
                  <button> {type === "sign_in" ? "LOGIN" : "REGISTER"}</button>
                </div>
                <div className="text-sm">
                  <span className="mr-1 text-gray-500">{type === "sign_in" ? "No account?" : "You have account?"}</span>
                  <Link to={type === "sign_in" ? "/sign-up" : "/sign-in"} className="text-[#8b73fe] font-semibold">
                    {type === "sign_in" ? "Sign up" : "Sign in"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Auth;
