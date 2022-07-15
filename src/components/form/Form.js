import React, { useState } from "react";
import Dispo from "./Dispo";
import Docu from "./Docu";
import Info from "./Info";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    city: "",
    email: "",
    permit: "",
    cv: {},
    days: "",
    kind: "",
    specialty: "",
  });
  const [page, setPage] = useState(0);
  const formTitles = [
    "INFORMACION PERSONAL",
    "DOCUMENTACION",
    "DISPONIBILIDAD",
  ];
  const changePages = (e, direction) => {
    e.preventDefault();
    direction === "d"
      ? setPage((curr) => curr + 1)
      : setPage((curr) => curr - 1);
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <Info formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Docu />;
    } else {
      return <Dispo />;
    }
  };
  console.log(page);
  return (
    <div className="flex flex-col justify-center">
      <div className="mx-4 mt-4 ">
        <div
          className="bg-skin-azul h-1 p-2"
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <h3 className="mt-3 py-3 flex flex-col m-auto justify-center ">
        {formTitles[page]}
      </h3>
      <form className="flex flex-col justify-center">
        <div className=" flex flex-col justify-center">
          {pageDisplay()}
          <div className="text-center">
            <button
              disabled={page === 0}
              onClick={(e) => changePages(e, "s")}
              className="p-2 mx-1"
            >
              Prev
            </button>
            <button
              disabled={page === formTitles.length - 1}
              onClick={(e) => changePages(e, "d")}
              className="p-2 mx-1"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
