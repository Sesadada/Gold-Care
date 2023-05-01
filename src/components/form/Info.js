import { useContext } from "react";
import { GenContext } from "../../context/GenContext";

const Info = () => {
  const { form } = useContext(GenContext);
  const [formData, setFormData] = form;

  return (
    <div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4">Nombre</label>
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
        <label className="pb-4">Apellido</label>
        <input
          required
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          type="text"
          placeholder="Apellido"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Ciudad de residencia</label>
        <input
          value={formData.city}
          required
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          type="text"
          placeholder="Ciudad de residencia"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
      <div className=" py-3 flex flex-col  m-auto  justify-center items-center">
        <label className="pb-4  ">Email</label>
        <input
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="p-1 grow border-2 border-pink-400 rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Info;
