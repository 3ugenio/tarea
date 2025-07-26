import { Genre } from "./TMDBMovies.interface";

export interface Movie{
  id: number;
  name: string;
  genres: Genre[];
  rating: number;
  description: string;
  posterImg: string;
  popularity: number;
}

export interface Trailer{
  id: string;
  key: string;
}
