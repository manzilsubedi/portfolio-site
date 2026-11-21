// Talks to the .NET backend. VITE_API_URL is set per-environment:
// - locally, in .env.local (gitignored)
// - in production, in your host's environment variable settings
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchPortfolioContent() {
  const response = await fetch(`${API_URL}/api/content`);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  return response.json();
}
