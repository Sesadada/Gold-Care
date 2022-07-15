import React, { useState } from "react";

const Docu = () => {
  const [state, setState] = useState(null);
  const onChangeHandler = (event) => {
    setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    });
  };
  const onClickHandler = () => {
    const data = new FormData();
    data.append("file", state.selectedFile);
  };
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
        <input
          type="file"
          name="file"
          onChange={onChangeHandler}
          className="text-sm text-skin plain
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-pink-100 file:text-black
            hover:file:cursor-pointer hover:file:bg-pink-600
            hover:file:text-white px-6 lg:px-0"
        />
        <button onClick={onClickHandler} className="px-4 bg-pink-300 ">
          Sube tu CV
        </button>
      </div>
    </div>
  );
};

export default Docu;
