import { createContext, useState } from "react";

export const GenContext = createContext();

export const GenContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    city: "",
    email: "",
    permit: "si",
    years: "mas",
    days: "todos",
    kind: "interna",
    specialty: "ancianos",
  });

  return (
    <GenContext.Provider value={{ form: [formData, setFormData] }}>
      {children}
    </GenContext.Provider>
  );
};

export default GenContext;
