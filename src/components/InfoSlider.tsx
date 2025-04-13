function InfoSlider() {
  const data = [
    {
      icon: "../assets/icons/icon_question.svg",
      title: "QUIÉNES SOMOS?",
      descp:
        "Empresa tacneña especializada en la producción y suministro de agregados en el sur del Perú.",
    },
    {
      icon: "../assets/icons/icon_mark.svg",
      title: "EXPERIENCIA",
      descp:
        "Más de 60 años en el sector nos respaldan, brindando soluciones eficientes y confiables en agregados.",
    },
    {
      icon: "../assets/icons/icon_map.svg",
      title: "LOCACIÓN",
      descp:
        "Operamos desde Tacna, gestionando proyectos en Moquegua, Ilo, Nasca y otras localidades del sur.",
    },
  ];

  return (
    <div>
      {data.map((info) => (
        <div>
          {/*here want to import the svg icon as an element*/}
          <p>{info.title}</p>
          <p>{info.descp}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoSlider;
