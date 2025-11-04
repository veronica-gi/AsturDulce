import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DessertsPage from "./DessertsPage";

import "../css/styles.css";

// Imágenes desde la carpeta public (Vite) usando BASE_URL
const fotoSuperior1 = import.meta.env.BASE_URL + "imgs/foto_superior_1.jpg";
const fotoSuperior2 = import.meta.env.BASE_URL + "imgs/Foto_superior_2.jpg";
const fotoSuperior3 = import.meta.env.BASE_URL + "imgs/foto_superior_3.jpg";
const icono1 = import.meta.env.BASE_URL + "imgs/icono1.png";
const icono2 = import.meta.env.BASE_URL + "imgs/icono2.png";

const Home = () => {
  return (
    <div>
      <Header />

      {/* Tres imágenes fijas con efecto inclinación solo lateral */}
      <div className="fixed-images-container">
        <div className="image-wrapper left">
          <img src={fotoSuperior3} alt="Copas de cristal" />
        </div>

        <div className="image-wrapper center">
          <img src={fotoSuperior2} alt="Mesa de postres" />
          <div className="image-text">
            <p>Postres Asturianos</p>
            <p>Un rincón para disfrutar y compartir dulces tradicionales.</p>
          </div>
        </div>

        <div className="image-wrapper right">
          <img src={fotoSuperior1} alt="Plato con fresas" />
        </div>
      </div>

      <div className="welcome-section">
        <h1>Bienvenida a AsturDulce</h1>
        <p>
          Siéntate, sirve una taza de café y déjate llevar por el aroma de la repostería asturiana.
        </p>
        <p>
          Aquí encontrarás los postres más dulces y tradicionales de nuestra tierra: arroz con leche, 
          fayueles, casadielles, tartas y muchas más delicias que han pasado de generación en generación.
        </p>
        <p>Descubre y cocina los dulces más típicos de Asturias.</p>
      </div>

      <div className="welcome-icons">
        <div className="icons-track">
          {Array(8).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <img src={icono1} alt="Porción de tarta" />
              <img src={icono2} alt="Magdalena" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <DessertsPage />
      <Footer />
    </div>
  );
};

export default Home;










