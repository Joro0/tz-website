import ArrowButton from "../components/ArrowButton";

function ServiceSection() {
  const IMG_SERVICE_PATH = "/images/";
  const data = [
    {
      title: "AGREGADOS GRUESOS",
      descp:
        "Piedra chancada de 1'' a 3/8'' para concreto y bases de pavimentos.",
      shortDescp: "desde 1’’ a 3/8’’",
      img: `${IMG_SERVICE_PATH}service_img1.webp`,
    },
    {
      title: "AGREGADOS FINOS",
      descp: "Arena y gravilla de malla Nº4 a Nº200 para concreto y acabados.",
      shortDescp: "desde malla Nº4 a Nº200",
      img: `${IMG_SERVICE_PATH}service_img2.webp`,
    },
    {
      title: "TRANSPORTES Y DISTRIBUCION",
      descp: "Camiones de 30 a 50 cubos para entrega en obra o planta.",
      shortDescp: "camiones de 30 a 50 cubs.",
      img: `${IMG_SERVICE_PATH}service_img3.webp`,
    },
    {
      title: "ASESORAMIENTO TÉCNICO",
      descp: "Te ayudamos a elegir el material ideal para tu proyecto.",
      shortDescp: "elige el agregado ideal",
      img: `${IMG_SERVICE_PATH}service_img4.webp`,
    },
  ];

  return (
    <section id="servicio" className="px-4 md:px-8 lg:px-12 my-15">
      <h3>SERVICIOS</h3>

      <h1 className="text-main text-5xl md:text-6xl lg:text-7xl lg:w-5/6 xl:w-4/6 ">
        OFRECEMOS UN AMPLIO RANGO DE AGREGADOS DE CALIDAD
      </h1>

      <p className="my-8 md:my-10 lg:my-12 xl:my-14  text-main text-left lg:w-4/6 xl:w-3/6">
        Con maquinaria avanzada, flota de transporte y un equipo especializado,
        garantizamos producción eficiente y agregados de alta calidad.
      </p>

      <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-50 before:content-['']"
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            <div className="flex flex-col w-full p-2 md:p-4 justify-between md:w-70 md:h-95 md:py-6">
              <h4 className="relative text-image">{item.title}</h4>
              <p className="relative text-left text-image font-light">
                <span className="block md:hidden">{item.shortDescp}</span>
                <span className="hidden md:block">{item.descp}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <ArrowButton text="MÁS INFORMACIÓN" />
    </section>
  );
}

export default ServiceSection;
