import { Link, animateScroll as scroll } from "react-scroll";

import { AdvancedImage } from "@cloudinary/react";
import { useContext } from "react";
import { GenContext } from "../context/GenContext";

import {
  AtSymbolIcon,
  DeviceMobileIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

const Precios = () => {
  const value = useContext(GenContext);
  const { preciosImg } = value;
  return (
    <div name="precios" className="w-full my-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          {" "}
          <h2 className="pt-8 text-3xl text-skin-secondary uppercase text-center">
            Precios
          </h2>
          <p className="text-5xl font-bold py-6 text-center">
            Quieres saber el precio de tu servicio de cuidado de mayores?{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <AdvancedImage
            cldImg={preciosImg}
            className="md:w-[80%] w-full h-34"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-1 px-2 mt-4">
          <div className="border-4 py-8 rounded-xl border-orange-400 shadow-xl p-4 m-4 mt-[-10rem] bg-white">
            <h3 className="text-3xl text-skin-secondary">Llamanos!</h3>
            <p className="mt-4">
              En Senniors analizamos cada caso y preparamos un Plan de Cuidados
              Personalizado. Completa el formulario y en menos de 5 minutos
              tendrás tu presupuesto.
            </p>
            <div className="pt-3">
              <div className="flex">
                <PhoneIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>92 060 49 21</p>{" "}
              </div>
              <div className="flex pt-3">
                <DeviceMobileIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>684 32 42 99</p>{" "}
              </div>
              <div
                className="flex  pt-3 cursor-pointer"
                onClick={() => (window.location = "mailto:hola@senniors.com")}
              >
                <AtSymbolIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>hola@senniors.com</p>{" "}
              </div>
            </div>
          </div>
          <div className="border-4 py-8 rounded-xl border-yellow-400 shadow-xl p-4 m-4 md:mt-[-10rem] bg-white">
            <h3 className="text-3xl text-skin-secondary">
              Solicita presupuesto!
            </h3>
            <p className="mt-4">Nos pondremos en contacto contigo pronto</p>
            <div>
              <Link to="presupuesto" smooth={true} duration={500}>
                <button className="p-4 mt-8 text-black">
                  Pide Presupuesto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precios;
