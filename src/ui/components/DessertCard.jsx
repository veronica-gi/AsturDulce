import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import "../css/DessertCard.css"; 


const DessertCard = ({ dessert }) => {
  
  const shortDescription = (dessert.description || "")
  .slice(0, 120)
  .concat((dessert.description || "").length > 120 ? "..." : "");



  return (
    <div className="dessert-card">
      <img src={images[dessert.key]} alt={dessert.name} />
      <h3>{dessert.name}</h3>
       <p className="dessert-description">{shortDescription}</p>
       <Link to={`/recipe/${dessert.id}`} className="read-more">
        ... Leer más
      </Link>

      <p>Categoría: {dessert.category}</p>
      <p>Dificultad: {dessert.difficulty}</p>
      <div className="card-buttons">
      <button>❤️ Favorito</button>
      
    </div>
    </div>
  );
};

export default DessertCard;

