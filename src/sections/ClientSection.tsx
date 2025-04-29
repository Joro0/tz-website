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
      svgLogo: <LogoSouthern className="text-highlight" />,
    },
    {
      name: "Anglo América",
      svgLogo: <LogoAnglo className="text-highlight" />,
    },
    {
      name: "Cosapi",
      svgLogo: <LogoCosapi className="text-highlight" />,
    },
    {
      name: "Graña y Montero",
      svgLogo: <LogoGym className="text-highlight" />,
    },
    {
      name: "Minsur",
      svgLogo: <LogoMinsur className="text-highlight" />,
    },
    {
      name: "Unicon",
      svgLogo: <LogoUnicon className="text-highlight" />,
    },
    {
      name: "Yura",
      svgLogo: <LogoYura className="text-highlight" />,
    },
    {
      name: "Fluor Daniel",
      svgLogo: <LogoFdaniel className="text-highlight" />,
    },
  ];

  return (
    <section id="clientes" className="w-full">
      <div></div>
      <h2>CLIENTS</h2>
      <hr />
      <CarouselInfinite data={data} />
    </section>
  );
}

export default ClientSection;
