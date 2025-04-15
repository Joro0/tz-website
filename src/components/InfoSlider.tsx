import "./InfoSlider.css";
import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";

function InfoSlider() {
  const data = [
    {
      icon: <IconQuestion className="w-6 h-6" />,
      title: "QUIÉNES SOMOS?",
      descp:
        "Empresa tacneña especializada en la producción y suministro de agregados en el sur del Perú.",
    },
    {
      icon: <IconMark className="w-6 h-6" />,
      title: "EXPERIENCIA",
      descp:
        "Más de 60 años en el sector nos respaldan, brindando soluciones eficientes y confiables en agregados.",
    },
    {
      icon: <IconMap className="w-6 h-6" />,
      title: "LOCACIÓN",
      descp:
        "Operamos desde Tacna, gestionando proyectos en Moquegua, Ilo, Nasca y otras localidades del sur.",
    },
  ];

  return (
    <div className="bg-gray-200 w-full flex overflow-hidden border-y-1 border-text-image/30 my-2">
      {data.map((info) => (
        <div className="w-full flex flex-col shrink-0 gap-y-1">
          <div>{info.icon}</div>
          <p className="text-lg font-bold">{info.title}</p>
          <p className="text-lg">{info.descp}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoSlider;
