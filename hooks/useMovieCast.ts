import { getMovieCast } from "@/services/movie.service";
import { Cast } from "@/types";
import { useEffect, useState } from "react";

export function useMovieCast(movieId: number) {
  const [cast, setCast] = useState<Cast[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieCasts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getMovieCast(movieId);
      console.log(data);
      setCast(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieCasts();
  }, [movieId]);

  return { data: cast, isLoading, error };
}
