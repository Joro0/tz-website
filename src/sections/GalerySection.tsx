import { useState, useRef, useEffect } from "react";
import GalleryTabs from "../components/GalleryTabs";
import GalleryImages from "../components/GalleryImages";

function GalerySection() {
  // STATES
  const [selected, setSelected] = useState("Producción");
  const [pendingTab, setPendingTab] = useState<string | null>(null);
  const [fade, setFade] = useState(true);
  // REFS
  const scrollRef = useRef<HTMLDivElement>(null);

  // IMAGE DATA
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

  // HANDLERS
  const handleSelect = (title: string) => {
    if (title !== selected) {
      setFade(false);
      setPendingTab(title);
    }
  };

  useEffect(() => {
    if (!fade && pendingTab) {
      const timeout = setTimeout(() => {
        setSelected(pendingTab);
        setFade(true);
        setPendingTab(null);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selected]);

  return (
    <section id="galeria" className="pl-4 md:px-8 lg:px-12 my-15">
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

        <div className="relative xl:ml-6 w-full">
          <div
            ref={scrollRef}
            className={`py-6 relative w-full xl:basis-[80%] flex flex-row gap-4 overflow-x-auto 
          flex-nowrap hide-scrollbar snap-x snap-mandatory transition-opacity duration-400 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          >
            <GalleryImages
              images={
                data.find((item) => item.title === selected)?.images || []
              }
              alt={selected}
            />
          </div>

          <div
            ref={scrollRef}
            className={`absolute top-0 left-0 py-6 w-full xl:basis-[80%] flex flex-row gap-4 overflow-x-auto 
          flex-nowrap hide-scrollbar snap-x snap-mandatory transition-opacity duration-400 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          >
            <GalleryImages
              images={
                data.find((item) => item.title === selected)?.images || []
              }
              alt={selected}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalerySection;
