import React from "react";
import "../css/DessertCard.css"; // CSS específico de la tarjeta

const DessertCard = ({ dessert }) => {
  return (
    <div className="dessert-card">
      <img
        src={dessert.img} 
        alt={dessert.name}
        className="dessert-image"
      />
      <h3>{dessert.name}</h3>
      <p>Categoría: {dessert.category}</p>
      <p>Dificultad: {dessert.difficulty}</p>
      <button>❤️ Favorito</button>
    </div>
  );
};

export default DessertCard;

