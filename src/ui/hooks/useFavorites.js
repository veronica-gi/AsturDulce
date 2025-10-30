// src/ui/hooks/useFavorites.js
import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // 🧠 Cada vez que cambian los favoritos, se guardan en localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ❤️ Añadir o quitar un postre de favoritos
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  };

  return { favorites, toggleFavorite };
};
