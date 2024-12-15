import React from "react";
import { useState } from "react";

import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="" className="flex items-center gap-1 text-2xl font-bold text-white">
        <Image path="Logo.jpg" alt="rama" w="70" h="50" className="rounded-md"/>
        <span>RamaBLOG.</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-white text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute gap-8 font-medium text-lg top-16 bg-white transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Most Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-xl bg-black text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-white">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Most Popular</Link>
        <Link to="">About</Link>
       
        <SignedOut>
       <Link to="/login">
          <button className="py-2 px-4 rounded-xl bg-black text-white">
            Login 👋
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
