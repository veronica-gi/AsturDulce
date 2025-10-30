import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DessertCard from "../components/DessertCard";
import "../css/Favorites.css";
import { desserts } from "../../core/data/desserts";
import { useFavorites } from "../hooks/useFavorites";

function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteDesserts = desserts.filter(dessert =>
    favorites.includes(dessert.id)
  );

  return (
    <div className="favorites-page">
      <Header /> 

      <main>
        <h2>Mis Favoritos</h2>

        {favoriteDesserts.length === 0 ? (
          <p>No tienes favoritos aún.</p>
        ) : (
          <div className="dessert-list">
            {favoriteDesserts.map(dessert => (
              <DessertCard
                key={dessert.id}
                dessert={dessert}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>

      <Footer /> 
    </div>
  );
}

export default FavoritesPage;

