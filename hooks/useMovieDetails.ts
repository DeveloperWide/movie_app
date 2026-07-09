import { getMovieDetails } from "@/services/movie.service";
import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export function useMovieDetails(id: number) {
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieDetails: Movie = await getMovieDetails(id);
        setMovieDetails(movieDetails);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something Went Wrong");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { data: movieDetails, isLoading, error };
}
