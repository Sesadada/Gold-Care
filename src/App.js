import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Precios from "./components/Precios";
import Presupuesto from "./components/Presupuesto";
import Servicios from "./components/Servicios";
import { GenContextProvider } from "./context/GenContext";

function App() {
  return (
    <div className="App">
      <GenContextProvider>
        <Navbar />
        <Hero />
        <Servicios />
        <Precios />
        <Presupuesto />
        <Nosotros />
        <Contacto />
        <Footer />
      </GenContextProvider>
    </div>
  );
}

export default App;
