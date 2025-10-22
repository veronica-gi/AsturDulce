import React from "react";
import "../css/Filters.css"; // CSS específico de filtros

const Filters = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleDifficultyChange = (e) => {
    setFilters({ ...filters, difficulty: e.target.value });
  };

  return (
    <div className="filters">
      <label>
        Categoría:
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="todas">Todas</option>
          <option value="tartas">Tartas</option>
          <option value="cremas y flanes">Flanes</option>
          <option value="pasteles">Chocolate</option>
          <option value="galletas">Chocolate</option>
        </select>
      </label>

      <label>
        Dificultad:
        <select value={filters.difficulty} onChange={handleDifficultyChange}>
          <option value="todas">Todas</option>
          <option value="fácil">Fácil</option>
          <option value="media">Media</option>
          <option value="difícil">Difícil</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;

