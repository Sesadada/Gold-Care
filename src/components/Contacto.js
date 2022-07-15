import {
  AtSymbolIcon,
  DeviceMobileIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Form from "./form/Form";

const Contacto = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sesadada",
    },
  });
  const contactoImg = cld.image("contacto");
  const ofiImg = cld.image("nosotros");

  return (
    <div name="contacto" className="w-full  mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <AdvancedImage
          cldImg={contactoImg}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-skin-inverted uppercase text-center">
            Contacto
          </h2>
        </div>

        <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-3 relative gap-x-2 gap-y-4 px-4 pt-12 sm:pt-20 text-skin-base">
          <div className="border-4 py-8 rounded-xl border-orange-400 shadow-xl p-4 m-4 mt-[-10rem] bg-white flex flex-col">
            <h3 className="text-3xl text-skin-secondary text-center">
              Ven a vernos!
            </h3>

            <div className="pt-8">
              <div className="flex">
                <PhoneIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>92 060 49 21</p>{" "}
              </div>
              <div className="flex pt-3">
                <DeviceMobileIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>684 32 42 99</p>{" "}
              </div>
              <div
                className="flex pt-3 cursor-pointer"
                onClick={() => (window.location = "mailto:hola@senniors.com")}
              >
                <AtSymbolIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>hola@senniors.com</p>{" "}
              </div>

              <div className="flex pt-3">
                <LocationMarkerIcon className="w-5 mr-2 text-skin-secondary" />{" "}
                <p>Calle del Monte Esquinza, 14, 1-D, 28010 Madrid</p>{" "}
              </div>
            </div>
            <div>
              <AdvancedImage
                cldImg={ofiImg}
                className="w-full h-full object-cover border-2 border-pink-400 mt-12 rounded-xl hidden md:block"
              />
            </div>
          </div>
          <div className="border-4 py-8 rounded-xl border-yellow-400 shadow-xl p-4 m-4 md:mt-[-10rem] bg-white flex flex-col">
            <h3 className="text-3xl text-skin-secondary pb-2 text-center">
              Te contactamos!
            </h3>
            <form className="flex flex-col justify-center">
              <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
                <label className="pb-4  "> Nombre y Apellidos</label>
                <input
                  type="text"
                  placeholder="Nombre y Apellidos"
                  className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
                />
              </div>
              <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
                <label className="pb-4 "> Email</label>
                <input
                  type="email"
                  placeholder="email"
                  className=" p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
                />
              </div>
              <div className=" py-3 flex flex-col justify-center items-center">
                <label className="pb-4 "> Teléfono</label>
                <input
                  type="number"
                  placeholder="Teléfono"
                  className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
                />
              </div>
              <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
                <label className="pb-4 text-center">
                  {" "}
                  En que esta interesado/a?
                </label>
                <select className="rounded-lg bg-yellow-400 p-3">
                  <option value="interna">Cuidadora Interna</option>
                  <option value="diferentes">Cuidadora por horas</option>
                  <option value="acompañamiento">Acompañamiento</option>
                  <option value="trae tu cuidadora">Treae tu cuidadora</option>
                </select>
              </div>
              <button className=" lg:mt-2 mt-8 mx-4 text-black">Envia</button>
            </form>
          </div>
          <div
            name="trabaja"
            className="border-4 py-8 rounded-xl border-pink-400 shadow-xl p-4 m-4 md:col-span-3 lg:col-span-1 lg:md:mt-[-10rem] bg-white flex flex-col"
          >
            <h3 className="text-3xl text-skin-secondary text-center">
              Trabaja de cuidadora
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
