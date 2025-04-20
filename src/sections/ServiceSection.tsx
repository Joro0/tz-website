import IconArrowRight from "../assets/icons/icon_right_arrow.svg?react";

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
    <section id="servicio" className="px-4 my-15">
      <h4 className="my-2 text-secondary">Servicios</h4>
      <h2 className="mb-4 text-main">
        OFRECEMOS UN AMPLIO RANGO DE AGREGADOS DE CALIDAD
      </h2>
      <p className="my-6 text-main">
        Con maquinaria avanzada, flota de transporte y un equipo especializado,
        garantizamos producción eficiente y agregados de alta calidad.
      </p>
      <div className="flex flex-col gap-2">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative w-full p-2 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-35 before:content-['']"
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            <h3 className="relative text-image">{item.title}</h3>
            <p className="relative text-left text-image">{item.shortDescp}</p>
          </div>
        ))}
      </div>
      <button className="flex flex-row items-center w-full my-5 gap-3">
        <IconArrowRight className="w-5 text-highlight stroke-3 inline" />
        <h4 className="font-h1 font-extrabold">MÁS INFORMACIÓN</h4>
      </button>
    </section>
  );
}

export default ServiceSection;
