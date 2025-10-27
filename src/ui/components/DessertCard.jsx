import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import "../css/DessertCard.css"; 


const DessertCard = ({ dessert }) => {
  return (
    <div className="dessert-card">
      <img src={images[dessert.key]} alt={dessert.name} />
      <h3>{dessert.name}</h3>
       <p>{dessert.description}</p>
      <p>Categoría: {dessert.category}</p>
      <p>Dificultad: {dessert.difficulty}</p>
      <button>❤️ Favorito</button>
      <Link to={`/recipe/${dessert.id}`}>
        <button>Leer más</button>
      </Link>
    </div>
  );
};

export default DessertCard;

