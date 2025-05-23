import { useState, useRef, useEffect } from "react";
import GalleryTabs from "../components/GalleryTabs";

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
      <div className="flex flex-row gap-4">
        <GalleryTabs
          tabTitles={data.map((item) => item.title)}
          selectedTab={selected}
          onSelect={handleSelect}
        />
      </div>

      <hr className="my-4 border-t-1 border-secondary/40" />
      <div
        ref={scrollRef}
        className="relative w-full flex flex-row gap-4 overflow-x-auto flex-nowrap hide-scrollbar snap-x snap-mandatory"
      >
        {data
          .find((item) => item.title === selected)
          ?.images.map((img) => (
            <img
              key={img}
              src={img}
              alt={selected}
              loading="lazy"
              className="w-5/6 aspect-[9/10] object-cover shadow snap-start rounded-xl md:w-4/9 lg:w-6/12"
            />
          ))}
      </div>
      <hr className="my-4 border-t-1 border-secondary/40" />
    </section>
  );
}

export default GalerySection;
