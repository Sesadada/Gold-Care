import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
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
        <div className="flex flex-col justify-center md:items-start w-full lg:px-12 md:px-8 px-2 py-8">
          <p className="text-2xl">Unique</p>
          <h1 className="py-3 text-5xl md:text-5xl font-bold lg:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our brand</p>
          <button className=" mt-4 py-3 px-6 sm:w-[60%]">Get started</button>
        </div>
        <div>
          <AdvancedImage cldImg={heroImg} className="w-full" />
        </div>
        <div>
          <p>Nuestros Servicios</p>

          <div>
            <p>Icon, App Security</p>
            <p>Icon, App Security</p>
            <p>Icon, App Security</p>
            <p>Icon, App Security</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
