import "./InfoSlider.css";
import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";

function InfoSlider() {
  const data = [
    {
      icon: <IconQuestion />,
      title: "QUIÉNES SOMOS?",
      descp:
        "Empresa tacneña especializada en la producción y suministro de agregados en el sur del Perú.",
    },
    {
      icon: <IconMark />,
      title: "EXPERIENCIA",
      descp:
        "Más de 60 años en el sector nos respaldan, brindando soluciones eficientes y confiables en agregados.",
    },
    {
      icon: <IconMap />,
      title: "LOCACIÓN",
      descp:
        "Operamos desde Tacna, gestionando proyectos en Moquegua, Ilo, Nasca y otras localidades del sur.",
    },
  ];

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      {data.map((info) => (
        <div>
          {info.icon}
          <p>{info.title}</p>
          <p>{info.descp}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoSlider;
