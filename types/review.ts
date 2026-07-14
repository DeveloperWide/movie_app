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
