import LogoSouthern from "../assets/clients/southern.svg?react";
import LogoAnglo from "../assets/clients/anglo.svg?react";
import LogoCosapi from "../assets/clients/cosapi.svg?react";
import LogoGym from "../assets/clients/gym.svg?react";
import LogoMinsur from "../assets/clients/minsur.svg?react";
import LogoUnicon from "../assets/clients/unicon.svg?react";
import LogoYura from "../assets/clients/yura.svg?react";
import LogoFdaniel from "../assets/clients/fdaniel.svg?react";

function ClientSection() {
  const data = [
    {
      name: "Southern Peru",
      logo: <LogoSouthern className="text-highlight" />,
    },
    {
      name: "Anglo América",
      logo: <LogoAnglo className="text-highlight" />,
    },
    {
      name: "Cosapi",
      logo: <LogoCosapi className="text-highlight" />,
    },
    {
      name: "Graña y Montero",
      logo: <LogoGym className="text-highlight" />,
    },
    {
      name: "Minsur",
      logo: <LogoMinsur className="text-highlight" />,
    },
    {
      name: "Unicon",
      logo: <LogoUnicon className="text-highlight" />,
    },
    {
      name: "Yura",
      logo: <LogoYura className="text-highlight" />,
    },
    {
      name: "Fluor Daniel",
      logo: <LogoFdaniel className="text-highlight" />,
    },
  ];

  return (
    <section id="clientes" className="w-full">
      <div></div>
      <div></div>
      {data[7].logo}
    </section>
  );
}

export default ClientSection;
