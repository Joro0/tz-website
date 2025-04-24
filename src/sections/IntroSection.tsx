import IconQuestion from "../assets/icons/icon_question.svg?react";
import IconMark from "../assets/icons/icon_mark.svg?react";
import IconMap from "../assets/icons/icon_map.svg?react";

import { useState, useMemo } from "react";
import ImgFadeChange from "../components/ImgFadeChange";
import CarouselButtons from "../components/CarouselButtons";
import CarouselIntro from "../components/CarouselIntro";

function IntroSection() {
  const [carPos, setCarPos] = useState(1);
  const [carPrevPos, setCarPrevPos] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handlers for carousel state
  const handleChangePos = (newPos: number) => {
    setCarPos(newPos);
    setIsAnimating(true);
  };
  const handlePrevPos = (prePos: number) => {
    setCarPrevPos(prePos);
    setIsAnimating(false);
  };

  // Memoized static data for better performance
  const IMAGE_INTRO_PATH = "/images/";
  const dataCarousel = useMemo(
    () => [
      {
        icon: (
          <IconQuestion className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-highlight" />
        ),
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
    ],
    []
  );

  return (
    <section id="intro" className="relative w-full overflow-hidden h-screen">
      <ImgFadeChange
        carPos={carPos}
        carPrevPos={carPrevPos}
        imgDirs={dataCarousel.map((item) => item.img)}
        animating={isAnimating}
        onPrevPos={handlePrevPos}
      />
      <div className="w-full h-full px-4 md:px-8 lg:px-12 flex flex-col justify-center">
        <div className="flex flex-1/6"></div>

        <h1 className="flex flex-col justify-center flex-2/6 text-image leading-tight text-left md:w-4/5 xl:w-4/6">
          AGREGADOS DE CALIDAD, OBRAS CON SOLIDEZ
        </h1>

        <div className="flex flex-col flex-3/6 justify-center gap-4 w-full items-start md:w-140 lg:w-180 xl:w-200">
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
