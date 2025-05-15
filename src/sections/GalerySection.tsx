import { useState, useRef, useEffect } from "react";

function GalerySection() {
  const [selected, setSelected] = useState("Trabajadores");
  const scrollRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      title: "Trabajadores",
      images: [
        "/images/gal_t1.webp",
        "/images/gal_t2.webp",
        "/images/gal_t3.webp",
        "/images/gal_t4.webp",
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

  // Reset scroll position when selected changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [selected]);

  return (
    <section id="galeria" className="px-4 md:px-8 lg:px-12 my-15">
      <h3>GALERÍA</h3>
      <div className="flex flex-row gap-4">
        {data.map((item, i) => (
          <button
            key={i}
            className={`py-2 px-4 rounded-3xl font-text text-base transition-colors ${
              selected === item.title
                ? "bg-main text-image"
                : "border-2 border-main text-main bg-transparent"
            }`}
            onClick={() => setSelected(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <hr className="my-4 border-t-1 border-secondary/40" />
      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-auto flex-nowrap hide-scrollbar"
      >
        {data
          .find((item) => item.title === selected)
          ?.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={selected + " " + (idx + 1)}
              className="w-40 h-40 object-cover rounded-xl shadow"
            />
          ))}
      </div>
      <hr className="my-4 border-t-1 border-secondary/40" />
    </section>
  );
}

export default GalerySection;
