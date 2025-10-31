export const filterDesserts = (desserts, filters) => {
  return desserts.filter((d) => {
    const byCategory =
      filters.category === "Todas" || d.category === filters.category;
    const byDifficulty =
      filters.difficulty === "Todas" || d.difficulty === filters.difficulty;
    return byCategory && byDifficulty;
  });
};