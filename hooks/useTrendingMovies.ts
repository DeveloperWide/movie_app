import { getTrendingMovies } from "@/services/movie.service";
import { APIResponse, Movie } from "@/types/movie";
import { useEffect, useRef, useState } from "react";

export function useTrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const pageRef = useRef(1);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data: APIResponse = await getTrendingMovies(1);

      pageRef.current = 1;

      setMovies(data.results);
      setHasMore(data.page < data.total_pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMoreMovies = async () => {
    if (loadingMore || isLoading || !hasMore) return;

    try {
      setLoadingMore(true);

      const nextPage = pageRef.current + 1;
      const data: APIResponse = await getTrendingMovies(nextPage);

      setMovies((prev) => {
        const merged = [...prev, ...data.results];

        return Array.from(
          new Map(merged.map((movie) => [movie.id, movie])).values(),
        );
      });

      pageRef.current = nextPage;

      setHasMore(nextPage < data.total_pages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something Went Wrong");
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return {
    data: movies,
    isLoading,
    loadingMore,
    error,
    refetch: fetchTrendingMovies,
    loadMore: fetchMoreMovies,
  };
}
