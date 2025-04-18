import CarouselButtons from "../components/CarouselButtons";
import CarouselIntro from "../components/CarouselIntro";
import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";
import "./IntroSection.css";

import { useState } from "react";
import ImgFadeChange from "../components/ImgFadeChange";

function IntroSection() {
  const [carPos, setCarPos] = useState(1);
  const [carPrevPos, setCarPrevPos] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChangePos = (newPos: number) => {
    setCarPos(newPos);
    setIsAnimating(true);
  };
  const handlePrevPos = (prePos: number) => {
    setCarPrevPos(prePos);
    setIsAnimating(false);
  };

  const IMAGE_INTRO_PATH = "/images/";
  const dataCarousel = [
    {
      icon: <IconQuestion className="w-7 h-7 text-highlight" />,
      title: "QUIÉNES SOMOS?",
      descp:
        "Empresa tacneña especializada en la producción y suministro de agregados en el sur del Perú.",
      img: `${IMAGE_INTRO_PATH}main_img_1.webp`,
    },
    {
      icon: <IconMark className="w-7 h-7 text-highlight" />,
      title: "EXPERIENCIA",
      descp:
        "Más de 60 años en el sector nos respaldan, brindando soluciones eficientes y confiables en agregados.",
      img: `${IMAGE_INTRO_PATH}main_img_2.webp`,
    },
    {
      icon: <IconMap className="w-7 h-7 text-highlight" />,
      title: "LOCACIÓN",
      descp:
        "Operamos desde Tacna, gestionando proyectos en Moquegua, Ilo, Nasca y otras localidades del sur.",
      img: `${IMAGE_INTRO_PATH}main_img_3.webp`,
    },
  ];

  return (
    <section id="intro" className="relative w-full overflow-hidden h-screen">
      <ImgFadeChange
        carPos={carPos}
        carPrevPos={carPrevPos}
        imgDirs={dataCarousel.map((item) => item.img)}
        animating={isAnimating}
        onPrevPos={handlePrevPos}
      />
      <div className="w-full h-full px-4 flex flex-col justify-center gap-24">
        <h1 className="text-image leading-tight">
          AGREGADOS DE CALIDAD, OBRAS CON SOLIDEZ
        </h1>
        <div className="flex flex-col gap-4">
          <CarouselIntro data={dataCarousel} pos={carPos} />
          <CarouselButtons
            qty={dataCarousel.length}
            actualPos={carPos}
            onChangePos={handleChangePos}
            animating={isAnimating}
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
