import { getMovieReviews } from "@/services/movie.service";
import { Review } from "@/types";
import { useEffect, useState } from "react";

export function useMovieReviews(movieId: number) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieReviews = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getMovieReviews(movieId);
      setReviews(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieReviews();
  }, [movieId]);

  return { data: reviews, isLoading, error };
}
