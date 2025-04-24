function DataSection() {
  const data = [
    { value: "13", descp: "Flota de transporte pesado" },
    { value: "20", descp: "Flota de maquinaria amarilla " },
    { value: "93%", descp: "De pureza de agregado" },
    { value: "15+", descp: "Proyectos completados" },
  ];

  return (
    <section id="datos" className="px-4 md:px-8 lg:px-12 my-15">
      <div className="flex flex-col xl:flex-row">
        <h3 className="flex xl:flex-2/5">SERVICIOS</h3>
        <h2 className="flex xl:flex-2/5">
          Desde los 60’, hemos crecido en maquinaria, proyectos y estándares de
          calidad
        </h2>
      </div>

      <div className="my-12 md:my-26 flex flex-col gap-y-4 md:flex-row md:flex-wrap">
        {data.map((item, i) => (
          <div
            key={i}
            className="px-4 md:px-12 xl:px-14 border-l-2 border-secondary/30 flex flex-col gap-4 md:text-center md:w-1/3 xl:w-1/4"
          >
            <h2 className="text-secondary font-bold font-text">{item.value}</h2>
            <p>{item.descp}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataSection;
