import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-screen h-[80px] z-10 bg-skin-plain fixed md:drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex  justify-between w-full items-center">
          <Link to="home" smooth={true} duration={500}>
            <h1 className=" ml-4 text-skin-secondary uppercase md:text-3xl font-extrabold mr-4 md:mr-0 lg:mr-4 text-4xl min-w-[212px]">
              Senniors
            </h1>
          </Link>
          <div className="pr-4">
            <ul className="hidden md:flex ">
              <li className="p-4 text-skin-base">
                <Link to="servicios" smooth={true} offset={-50} duration={500}>
                  Servicios
                </Link>
              </li>
              <li className="p-4 text-skin-base">
                <Link to="precios" smooth={true} offset={50} duration={500}>
                  Precios
                </Link>
              </li>
              <li className="p-4 text-skin-base">
                <Link to="nosotros" smooth={true} offset={-50} duration={500}>
                  Nosotros
                </Link>
              </li>
              <li className="p-4 text-skin-base">
                <Link to="contacto" smooth={true} offset={50} duration={500}>
                  Contacto
                </Link>
              </li>
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
        <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClick}
            to="servicios"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Servicios
          </Link>
        </li>
        <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClick}
            to="precios"
            smooth={true}
            offset={50}
            duration={500}
          >
            Precios
          </Link>
        </li>
        <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClick}
            to="nosotros"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Nosotros
          </Link>
        </li>
        <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClick}
            to="contacto"
            smooth={true}
            offset={50}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
