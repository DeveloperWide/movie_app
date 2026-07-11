import { BASE_URL, OPTIONS } from "@/constants/config";
import { Movie } from "@/types/movie";

export const getTrendingMovies = async (page: number): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?page=${page}`,
    OPTIONS,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await res.json();

  return data.results;
};

export const getMovieDetails = async (id: number): Promise<Movie> => {
  const res = await fetch(`${BASE_URL}/movie/${id}`, OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return await res.json();
};

export const getSearchMovies = async (query: string): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query,
    )}&language=en-US&page=1`,
    OPTIONS,
  );

  if (!res.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await res.json();

  return data.results;
};
