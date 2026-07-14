import { Movie } from "./movie";

export interface APIResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
