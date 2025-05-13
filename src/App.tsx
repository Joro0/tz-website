import "./App.css";
import ClientSection from "./sections/ClientSection";
import DataSection from "./sections/DataSection";
import Header from "./sections/Header";
import IntroSection from "./sections/IntroSection";
import ProjectSection from "./sections/ProjectSection";
import ServiceSection from "./sections/ServiceSection";

function App() {
  return (
    <>
      <Header />
      <main id="main-container">
        <IntroSection />
        <ServiceSection />
        <DataSection />
        <ProjectSection />
        <ClientSection />
        <section id="galeria"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
