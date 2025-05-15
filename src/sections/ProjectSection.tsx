import ArrowButton from "../components/ArrowButton";

function ProjectSection() {
  const projectData = [
    {
      title: "PUCAMARCA",
      location: "Moquegua",
      year: 2024,
      status: "ACTIVO",
      imageUrl: "/images/proyecto1.webp",
    },
    {
      title: "CERRO BLANCO",
      location: "Tacna",
      year: 2020,
      status: "ACTIVO",
      imageUrl: "/images/proyecto2.webp",
    },
  ];

  return (
    <section id="projectSection" className="px-4 md:px-8 lg:px-12 my-15">
      <h3>PROYECTOS DESTACADOS</h3>

      <div className="flex flex-col gap-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`w-full h-77 gap-0.5 flex flex-col justify-end py-2 px-2 bg-cover bg-center`}
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <div className="bg-white/60 backdrop-blur-xs px-4 py-3">
              <h2 className="text-secondary">{project.title}</h2>
              <p className="font-h1">
                {project.location} | {project.year}
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-xs flex flex-row justify-end items-center pr-4 py-0.5 gap-2">
              <div className="w-3 h-3 bg-highlight animate-(--animate-blink)"></div>
              <h4 className="text-xl">{project.status}</h4>
            </div>
          </div>
        ))}
      </div>

      <ArrowButton text="OTROS PROYECTOS" />
    </section>
  );
}

export default ProjectSection;
