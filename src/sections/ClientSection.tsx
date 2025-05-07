import LogoSouthern from "../assets/clients/southern.svg?react";
import LogoAnglo from "../assets/clients/anglo.svg?react";
import LogoCosapi from "../assets/clients/cosapi.svg?react";
import LogoGym from "../assets/clients/gym.svg?react";
import LogoMinsur from "../assets/clients/minsur.svg?react";
import LogoUnicon from "../assets/clients/unicon.svg?react";
import LogoYura from "../assets/clients/yura.svg?react";
import LogoFdaniel from "../assets/clients/fdaniel.svg?react";
import CarouselInfinite from "../components/CarouselInfinite";

function ClientSection() {
  const data = [
    {
      name: "Southern Peru",
      svgLogo: <LogoSouthern className="text-main" />,
    },
    {
      name: "Anglo América",
      svgLogo: <LogoAnglo className="text-main" />,
    },
    {
      name: "Cosapi",
      svgLogo: <LogoCosapi className="text-main" />,
    },
    {
      name: "Graña y Montero",
      svgLogo: <LogoGym className="text-main" />,
    },
    {
      name: "Minsur",
      svgLogo: <LogoMinsur className="text-main" />,
    },
    {
      name: "Unicon",
      svgLogo: <LogoUnicon className="text-main" />,
    },
    {
      name: "Yura",
      svgLogo: <LogoYura className="text-main" />,
    },
    {
      name: "Fluor Daniel",
      svgLogo: <LogoFdaniel className="text-main" />,
    },
  ];

  return (
    <section id="clientes" className="w-full">
      <div></div>
      <h3 className="text-main text-center">CLIENTS</h3>
      <CarouselInfinite data={data} wLogo={15} gLogo={10} rLogo={2} />
    </section>
  );
}

export default ClientSection;
