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
              <Link to="servicios" smooth={true} offset={-80} duration={500}>
                <li className="p-4 text-skin-base">Servicios</li>
              </Link>

              <Link to="precios" smooth={true} offset={-100} duration={500}>
                <li className="p-4 text-skin-base">Precios </li>
              </Link>

              <Link to="nosotros" smooth={true} offset={-80} duration={500}>
                <li className="p-4 text-skin-base"> Nosotros</li>
              </Link>

              <Link to="contacto" smooth={true} offset={50} duration={500}>
                <li className="p-4 text-skin-base"> Contacto </li>
              </Link>
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
        <Link
          onClick={handleClick}
          to="servicios"
          smooth={true}
          offset={-60}
          duration={500}
        >
          <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
            Servicios
          </li>
        </Link>

        <Link
          onClick={handleClick}
          to="precios"
          smooth={true}
          offset={-100}
          duration={500}
        >
          {" "}
          <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
            Precios
          </li>
        </Link>

        <Link
          onClick={handleClick}
          to="nosotros"
          smooth={true}
          offset={-80}
          duration={500}
        >
          {" "}
          <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
            Nosotros{" "}
          </li>
        </Link>

        <Link
          onClick={handleClick}
          to="contacto"
          smooth={true}
          offset={50}
          duration={500}
        >
          {" "}
          <li className="p-4 text-skin-base border-b-2 border-zinc-300 w-full">
            Contacto
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
