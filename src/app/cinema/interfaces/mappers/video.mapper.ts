import { environment } from "../../../../environments/environments";
import { TMDBMovieVideos, TMDBVideo } from "../TMDBMovies.interface";
import { Trailer } from "../movie.interface";

export class VideoMapper {

  static mapTMDBVideoToTrailer(tmdbVideo: TMDBVideo): Trailer {
    return {
      id: tmdbVideo.id,
      key: tmdbVideo.key
    };
  }

  static mapTMDBVideosToTrailers(tmdbVideos: TMDBVideo[]): Trailer[] {
    return tmdbVideos.map(tmdbVideo => VideoMapper.mapTMDBVideoToTrailer(tmdbVideo));
  }

  static mapTMDBMovieVideosToTrailers(tmdbMovieVideos: TMDBMovieVideos): Trailer[] {
    return VideoMapper.mapTMDBVideosToTrailers(tmdbMovieVideos.results);
  }
}

