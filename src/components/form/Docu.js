import React, { useState } from "react";
import { useContext } from "react";
import { GenContext } from "../../context/GenContext";

const Docu = () => {
  const [state, setState] = useState(null);
  const { form } = useContext(GenContext);
  const [formData, setFormData] = form;

  return (
    <div className="flex flex-col">
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> Tienes permiso de trabajo?</label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> Experiencia?</label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="si">Menos de 1 año</option>
          <option value="no">Mas de 1 año</option>
        </select>
      </div>
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> Tienes Curriculum?</label>
        <select className="rounded-lg bg-yellow-400 p-3">
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
};

export default Docu;
