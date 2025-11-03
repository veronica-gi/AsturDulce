import React from "react";
import "../../ui/css/DessertsPage.css";
import Filters from "../components/Filters";
import DessertCard from "../components/DessertCard";
import { useDesserts } from "../hooks/useDesserts";
import { useFavorites } from "../hooks/useFavorites"; 

const DessertsPage = () => {
  const { filters, setFilters, filteredDesserts } = useDesserts();
  const { favorites, toggleFavorite } = useFavorites(); 

  return (
    <div className="desserts-page">
      <main className="desserts-content">
        <h1>Recetas de Postres</h1>
        <Filters filters={filters} setFilters={setFilters} />
        <div className="desserts-grid">
          {filteredDesserts.map((dessert) => (
            <DessertCard
              key={dessert.id}
              dessert={dessert}
              isFavorite={favorites.includes(dessert.id)} 
              onToggleFavorite={toggleFavorite} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DessertsPage;


