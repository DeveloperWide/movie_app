import { getTrendingMovies } from "@/services/movie.service";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useTrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const movies = await getTrendingMovies();
      setMovies(movies);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return { data: movies, isLoading, error, refetch: fetchTrendingMovies };
}
