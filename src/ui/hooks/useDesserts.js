import { useState, useMemo } from "react";
import { desserts } from "../../core/data/desserts";
import { filterDesserts } from "../../core/utils/filterDesserts"; 

export const useDesserts = () => {
  const [filters, setFilters] = useState({
    category: "Todas",
    difficulty: "Todas",
  });

  const filteredDesserts = useMemo(() => {
    // Usamos la función de utils
    return filterDesserts(desserts, filters);
  }, [filters]);

  return { filters, setFilters, filteredDesserts };
};

