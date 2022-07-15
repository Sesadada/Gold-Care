import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  HandIcon,
  ClockIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Hero = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sesadada",
    },
  });
  const heroImg = cld.image("senniors-hero");
  return (
    <div
      name="home"
      className="w-full h-screen bg-skin-plain flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full lg:px-20 md:px-8 px-2 py-8  ">
          <p className="  ml-4 text-3xl">Necesitas una cuidadora?</p>
          <h1 className=" ml-4 py-2 text-5xl md:text-5xl font-bold lg:text-7xl">
            Cuidado Domiciliario
          </h1>
          <p className="text-2xl ml-4">Servicio Humano y Profesional</p>
          <Link
            to="presupuesto"
            smooth={true}
            duration={500}
            className="w-full"
          >
            <button className="ml-4 mt-4 py-3 px-6 sm:w-[60%]">
              Pide Presupuesto
            </button>
          </Link>
        </div>
        <div>
          <AdvancedImage cldImg={heroImg} className="w-full" />
        </div>

        <div className="absolute flex flex-col py-4 md:min-w-[768px] lg:min-w-[1024px] bottom-[5%] md:bottom-[0%] lg:bottom-[7%] md:left-1/2 transform md:-translate-x-1/2 bg-skin-azul-oscuro opacity-70 mx-6 text-center shadow-xl rounded-xl md:m-0 ">
          <p className="text-skin-inverted font-bold uppercase pb-1">
            Nuestros Servicios
          </p>
          <div className="flex flex-wrap px-4 justify-center">
            <p className="flex px-4 py-2 text-skin-inverted">
              <HomeIcon className="h-6 text-skin-inverted pr-2" /> Cuidadora
              Interna
            </p>
            <p className="flex px-4 py-2 text-skin-inverted">
              <ClockIcon className="h-6 text-skin-inverted pr-2" /> Cuidadora
              por horas
            </p>
            <p className="flex px-4 py-2 text-skin-inverted">
              <HandIcon className="h-6 text-skin-inverted pr-2" />{" "}
              Acompañamiento{" "}
            </p>
            <p className="flex px-4 py-2 text-skin-inverted">
              <PlusCircleIcon className="h-6 text-skin-inverted pr-2" /> Trae a
              tu cuidadora
            </p>
          </div>
        </div>
        <div className="absolute right-4 h-36 w-36 bottom-[22%] md:bottom-[15%] lg:bottom-[18%] bg-yellow-300 opacity-90  text-center shadow-xl rounded-full flex justify-center items-center ">
          <Link
            to="trabaja"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <p className="text-skin-inverted font-bold uppercase pb-1">
              Trabaja de cuidadora
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
