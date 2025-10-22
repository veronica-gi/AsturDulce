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
    { id: 1, key: "tarta_queso", name: "Tarta de Queso", category: "tartas", difficulty: "media" },
    { id: 2, key: "arroz_con_leche", name: "Arroz con leche", category: "cremas y flanes", difficulty: "media" },
    { id: 3, key: "tartaleta_manzana", name:"Tartaleta de manzana", category: "pasteles", difficulty: "difícil" },
    { id: 4, key: "fayueles", name: "Fayueles", category: "dulce típico", difficulty: "fácil" },
    { id: 5, key: "casadielles", name: "Casadielles", category: "dulce típico", difficulty: "media" },
    { id: 6, key: "compota_manzana", name: "Compota de manzana", category: "cremas y flanes", difficulty: "fácil" },
    { id: 7, key: "tocinillo", name: "Tocinillo", category: "cremas y flanes", difficulty: "difícil" },
    { id: 8, key: "picatostes", name: "Picatostes", category: "dulce típico", difficulty: "fácil" },
    { id: 9, key: "borrachinos", name: "Borrachinos", category: "pasteles", difficulty: "media" },
    { id: 10, key: "tarta_sidra", name: "Tarta de sidra", category: "tartas", difficulty: "media" },
    { id: 11, key: "tarta_nuez", name: "Tarta de nuez", category: "tartas", difficulty: "fácil" },
    { id: 12, key: "carbayones", name: "Carbayones", category: "pasteles", difficulty: "media" },
    { id: 13, key: "suspiros", name: "Suspiros", category: "galletas", difficulty: "fácil" },
    { id: 14, key: "cubiletes", name: "Cubiletes", category: "pasteles", difficulty: "difícil" },
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

