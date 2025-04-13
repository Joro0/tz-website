import "./App.css";
import InfoSlider from "./components/InfoSlider";

function App() {
  return (
    <>
      <header></header>
      <main id="main-continaer">
        <section id="intro">
          <h1>slogan</h1>
          <InfoSlider />
        </section>
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
