// src/ui/hooks/useDesserts.js
import { useState, useMemo } from "react";
import { desserts } from "../../core/data/desserts";
import { filterDesserts } from "../../core/utils/filterDesserts";

export const useDesserts = () => {
  const [filters, setFilters] = useState({
    category: "todas",
    difficulty: "todas",
  });

  const filteredDesserts = useMemo(
    () => filterDesserts(desserts, filters),
    [filters]
  );

  return { filters, setFilters, filteredDesserts };
};
