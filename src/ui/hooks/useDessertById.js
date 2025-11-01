// src/ui/hooks/useDessertById.js
import { useParams } from "react-router-dom";
import { desserts } from "../../core/data/desserts";

export const useDessertById = () => {
  const { id } = useParams();
  return id ? desserts.find((d) => d.id === parseInt(id)) : null;
};