// src/ui/pages/DessertsPage.jsx
import React from "react";
import "../../ui/css/DessertsPage.css";
import Filters from "../components/Filters";
import DessertCard from "../components/DessertCard";
import { useDesserts } from "../hooks/useDesserts";

const DessertsPage = () => {
  const { filters, setFilters, filteredDesserts } = useDesserts();

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

