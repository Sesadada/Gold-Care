import React from "react";

const Presupuesto = () => {
  return (
    <div name="presupuesto" className="p-6">
      <div className="w-full border-4 border-pink-400 p-4 rounded-xl">
        <form>
          <label> Quien necesita cuidados?</label>
          <select>
            <option value="familiar">Un Familiar</option>
            <option value="yo">Yo</option>
          </select>
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Presupuesto;
