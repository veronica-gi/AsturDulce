import React from "react";
import { images } from "../assets/images";
import "../css/DessertCard.css"; 


const DessertCard = ({ dessert }) => {
  return (
    <div className="dessert-card">
      <img src={images[dessert.key]} alt={dessert.name} />
      <h3>{dessert.name}</h3>
      <p>Categoría: {dessert.category}</p>
      <p>Dificultad: {dessert.difficulty}</p>
      <button>❤️ Favorito</button>
    </div>
  );
};

export default DessertCard;

