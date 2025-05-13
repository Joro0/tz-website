import LogoSouthern from "../assets/clients/southern.svg?react";
import LogoAnglo from "../assets/clients/anglo.svg?react";
import LogoCosapi from "../assets/clients/cosapi.svg?react";
import LogoGym from "../assets/clients/gym.svg?react";
import LogoMinsur from "../assets/clients/minsur.svg?react";
import LogoUnicon from "../assets/clients/unicon.svg?react";
import LogoYura from "../assets/clients/yura.svg?react";
import LogoFdaniel from "../assets/clients/fdaniel.svg?react";
import CarouselInfinite from "../components/CarouselInfinite";
import LinePattern from "../assets/patterns/line_pattern.svg?react";

function ClientSection() {
  const colorLogo = "text-image"; // Define the color for the logos
  const data = [
    {
      name: "Southern Peru",
      svgLogo: <LogoSouthern className={colorLogo} />,
    },
    {
      name: "Anglo América",
      svgLogo: <LogoAnglo className={colorLogo} />,
    },
    {
      name: "Cosapi",
      svgLogo: <LogoCosapi className={colorLogo} />,
    },
    {
      name: "Graña y Montero",
      svgLogo: <LogoGym className={colorLogo} />,
    },
    {
      name: "Minsur",
      svgLogo: <LogoMinsur className={colorLogo} />,
    },
    {
      name: "Unicon",
      svgLogo: <LogoUnicon className={colorLogo} />,
    },
    {
      name: "Yura",
      svgLogo: <LogoYura className={colorLogo} />,
    },
    {
      name: "Fluor Daniel",
      svgLogo: <LogoFdaniel className={colorLogo} />,
    },
  ];

  return (
    <section
      id="clientes"
      className="relative w-full bg-secondary py-3 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 left-0">
        <LinePattern className="w-1/2 opacity-15 text-image" />
      </div>
      <h3 className="text-highlight text-center mt-0">CLIENTES</h3>
      <CarouselInfinite data={data} wLogo={16} gLogo={9} rLogo={2} />
    </section>
  );
}

export default ClientSection;
