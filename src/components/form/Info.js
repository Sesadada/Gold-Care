import React from "react";

const Info = ({ formData, setFormData }) => {
  console.log("form", formData.email);
  return (
    <div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Nombre </label>
        <input
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type="text"
          placeholder="Nombre"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Apellido</label>
        <input
          required
          type="text"
          placeholder="Apellido"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Ciudad de residencia</label>
        <input
          required
          type="text"
          placeholder="Ciudad de residencia"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Email</label>
        <input
          required
          type="email"
          placeholder="Email"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Info;
