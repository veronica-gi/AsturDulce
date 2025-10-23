import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DessertsPage from "./DessertsPage";
import "../css/styles.css";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Tres imágenes fijas con efecto inclinación solo lateral */}
      <div className="fixed-images-container">
        <div className="image-wrapper left">
          <img src="/src/ui/assets/imgs/foto_superior_3.jpg" alt="Copas de cristal" />
        </div>

        <div className="image-wrapper center">
          <img src="/src/ui/assets/imgs/foto_superior_2.jpg" alt="Mesa de postres" />
          <div className="image-text">Postres Asturianos</div>
        </div>

        <div className="image-wrapper right">
          <img src="/src/ui/assets/imgs/foto_superior_1.jpg" alt="Plato con fresas" />
        </div>
      </div>

      <h1>Bienvenida a AsturDulce</h1>
      <p>Proyecto inicial con React y Vite.</p>

      <DessertsPage />
      <Footer />
    </div>
  );
};

export default Home;




