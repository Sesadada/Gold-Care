
import { AdvancedImage } from "@cloudinary/react";
import { useContext } from "react";
import { GenContext } from "../context/GenContext";
import ServiciosTarj from "./ServiciosTarj";

const Servicios = () => {
  const value = useContext(GenContext);
  const { serviciosImg, servicios, icon } = value;
  return (
    <div name="servicios" className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <AdvancedImage
          cldImg={serviciosImg}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-skin-inverted uppercase text-center">
            Servicios
          </h2>
          <p className="text-5xl font-bold py-6 text-center">
            Te ofrecemos planes de cuidado a tu medida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-skin-base">
          {servicios.map((serv) => {
            return (
              <ServiciosTarj key={serv.id} icon={icon(serv.name)} serv={serv} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
