import {
  ArrowSmRightIcon,
  HandIcon,
  ClockIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Servicios = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sesadada",
    },
  });
  const serviciosImg = cld.image("servicios");
  return (
    <div name="servicios" className="w-full  mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <AdvancedImage
          cldImg={serviciosImg}
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-skin-inverted uppercase text-center">
            Servicios
          </h2>
          <p className="text-5xl font-bold py-6 text-center">
            Te ofrecemos planes de cuidado a tu medida
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-skin-base">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HomeIcon className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]" />
              <h1 className="font-bold text-2xl my-6">Cuidadora Interna</h1>
              <p className="text-skin-base text-lg">
                En Senniors te ayudamos a seleccionar a la cuidadora interna que
                mejor se adapte a las necesidades y preferencias de tu familiar.
                Seleccionamos al mejor personal doméstico interno para el
                cuidado de personas mayores y dependientes. Escuchamos vuestras
                necesidades y realizamos una valoración sociosanitaria de la
                persona que recibirá los cuidados y de su entorno para ofreceros
                un servicio a medida. El servicio de cuidadoras internas es
                ideal para que tu familiar esté acompañado las 24 horas del día.
                En estos casos, la empleada interna duerme en el domicilio de la
                persona mayor o dependiente, cuidándolo, acompañándolo y
                ayudándolo en todo momento. Adaptamos el servicio a tu medida,
                ofreciendo los siguientes servicios de empleadas internas:
                Cuidadoras internas entre semana Cuidadoras internas fines de
                semana Cuidadoras internas las 24h(*), los 7 días de la semana
              </p>
            </div>
            <div className="pl-8 py-4 cursor-pointer bg-skin-azul-oscuro hover:bg-skin-azul duration-300  ">
              <p className="text-skin-inverted flex items-center ">
                Pide Informacion{" "}
                <ArrowSmRightIcon className="text-skin-inverted w-5 ml-4" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ClockIcon className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]" />
              <h1 className="font-bold text-2xl my-6">Cuidadora por horas</h1>
              <p className="text-skin-base text-lg">
                Atención domiciliaria por horas para el cuidado de personas
                mayores y dependientes. Jornada completa, jornada parcial y
                jornada nocturna. En Senniors seleccionamos a las mejores
                cuidadoras por horas para el cuidado de personas mayores y
                dependientes. Hacemos una selección personalizada y a medida
                para que tu familiar pueda seguir viviendo en su propio hogar,
                como lo lleva haciendo toda su vida. Te presentamos a las
                cuidadoras por horas y empleadas externas que mejor se adapten a
                la situación concreta de tu familiar. Para ello, te escuchamos y
                realizamos una valoración sociosanitaria de la persona mayor o
                dependiente que va a recibir los cuidados y de su entorno. Nos
                adaptamos a vuestra preferencia horaria con cuidadoras a jornada
                completa, jornada parcial y jornada nocturna. Puedes contratar
                el servicio desde 3 horas a la semana hasta 60 horas semanales.
              </p>
            </div>
            <div className="pl-8 py-4 cursor-pointer bg-skin-azul-oscuro hover:bg-skin-azul duration-300  ">
              <p className="text-skin-inverted flex items-center ">
                Pide Informacion{" "}
                <ArrowSmRightIcon className="text-skin-inverted w-5 ml-4" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl lg:flex lg:flex-col lg:justify-between">
            <div className="p-8 ">
              <HandIcon className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]" />
              <h1 className="font-bold text-2xl my-6">Acompañamiento</h1>
              <p className="text-skin-base text-lg">
                Hacemos una selección personalizada y a medida para que tu
                familiar siempre esté acompañado y cuidado en el lugar donde
                esté. Este servicio es ideal si tu familiar es trasladado a una
                residencia o está ingresado en el hospital y quieres que siempre
                esté acompañado por una persona dedicada exclusivamente a su
                cuidado y atención. Nos adaptamos a vuestra preferencia horaria
                con cuidadoras internas o por horas (a jornada completa, jornada
                parcial y en jornada nocturna). El servicio se puede contratar
                desde 3 horas a la semana hasta 60 horas semanales.
              </p>
            </div>
            <div className="pl-8 py-4 cursor-pointer bg-skin-azul-oscuro hover:bg-skin-azul duration-300  ">
              <p className="text-skin-inverted flex items-center ">
                Pide Informacion{" "}
                <ArrowSmRightIcon className="text-skin-inverted w-5 ml-4" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PlusCircleIcon className="w-16 p-3 bg-skin-secondary1 text-skin-inverted rounded-lg mt-[-4rem]" />
              <h1 className="font-bold text-2xl my-6">Trae a tu cuidadora</h1>
              <p className="text-skin-base text-lg">
                ¿Has seleccionado a una cuidadora por tu cuenta y la quieres
                contratar? ¿Tienes dudas en relación con la contratación de tu
                cuidadora? ¿Ya tienes una cuidadora contratada, pero necesitas
                ayuda adicional? ¿Quieres tener cobertura de reemplazo en caso
                de que tu cuidadora esté de baja o en periodo de vacaciones?
                ¿quieres poder hacer seguimiento de los cuidados recibidos por
                tu familiar? En Senniors te ayudamos sea cual sea la situación
                en la que te encuentres y te prestamos los siguientes servicios
                según tus necesidades: Gestión de todos los trámites
                administrativos: preparación del contrato laboral, trámites con
                la Seguridad Social, etc. Preparación y envío mensual de
                nóminas. Servicio de reemplazo en caso de que tu cuidadora tenga
                que ausentarse al trabajo (en periodo de vacaciones, por una
                baja, etc.). Seguimiento asistencial continuado. Asesoramiento
                sobre las prestaciones y ayudas de dependencia.
              </p>
            </div>
            <div className="pl-8 py-4 cursor-pointer bg-skin-azul-oscuro hover:bg-skin-azul duration-300  ">
              <p className="text-skin-inverted flex items-center ">
                Pide Informacion{" "}
                <ArrowSmRightIcon className="text-skin-inverted w-5 ml-4" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
