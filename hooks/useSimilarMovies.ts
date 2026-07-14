import { getSimilarMovies } from "@/services/movie.service";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useSimilarMovies(movieId: number) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSimilarMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const movies = await getSimilarMovies(movieId);
      setMovies(movies);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, [movieId]);

  return { data: movies, isLoading, error, refetch: fetchSimilarMovies };
}
