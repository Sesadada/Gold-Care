import React from "react";

const Dispo = () => {
  return (
    <div className="flex flex-col">
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center">
          {" "}
          Que dias de la semana puedes?
        </label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="si">Todos</option>
          <option value="no">Algunos</option>
        </select>
      </div>
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> En que esta interesado/a?</label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="interna">Cuidadora Interna</option>
          <option value="diferentes">Cuidadora por horas</option>
          <option value="acompañamiento">Acompañamiento</option>
        </select>
      </div>{" "}
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> Tu especialidad</label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="interna">Ancianos</option>
          <option value="diferentes">Discapacitados</option>
        </select>
      </div>{" "}
    </div>
  );
};

export default Dispo;
