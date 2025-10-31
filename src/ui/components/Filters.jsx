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
          <option value="Todas">Todas</option>
          <option value="Tartas">Tartas</option>
          <option value="Cremas y Flanes">Cremas y Flanes</option>
          <option value="Pasteles">Pasteles</option>
          <option value="Galletas">Galletas</option>
          <option value="Dulce Típico">Dulce típico</option>
        </select>
      </label>

      <label>
        Dificultad:
        <select value={filters.difficulty} onChange={handleDifficultyChange}>
          <option value="Todas">Todas</option>
          <option value="Fácil">Fácil</option>
          <option value="Media">Media</option>
          <option value="Difícil">Difícil</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;

