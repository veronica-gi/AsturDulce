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
          <div className="image-text">
            <p>Postres Asturianos</p>
            <p>Un rincón para disfrutar y compartir dulces tradicionales.</p>
          </div>
        </div>

        <div className="image-wrapper right">
          <img src="/src/ui/assets/imgs/foto_superior_1.jpg" alt="Plato con fresas" />
        </div>
      </div>

        <div className="welcome-section">
      <h1>Bienvenida a AsturDulce</h1>
      <p>Siéntate, sirve una taza de café y déjate llevar por el aroma de la repostería asturiana.</p>
      <p>Aquí encontrarás los postres más dulces y tradicionales de nuestra tierra: arroz con leche, fayueles, casadielles, tartas y muchas más delicias que han pasado de generación en generación.</p>
      <p>Descubre y cocina los dulces más típicos de Asturias.</p>
        </div>


      <DessertsPage />
      <Footer />
    </div>
  );
};

export default Home;




