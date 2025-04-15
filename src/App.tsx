import "./App.css";

import IntroSection from "./sections/IntroSection";

function App() {
  return (
    <>
      <header></header>
      <main id="main-container" className="px-4">
        <IntroSection />
        <section id="servicio"></section>
        <section id="datos"></section>
        <section id="clientes"></section>
        <section id="proyectos"></section>
        <section id="galeria"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
