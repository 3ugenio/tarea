

export interface NowPlayingTMDB {
  dates:         Dates;
  page:          number;
  results:       TMDBMovie[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface TMDBMovie {
  adult:             boolean;
  backdrop_path:     string;
  genres:         Genre[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface Genre{
  id: number;
  name:string;
}

export interface TMDBMovieVideos{
  id: number;
  results: TMDBVideo[];
}
export interface TMDBVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
}
