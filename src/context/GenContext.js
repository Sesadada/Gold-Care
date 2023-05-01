import { createContext, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  HandIcon,
  ClockIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

export const GenContext = createContext();

export const GenContextProvider = ({ children }) => {
  //Trabajadora form setup
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

  //cloudinary set up
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

  //Servicios Tarj set up

  const servicios = [
    {
      id: 1,
      name: "interna",
      title: "Cuidadora Interna",
      text: "En Senniors te ayudamos a seleccionar a la cuidadora interna que mejor se adapte a las necesidades y preferencias de tu familiar. Seleccionamos al mejor personal doméstico interno para el cuidado de personas mayores y dependientes. Escuchamos vuestras necesidades y realizamos una valoración sociosanitaria de la persona que recibirá los cuidados y de su entorno para ofreceros un servicio a medida. El servicio de cuidadoras internas es ideal para que tu familiar esté acompañado las 24 horas del día. En estos casos, la empleada interna duerme en el domicilio de la persona mayor o dependiente, cuidándolo, acompañándolo y ayudándolo en todo momento. Adaptamos el servicio a tu medida",
    },
    {
      id: 2,
      name: "horas",
      title: "Cuidadora por horas",
      text: "En Senniors seleccionamos a las mejores cuidadoras por horas para el cuidado de personas mayores y dependientes. Hacemos una selección personalizada y a medida para que tu familiar pueda seguir viviendo en su propio hogar, como lo lleva haciendo toda su vida.Te presentamos a las cuidadoras por horas y empleadas externas que mejor se adapten a la situación concreta de tu familiar. Para ello, te escuchamos y realizamos una valoración sociosanitaria de la persona mayor o dependiente que va a recibir los cuidados y de su entorno. Nos adaptamos a vuestra preferencia horaria con cuidadoras a jornada completa, jornada parcial y jornada nocturna. Puedes contratar el servicio desde 3 horas a la semana hasta 60 horas semanales.",
    },
    {
      id: 3,
      name: "acomp",
      title: "Acompañamiento",
      text: "En Senniors seleccionamos a las mejores cuidadoras para la atención de personas mayores y dependientes. Los cuidados pueden realizarse en el lugar donde se encuentre tu familiar: puede ser en su domicilio, en un hospital o en una residencia.Hacemos una selección personalizada y a medida para que tu familiar siempre esté acompañado y cuidado en el lugar donde esté.Este servicio es ideal si tu familiar es trasladado a una residencia o está ingresado en el hospital y quieres que siempre esté acompañado por una persona dedicada exclusivamente a su cuidado y atención. Nos adaptamos a vuestra preferencia horaria con cuidadoras internas o por horas (a jornada completa, jornada parcial y en jornada nocturna). El servicio se puede contratar desde 3 horas a la semana hasta 60 horas semanales.",
    },
    {
      id: 4,
      name: "trae",
      title: "Trae a tu cuidadora",
      text: "¿Tienes dudas en relación con la contratación de tu cuidadora? ¿Ya tienes una cuidadora contratada, pero necesitas ayuda adicional? ¿Quieres tener cobertura de reemplazo en caso de que tu cuidadora esté de baja o en periodo de vacaciones? ¿quieres poder hacer seguimiento de los cuidados recibidos por tu familiar? En Senniors te ayudamos sea cual sea la situación en la que te encuentres y te prestamos los siguientes servicios según tus necesidades: Gestión de todos los trámites administrativos: preparación del contrato laboral, trámites con la Seguridad Social, etc.Preparación y envío mensual de nóminas.Servicio de reemplazo en caso de que tu cuidadora tenga que ausentarse al trabajo (en periodo de vacaciones, por una baja, etc.).Seguimiento asistencial continuado.Asesoramiento sobre las prestaciones y ayudas de dependencia.",
    },
  ];

  const icon = (type) => {
    if (type === "interna") {
      return (
        <HomeIcon
          name={type}
          className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]"
        />
      );
    } else if (type === "horas") {
      return (
        <ClockIcon
          name={type}
          className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]"
        />
      );
    } else if (type === "acomp") {
      return (
        <HandIcon
          name={type}
          className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]"
        />
      );
    } else {
      return (
        <PlusCircleIcon
          name={type}
          className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]"
        />
      );
    }
  };

  return (
    <GenContext.Provider
      value={{
        form: [formData, setFormData],
        heroImg,
        serviciosImg,
        nosotrosImg,
        preciosImg,
        contactoImg,
        servicios,
        icon,
      }}
    >
      {children}
    </GenContext.Provider>
  );
};

export default GenContext;
