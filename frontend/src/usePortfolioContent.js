import { useEffect, useState } from "react";
import { fetchPortfolioContent } from "./api";

// Fetches the whole site's content once and hands it down to every section,
// instead of each section fetching independently.
export function usePortfolioContent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchPortfolioContent()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, error, loading: !data && !error };
}
