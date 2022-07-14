import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Nosotros = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "sesadada",
    },
  });
  const nosotrosImg = cld.image("nosotros");
  return (
    <div name="nosotros" className="w-full my-20">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          {" "}
          <h2 className="pt-8 text-3xl text-skin-secondary uppercase text-center">
            Nosotros
          </h2>
          <p className="text-5xl font-bold py-6 text-center">
            Cuidados de confianza a domicilio{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <AdvancedImage cldImg={nosotrosImg} className="md:w-[80%] w-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-1 px-2 mt-4">
          <div className="border-4 py-8 rounded-xl border-skin-bazul shadow-xl p-4 m-4">
            <h3 className="text-3xl text-skin-secondary">Quienes Somos</h3>
            <p className="mt-4">
              Senniors es una empresa de cuidados de confianza a domicilio de
              personas mayores y dependientes. En Senniors cuidamos a nuestros
              mayores y dependientes con calidez y profesionalidad. Combinamos
              humanidad y tecnología para que nuestros mayores puedan vivir una
              vida plena en sus propios hogares.
            </p>
          </div>
          <div className="border-4 py-8 rounded-xl border-skin-bazul-oscuro shadow-xl p-4 m-4">
            <h3 className="text-3xl text-skin-secondary">Nuestra Mision</h3>
            <p className="mt-4">
              La misión de Senniors es ayudar a las personas mayores y
              dependientes a seguir viviendo en su propio hogar, con una mejor
              calidad de vida, recibiendo cuidados expertos, cercanos y de
              confianza a domicilio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
