import { FaFacebook, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-20 bg-[#273048] text-white py-y px-2 ">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 boder-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 pb-2">Servicios</h6>
          <ul className="">
            <li className="py-1 text-xs">Cuidadora Interna</li>
            <li className="py-1 text-xs">Cuidadora por horas</li>
            <li className="py-1 text-xs">Acompanamiento</li>
            <li className="py-1 text-xs">Trae tu cuidadora</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pb-2">Precios</h6>
          <ul className="">
            <li className="py-1 text-xs">Presupuesto</li>
            <li className="py-1 text-xs">Guias</li>
            <li className="py-1 text-xs">Documentacion</li>
            <li className="py-1 text-xs">Soluciones de Pago</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pb-2">Nosotros</h6>
          <ul className="">
            <li className="py-1 text-xs">Quienes Somos</li>
            <li className="py-1 text-xs">Trabajos</li>
            <li className="py-1 text-xs">Prensa</li>
            <li className="py-1 text-xs">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pb-2">Legal</h6>
          <ul className="">
            <li className="py-1 text-xs">Privacy</li>
            <li className="py-1 text-xs">Contratos</li>
            <li className="py-1 text-xs">Seguros</li>
            <li className="py-1 text-xs">Condiciones</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            Suscribete a nuestra News Letter
          </p>
          <p className="py-4">
            Recibe las ultimas novedades con respecto al cuidado
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              placeholder="Tu email aqui.."
              type="email"
              className="w-full p-2 mr-4 rounded-md mb-4"
            />
            <button className="p-2 mb-5 mr-2">Suscribete</button>
          </form>
        </div>
      </div>
      <div className=" text-slate-400 flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center ">
        <p className="p-4">2022 Senniors All Right Reserved</p>
        <div className="flex justify-between sm:w-[300px] text-2xl pt-4 ">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
        </div>
      </div>
    </div>
  );
};

export default Footer;
