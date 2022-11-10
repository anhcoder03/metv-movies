import React from "react";
import { NavLink } from "react-router-dom";
import Metv from "./metv.png";

const Header = () => {
  return (
    <header className="bg-header w-[10%] fixed top-0 left-0 bottom-0 py-5 px-2 border-r-2 border-zinc-600">
      <div className="pl-5 flex flex-col justify-between h-full text-white">
        <div className="flex flex-col gap-y-10 ">
          <NavLink className="w-[80px] text-center " to="/">
            <img className="" src={Metv} alt="logo" />
          </NavLink>
          <div className="flex flex-col gap-y-5">
            <h4 className="text-secondary text-base lg:tracking-[2px] 2xl:text-base 2xl:tracking-[2px]">
              CATEGORIES
            </h4>
            <div className="flex flex-col gap-y-3 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary text-xl"
                    : "text-xl hover:text-primary"
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="/tvseries"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary text-xl"
                    : "text-xl hover:text-primary"
                }
              >
                TV Series
              </NavLink>
              <NavLink
                to="/celebs"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary text-xl"
                    : "text-xl hover:text-primary"
                }
              >
                Celebs
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <h4 className="text-secondary text-base lg:tracking-[2px] 2xl:text-base 2xl:tracking-[2px]">
            GENERAL
          </h4>
          <div className="flex flex-col gap-y-4">
            <NavLink to="/login">Login</NavLink>
            <NavLink
              className="w-full py-2 bg-primary text-center rounded-lg"
              to="/signup"
            >
              SIGN UP{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="ml-[6px] inline-block lg:text-sm 2xl:text-[18px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
