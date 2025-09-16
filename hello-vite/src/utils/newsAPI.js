// src/utils/newsApi.js
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY; // replace with your key
const BASE_URL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_NEWS_PROXY_URL
    : import.meta.env.VITE_NEWS_API_URL;

// helper: format date to YYYY-MM-DD
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export async function searchNews(query) {
  if (!query.trim()) {
    throw new Error("Please enter a keyword");
  }

  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  const url = `${BASE_URL}?q=${encodeURIComponent(
    query
  )}&apiKey=${NEWS_API_KEY}&from=${formatDate(lastWeek)}&to=${formatDate(
    today
  )}&pageSize=100`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    const data = await res.json();
    return data.articles || [];
  } catch (err) {
    console.error("Failed to fetch news:", err);
    return [];
  }
}
