export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genres: {
    id: number;
    name: string;
  }[];
  runtime: number;
  release_date: string;
}

export interface APIResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Cast {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
}

export interface Review {
  id: string;
  author: string;
  author_details: {
    username: string;
    avatar_path: string | null;
    rating: number | null;
  };
  content: string;
  created_at: string;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}
