import { ArrowSmRightIcon } from "@heroicons/react/outline";

const ServiciosTarj = ({ icon, serv }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl lg:flex lg:flex-col lg:justify-between">
      <div className="p-8">
        {icon}
        <h1 className="font-bold text-2xl my-6">{serv.title}</h1>
        <p className="text-skin-base text-lg">{serv.text}</p>
      </div>

      <div className="pl-8 py-4 cursor-pointer bg-skin-azul-oscuro hover:bg-skin-azul duration-300  ">
        <p className="text-skin-inverted flex items-center ">
          Pide Informacion{" "}
          <ArrowSmRightIcon className="text-skin-inverted w-5 ml-4" />
        </p>
      </div>
    </div>
  );
};

export default ServiciosTarj;
