import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  console.log(nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-skin-plain fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-skin-primary uppercase text-3xl  font-extrabold mr-4  sm:text-4xl">
            Golden care
          </h1>
          <ul className="hidden md:flex">
            <li>Servicios</li>
            <li>Precios</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="bg-transparent md:text-sm">Sign In</button>
          <button className="md:text-sm">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "md:hidden absolute bg-skin-plain w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">Servicios</li>
        <li className="border-b-2 border-zinc-300 w-full">Precios</li>
        <li className="border-b-2 border-zinc-300 w-full">Nosotros</li>
        <li className="border-b-2 border-zinc-300 w-full">Contacto</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent">Sign In</button>
          <button>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
