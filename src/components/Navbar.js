import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  console.log(nav);
  return (
    <nav className="w-screen h-[80px] z-10 bg-skin-plain fixed md:drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex  justify-between w-full items-center">
          <h1 className=" ml-4 text-skin-secondary uppercase md:text-3xl font-extrabold mr-4 md:mr-0 lg:mr-4 text-4xl min-w-[212px]">
            Senniors
          </h1>
          <div className="pr-4">
            <ul className="hidden md:flex">
              <li>Servicios</li>
              <li>Precios</li>
              <li>Nosotros</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
