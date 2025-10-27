export const filterDesserts = (desserts, filters) => {
  return desserts.filter((d) => {
    const byCategory =
      filters.category === "todas" || d.category === filters.category;
    const byDifficulty =
      filters.difficulty === "todas" || d.difficulty === filters.difficulty;
    return byCategory && byDifficulty;
  });
};