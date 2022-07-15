import React, { useState } from "react";
import Dispo from "./Dispo";
import Docu from "./Docu";
import Info from "./Info";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

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
      return <Info />;
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
              onClick={(e) => {
                if (page === formTitles - 1) {
                  setSubmitted(true);
                } else {
                  changePages(e, "d");
                }
              }}
              className="p-2 mx-1"
            >
              {page === formTitles.length - 1 ? "Submit" : "Next"}
            </button>
            {!submitted && <p> Formulario Enviado</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
