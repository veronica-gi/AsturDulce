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
    { id: 1, key: "tarta_queso", name: "Tarta de Queso", category: "Tartas", difficulty: "Media" },
    { id: 2, key: "arroz_con_leche", name: "Arroz con leche", category: "Cremas y Flanes", difficulty: "Media" },
    { id: 3, key: "tartaleta_manzana", name:"Tartaleta de manzana", category: "Pasteles", difficulty: "Difícil" },
    { id: 4, key: "fayueles", name: "Fayueles", category: "Dulce Típico", difficulty: "Fácil" },
    { id: 5, key: "casadielles", name: "Casadielles", category: "Dulce Típico", difficulty: "Media" },
    { id: 6, key: "compota_manzana", name: "Compota de manzana", category: "Cremas y Flanes", difficulty: "Fácil" },
    { id: 7, key: "tocinillo", name: "Tocinillo", category: "Cremas y Flanes", difficulty: "Difícil" },
    { id: 8, key: "picatostes", name: "Picatostes", category: "Dulce Típico", difficulty: "Fácil" },
    { id: 9, key: "borrachinos", name: "Borrachinos", category: "Pasteles", difficulty: "Media" },
    { id: 10, key: "tarta_sidra", name: "Tarta de sidra", category: "Tartas", difficulty: "Media" },
    { id: 11, key: "tarta_nuez", name: "Tarta de nuez", category: "Tartas", difficulty: "Fácil" },
    { id: 12, key: "carbayones", name: "Carbayones", category: "Pasteles", difficulty: "Media" },
    { id: 13, key: "suspiros", name: "Suspiros", category: "Galletas", difficulty: "Fácil" },
    { id: 14, key: "cubiletes", name: "Cubiletes", category: "Pasteles", difficulty: "Difícil" },
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

