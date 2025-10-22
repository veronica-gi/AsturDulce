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
    { id: 1, name: "Tarta de Queso", category: "tartas", difficulty: "media" },
    { id: 2, name: "Arroz con leche", category: "cremas y flanes", difficulty: "media" },
    { id: 3, name: "Tartaleta de manzana", category: "pasteles", difficulty: "difícil" },
    { id: 4, name: "Fayueles", category: "dulce típico", difficulty: "fácil" },
    { id: 5, name: "Casadielles", category: "dulce típico", difficulty: "media" },
    { id: 6, name: "Compota de manzana", category: "cremas y flanes", difficulty: "fácil" },
    { id: 7, name: "Tocinillo", category: "cremas y flanes", difficulty: "difícil" },
    { id: 8, name: "Picatostes", category: "dulce típico", difficulty: "fácil" },
    { id: 9, name: "Borrachinos", category: "pasteles", difficulty: "media" },
    { id: 10, name: "Tarta de sidra", category: "tartas", difficulty: "media" },
    { id: 11, name: "Tarta de nuez", category: "tartas", difficulty: "fácil" },
    { id: 12, name: "Carbayones", category: "pasteles", difficulty: "media" },
    { id: 13, name: "Suspiros", category: "galletas", difficulty: "fácil" },
    { id: 14, name: "Cubiletes", category: "pasteles", difficulty: "difícil" },
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

