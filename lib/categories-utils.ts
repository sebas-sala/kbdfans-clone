export function extractCategoryNumber(category: string): string {
  const match = category.match(/^(\d+)-keyboards$/);
  return match ? `${match[1]}%` : category;
}

export function formatCategoryNumber(category: string): string {
  return category.replace("%", "-keyboards");
}
