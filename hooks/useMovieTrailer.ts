import { getMovieTrailer } from "@/services/movie.service";
import { Video } from "@/types";
import { useEffect, useState } from "react";

export function useMovieTrailer(movieId: number) {
  const [trailer, setTrailer] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMovieTrailer = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getMovieTrailer(movieId);
      setTrailer(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, [movieId]);

  return { data: trailer, isLoading, error, refetch: fetchMovieTrailer };
}
