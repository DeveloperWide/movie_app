import { getSearchMovies } from "@/services/movie.service";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

export function useSearchMovies(query: string) {
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    let cancelled = false;

    async function fetchSearchResults() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getSearchMovies(debouncedQuery);

        if (!cancelled) {
          setResults(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchSearchResults();

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  return { data: results, isLoading, error };
}
