import { BASE_URL, OPTIONS } from "@/constants/config";
import { APIResponse, Cast, Movie, Review, Video } from "@/types";

export const getTrendingMovies = async (page: number): Promise<APIResponse> => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?page=${page}`,
    OPTIONS,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }
  const data = await res.json();

  return data;
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

export const getSimilarMovies = async (movieId: number): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/similar`, OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch Similar Movies");
  }

  const data: APIResponse = await res.json();

  return data.results;
};

export const getMovieCast = async (movieId: number): Promise<Cast[]> => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits`, OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch Cast");
  }

  const data = await res.json();

  return data.cast;
};

export const getMovieReviews = async (movieId: number): Promise<Review[]> => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/reviews`, OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch Reviews");
  }

  const data = await res.json();

  return data.results;
};

export const getMovieTrailer = async (movieId: number): Promise<Video[]> => {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/videos`, OPTIONS);

  if (!res.ok) {
    throw new Error("Failed to fetch Reviews");
  }

  const data = await res.json();

  return data.results;
};
