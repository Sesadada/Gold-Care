import React from "react";

const Presupuesto = () => {
  return (
    <div name="presupuesto" className="p-6">
      <div className="px-4 py-12">
        <h2 className="pt-4 text-3xl text-skin-secondary uppercase text-center">
          Formulario
        </h2>
        <p className="text-5xl font-bold pt-6 text-center">
          Para ofrecerte el mejor precio, vamos a hacerte unas breves preguntas.{" "}
        </p>
      </div>
      <div className="w-full border-4 border-pink-400 p-4 rounded-xl">
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="border-2 border-yellow-400 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
              <label className="pb-4">
                Quien necesita cuidados? <br />
                <span></span>
              </label>
              <select className="rounded-lg bg-yellow-300 p-3 ">
                <option value="familiar">Un Familiar</option>
                <option value="yo">Yo</option>
              </select>
            </div>
            <div className="border-2 border-yellow-400 rounded-lg p-4 flex flex-col  py-6 m-4 justify-between">
              <label className="pb-4">
                {" "}
                Cuanto tiempo duraran los cuidados?
              </label>
              <select className="rounded-lg bg-yellow-300 p-3 ">
                <option value="inseguro">No estoy seguro</option>
                <option value="mas">Mas de un mes</option>
                <option value="menos">Menos de un mes</option>
              </select>
            </div>
            <div className="border-2 border-yellow-400 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
              <label className="pb-4">
                {" "}
                Cuantos dias de la semana quiere recibir los cuidados?
              </label>
              <select className="rounded-lg bg-yellow-300 p-3">
                <option value="inseguro">Todos los dias</option>
                <option value="yo">Dos o tres dias</option>
                <option value="yo">un dia</option>
              </select>
            </div>
            <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
              <label className="pb-4">
                {" "}
                En que horarios quiere recibir los cuidados?
              </label>
              <select className="rounded-lg bg-yellow-400 p-3">
                <option value="interna">24h - interna</option>
                <option value="diferentes">Horarios diferentes</option>
                <option value="mismo">Mismo horario todos los dias</option>
              </select>
            </div>
            <div className="lg:col-span-4 mx-4 lg:flex items-center justify-between">
              <div className=" py-8 flex flex-col lg:flex-row m-auto lg:justify-evenly justify-center items-center">
                <label className="pb-4 lg:pr-4 lg:pb-0">
                  {" "}
                  Donde quiere recibir el presupuesto?
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="lg:mr-4 p-4 border-2 border-pink-400 rounded-xl shadow-lg"
                />

                <button className=" lg:mt-2 mt-8 px-6 text-black">Envia</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Presupuesto;
