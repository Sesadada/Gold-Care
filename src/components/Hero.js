import React from "react";
import {
  HeartIcon,
  HandIcon,
  ClockIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

import heroImg from "../assets/images/senniors-nosotros-fondo.jpg";
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
    <div className="w-full h-screen bg-skin-plain flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full lg:px-20 md:px-8 px-2 py-8  ">
          <p className="text-3xl">Necesitas una cuidadora?</p>
          <h1 className=" ml-4 py-2 text-5xl md:text-5xl font-bold lg:text-7xl">
            Cuidado Domiciliario
          </h1>
          <p className="text-2xl ml-4">Servicio Humano y Profesional</p>
          <button className=" mt-4 py-3 px-6 sm:w-[60%]">
            Pide Presupuesto
          </button>
        </div>
        <div>
          <AdvancedImage cldImg={heroImg} className="w-full" />
        </div>

        <div className="absolute flex flex-col py-8 md:min-w-[768px] lg:min-w-[1024px] bottom-[3%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-skin-plain-dark  text-center shadow-xl rounded-xl">
          <p>Nuestros Servicios</p>
          <div className="flex flex-wrap px-4 justify-center">
            <p className="flex px-4 py-2 ">
              <HomeIcon className="h-6 text-skin-secondark pr-2" /> Cuidadora
              Interna
            </p>
            <p className="flex px-4 py-2 ">
              <ClockIcon className="h-6 text-skin-secondark pr-2" /> Cuidadora
              por horas
            </p>
            <p className="flex px-4 py-2 ">
              <HandIcon className="h-6 text-skin-secondark pr-2" />{" "}
              Acompañamiento{" "}
            </p>
            <p className="flex px-4 py-2 ">
              <PlusCircleIcon className="h-6 text-skin-secondark pr-2" /> Trae a
              tu cuidadora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
