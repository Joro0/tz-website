import "./App.css";
import IntroSection from "./sections/IntroSection";
import ServiceSection from "./sections/ServiceSection";

function App() {
  return (
    <>
      <header className="fixed top-0 right-0 left-0"></header>
      <main id="main-container">
        <IntroSection />
        <ServiceSection />
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
