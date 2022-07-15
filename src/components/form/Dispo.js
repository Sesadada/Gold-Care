import { useContext } from "react";
import { GenContext } from "../../context/GenContext";

const Dispo = () => {
  const { form } = useContext(GenContext);
  const [formData, setFormData] = form;
  return (
    <div className="flex flex-col">
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center">
          {" "}
          Que dias de la semana puedes?
        </label>
        <select
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
          value={formData.days}
          className="rounded-lg bg-yellow-400 p-3"
        >
          <option value="todos">Todos</option>
          <option value="algunos">Algunos</option>
        </select>
      </div>
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> En que esta interesado/a?</label>
        <select
          onChange={(e) => setFormData({ ...formData, kind: e.target.value })}
          value={formData.kind}
          className="rounded-lg bg-yellow-400 p-3"
        >
          <option value="interna">Cuidadora Interna</option>
          <option value="diferentes">Cuidadora por horas</option>
          <option value="acompañamiento">Acompañamiento</option>
        </select>
      </div>{" "}
      <div className="border-2 border-yellow-300 rounded-lg p-4 flex flex-col py-6 m-4 justify-between">
        <label className="pb-4 text-center"> Tu especialidad</label>
        <select
          onChange={(e) =>
            setFormData({ ...formData, specialty: e.target.value })
          }
          value={formData.specialty}
          className="rounded-lg bg-yellow-400 p-3"
        >
          <option value="ancianos">Ancianos</option>
          <option value="discapacitados">Discapacitados</option>
        </select>
      </div>{" "}
    </div>
  );
};

export default Dispo;
