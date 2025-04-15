import CarouselButtons from "../components/CarouselButtons";
import CarouselIntro from "../components/CarouselIntro";
import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";

import { useState } from "react";

function IntroSection() {
  const [carPos, setCarPos] = useState(1);

  const dataCarousel = [
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
    <section id="intro">
      <h1>AGREGADOS DE CALIDAD, OBRAS CON SOLIDEZ</h1>
      <CarouselIntro data={dataCarousel} />
      <CarouselButtons />
    </section>
  );
}

export default IntroSection;
