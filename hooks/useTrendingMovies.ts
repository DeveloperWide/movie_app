import { getTrendingMovies } from "@/services/movie.service";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useTrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrendingMovies = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const movies = await getTrendingMovies((page = 1)); // Fetch the first page of trending movies
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
