import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { useFavorites } from "../hooks/useFavorites";
import "../css/DessertCard.css";

const DessertCard = ({ dessert }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(dessert.id);

  const shortDescription =
    (dessert.description || "").slice(0, 120) +
    ((dessert.description || "").length > 120 ? "..." : "");

  return (
    <div className="dessert-card">
      <Link to={`/recipe/${dessert.id}`} className="dessert-card-link">
        <img
          src={images[dessert.key]}
          alt={dessert.name}
          className="dessert-image"
        />

        <h3 className="dessert-name">{dessert.name}</h3>
        <p className="dessert-description">{shortDescription}</p>
        <span className="read-more">Leer más →</span>

        <div className="dessert-meta">
          <p><strong>Categoría:</strong> {dessert.category}</p>
          <p><strong>Dificultad:</strong> {dessert.difficulty}</p>
        </div>
      </Link>

      <div className="card-buttons">
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={() => toggleFavorite(dessert.id)}
        >
          {isFavorite ? "💔 Quitar de favoritos" : "❤️"}
        </button>
      </div>
    </div>
  );
};

export default DessertCard;






