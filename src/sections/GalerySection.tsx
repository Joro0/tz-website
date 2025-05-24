import { useState, useRef, useEffect } from "react";
import GalleryTabs from "../components/GalleryTabs";
import GalleryImages from "../components/GalleryImages";

function GalerySection() {
  const [selected, setSelected] = useState("Producción");
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      title: "Producción",
      images: [
        "/images/gal_p1.webp",
        "/images/gal_p2.webp",
        "/images/gal_p3.webp",
        "/images/gal_p4.webp",
      ],
    },
    {
      title: "Maquinaria",
      images: [
        "/images/gal_m1.webp",
        "/images/gal_m2.webp",
        "/images/gal_m3.webp",
        "/images/gal_m4.webp",
      ],
    },
  ];

  const handleSelect = (title: string) => setSelected(title);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selected]);

  return (
    <section id="galeria" className="pl-4 md:pl-8 lg:pl-12 my-15 ">
      <h3>GALERÍA</h3>

      <div
        className="w-full flex flex-col divide-y-1 divide-secondary/40 xl:flex-row xl:divide-x-1 
      xl:divide-y-0 xl:border-y-1 border-secondary/40"
      >
        <div className="py-6 flex flex-row gap-4 xl:flex-col xl:basis-[20%]">
          <GalleryTabs
            tabTitles={data.map((item) => item.title)}
            selectedTab={selected}
            onSelect={handleSelect}
          />
        </div>

        <div
          ref={scrollRef}
          className="py-6 xl:ml-6 relative w-full xl:basis-[80%] flex flex-row gap-4 overflow-x-auto 
          flex-nowrap hide-scrollbar snap-x snap-mandatory "
        >
          <GalleryImages
            images={data.find((item) => item.title === selected)?.images || []}
            alt={selected}
          />
        </div>
      </div>
    </section>
  );
}

export default GalerySection;
