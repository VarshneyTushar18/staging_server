// lib/lifeApi.js
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://your-api.com/api";

export async function getGalleryItems() {
  const res = await fetch(`${BASE_URL}/life/items`, { 
    cache: "no-store" // or 'force-cache' for static
  });
  if (!res.ok) throw new Error("Failed to fetch gallery items");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/life/categories`, {
    next: { revalidate: 3600 } 
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function getYearsByCategory(category) {
  const res = await fetch(`${BASE_URL}/life/years/${category}`);
  if (!res.ok) throw new Error("Failed to fetch years");
  return res.json();
}

export async function getGalleryByCategoryAndYear(category, year) {
  const res = await fetch(`${BASE_URL}/life/gallery/${category}/${year}`);
  if (!res.ok) throw new Error("Failed to fetch gallery");
  return res.json();
}