import CarouselButtons from "../components/CarouselButtons";
import CarouselIntro from "../components/CarouselIntro";
import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";

import { useState } from "react";

function IntroSection() {
  const [carPos, setCarPos] = useState(1);
  const handleChangePos = (newPos: number) => {
    setCarPos(newPos);
  };

  const IMAGE_INTRO_PATH = "/images/";
  const dataCarousel = [
    {
      icon: <IconQuestion className="w-6 h-6" />,
      title: "QUIÉNES SOMOS?",
      descp:
        "Empresa tacneña especializada en la producción y suministro de agregados en el sur del Perú.",
      img: `${IMAGE_INTRO_PATH}main_img_1.webp`,
    },
    {
      icon: <IconMark className="w-6 h-6" />,
      title: "EXPERIENCIA",
      descp:
        "Más de 60 años en el sector nos respaldan, brindando soluciones eficientes y confiables en agregados.",
      img: `${IMAGE_INTRO_PATH}main_img_2.webp`,
    },
    {
      icon: <IconMap className="w-6 h-6" />,
      title: "LOCACIÓN",
      descp:
        "Operamos desde Tacna, gestionando proyectos en Moquegua, Ilo, Nasca y otras localidades del sur.",
      img: `${IMAGE_INTRO_PATH}main_img_3.webp`,
    },
  ];

  return (
    <section id="intro" className="relative w-full overflow-hidden h-screen">
      <div
        className={`absolute inset-0 bg-cover bg-center -z-10`}
        style={{
          backgroundImage: `url('${dataCarousel[carPos - 1].img}')`,
        }}
      ></div>
      <h1>AGREGADOS DE CALIDAD, OBRAS CON SOLIDEZ</h1>
      <CarouselIntro data={dataCarousel} pos={carPos} />
      <CarouselButtons
        qty={dataCarousel.length}
        onChangePos={handleChangePos}
      />
    </section>
  );
}

export default IntroSection;
