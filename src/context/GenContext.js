import { createContext, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

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

  const cld = new Cloudinary({
    cloud: {
      cloudName: "sesadada",
    },
  });
  const heroImg = cld.image("senniors-hero");
  const serviciosImg = cld.image("servicios");
  const nosotrosImg = cld.image("nosotros");
  const preciosImg = cld.image("precios");
  const contactoImg = cld.image("contacto");
  return (
    <GenContext.Provider
      value={{
        form: [formData, setFormData],
        heroImg,
        serviciosImg,
        nosotrosImg,
        preciosImg,
        contactoImg,
      }}
    >
      {children}
    </GenContext.Provider>
  );
};

export default GenContext;
