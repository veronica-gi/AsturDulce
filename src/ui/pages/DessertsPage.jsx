import React, { useState } from "react";
import "../../ui/css/DessertsPage.css";
import DessertCard from "../components/DessertCard";
import Filters from "../components/Filters";

const DessertsPage = () => {
  const [filters, setFilters] = useState({
    category: "todas",
    difficulty: "todas",
  });

  const desserts = [
    { id: 1, name: "Tarta de Queso", category: "tartas", difficulty: "fácil" },
    { id: 2, name: "Arroz con leche", category: "cremas y flanes", difficulty: "media" },
    { id: 3, name: "Tartaleta de manzana", category: "pasteles", difficulty: "difícil" },
  ];

  const filteredDesserts = desserts.filter((d) => {
    const byCategory =
      filters.category === "todas" || d.category === filters.category;
    const byDifficulty =
      filters.difficulty === "todas" || d.difficulty === filters.difficulty;
    return byCategory && byDifficulty;
  });

  return (
    <div className="desserts-page">
      
      <main className="desserts-content">
        <h1>Recetas de Postres</h1>
        <Filters filters={filters} setFilters={setFilters} />
        <div className="desserts-grid">
          {filteredDesserts.map((dessert) => (
            <DessertCard key={dessert.id} dessert={dessert} />
          ))}
        </div>
      </main>
      
    </div>
  );
};

export default DessertsPage;

