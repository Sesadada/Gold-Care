import React from "react";

const Info = ({ formData, setFormData }) => {
  return (
    <>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Nombre </label>
        <input
          onChange={setFormData({ ...formData.name })}
          type="text"
          placeholder="Nombre"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Apellido</label>
        <input
          type="text"
          placeholder="Apellido"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Ciudad de residencia</label>
        <input
          type="text"
          placeholder="Ciudad de residencia"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
    </>
  );
};

export default Info;
