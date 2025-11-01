import { useState, useEffect } from "react";
import { desserts } from "../../core/data/desserts";

export const useFavorites = () => {
  // Estado de favoritos, inicializado desde localStorage
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar en localStorage cada vez que cambian los favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Añadir o quitar un postre de favoritos
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  // Filtrar los postres favoritos
  const favoriteDesserts = desserts.filter((dessert) =>
    favorites.includes(dessert.id)
  );

  return { favorites, toggleFavorite, favoriteDesserts };
};

