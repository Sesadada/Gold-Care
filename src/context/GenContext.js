import { createContext, useState } from "react";

export const GenContext = createContext();

export const GenContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    city: "",
    email: "",
    permit: "",
    years: 0,
    hasCv: "",
    days: "",
    kind: "",
    specialty: "",
  });

  return (
    <GenContext.Provider value={{ form: [formData, setFormData] }}>
      {children}
    </GenContext.Provider>
  );
};

export default GenContext;
