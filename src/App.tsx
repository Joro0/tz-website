import "./App.css";
import ClientSection from "./sections/ClientSection";
import DataSection from "./sections/DataSection";
import Footer from "./sections/Footer";
import GalerySection from "./sections/GalerySection";
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
        <GalerySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
