import React from "react";

const Filters = () => {
  return (
    <div className="filters">
      <label>
        Categoría:
        <select>
          <option>Todos</option>
          <option>Tartas</option>
          <option>Cremas y Flanes</option>
          <option>Pasteles</option>
        </select>
      </label>

      <label>
        Dificultad:
        <select>
          <option>Todos</option>
          <option>Fácil</option>
          <option>Intermedio</option>
          <option>Difícil</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
