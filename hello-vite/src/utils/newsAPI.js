// src/utils/newsApi.js
const API_KEY = "KNlq6M0TNPzMPQfigVDWvm2tEaGAJ5k4XUlqsnU0"; // replace with your key
const BASE_URL = "https://api.thenewsapi.com/v1/news/all";

export async function fetchNews(query) {
  try {
    const url = `${BASE_URL}?q=${encodeURIComponent(
      query
    )}&api_token=${API_KEY}&language=en&limit=20`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return data.data; // The API returns results in `data`
  } catch (err) {
    console.error(err);
    return [];
  }
}
