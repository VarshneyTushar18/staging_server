export async function getPortfolioData() {
  const base = process.env.NEXT_PUBLIC_API_URL;
  
  const res = await fetch(`${base}/api/portfolio/tree`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch portfolio");
  }

  return res.json();
}
