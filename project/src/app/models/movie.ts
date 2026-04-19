export interface Movie {
  id: number;
  title: string;
  description: string;
  release_year: number;
  poster_url: string;
  genre: number;
  genre_name: string;
  average_score: number | null;
}