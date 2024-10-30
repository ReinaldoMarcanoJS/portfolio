import React from "react";
import Image from "next/image";
import myphoto from "../../../public/my-photo.jpg";


export const Navbar = () => {
  return (
    <header className="max-w-[1000px] mx-auto">
      <nav className="">
        <div className="flex items-center justify-between bg-base-100">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="slider flex items-center justify-center text-center w-[110%]">
              <span className="slider__word ">Developer</span>
              <span className="slider__word">Web</span>
              <span className="slider__word">Frelance</span>
            </span>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    alt="Tailwind CSS Navbar component"
                    src={myphoto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
