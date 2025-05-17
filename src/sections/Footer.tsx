function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-12 pt-12 pb-8 bg-main flex flex-col gap-24">
      <div>
        <h1 className="text-image">CONTÁCTANOS HOY!</h1>
        <p className="text-image my-8 text-xl md:text-2xl lg:text-3xl">
          Confía en nuestra experiencia y calidad para impulsar tu próximo
          proyecto.
        </p>
        <button className="bg-highlight py-4 px-8 text-xl font-h1 font-semibold rounded-lg">
          ENVÍA CORREO AHORA
        </button>
      </div>

      <div className="flex flex-col gap-12 md:flex-row md:gap-16">
        <div>
          <p className="font-h1 font-bold text-image text-xl md:text-2xl lg:text-3xl mb-2">
            Visítanos
          </p>
          <p className="text-image">
            Av. Hipolito Unanue 840 Int.101, Tacna, Perú
          </p>
        </div>

        <div>
          <p className="font-h1 font-bold text-image text-xl md:text-2xl lg:text-3xl mb-2">
            Llámanos
          </p>
          <p className="text-image">
            Secretaría: (052)-601552
            <br />
            Administración: (052)-421599
            <br />
            Operaciones: (052)-421599
          </p>
        </div>
        <div>
          <p className="font-h1 font-bold text-image text-xl md:text-2xl lg:text-3xl mb-2">
            Escríbenos
          </p>
          <p className="text-image">transportes@tzuniga.com.pe</p>
        </div>
      </div>

      <p className="text-image/20 text-base md:text-lg lg:text-xl">
        Transportes Zuñiga @2014 <br /> Derechos Reservados
      </p>
    </footer>
  );
}

export default Footer;
