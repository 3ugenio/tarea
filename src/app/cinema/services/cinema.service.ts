import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { NowPlayingTMDB, TMDBMovie } from '../interfaces/TMDBMovies.interface';
import { catchError, map, tap, throwError } from 'rxjs';
import { MovieMapper } from '../interfaces/mappers/movie.mapper';
import { VideoMapper } from '../interfaces/mappers/video.mapper';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private http = inject(HttpClient);

  nowPlayingPage = signal(1);

  constructor() { }

  getNowPlaying() {
    const url = `${environment.apiUrlTMDB}/movie/now_playing`;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${environment.token}`)

    return this.http.get<NowPlayingTMDB>(url, { headers })
      .pipe(
        tap((response) => this.nowPlayingPage.set(response.page)),
        map((response) => MovieMapper.mapTMDBMoviesToMovies(response.results)),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error))
        })
      )
  }
  getMovieById(id: string) {
    const url = `${environment.apiUrlTMDB}/movie/${id}`;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${environment.token}`)

    let params= new HttpParams().set('language', 'es-ES');

    return this.http.get(url, { headers, params })
      .pipe(
        map((response:any) => MovieMapper.mapTMDBMovieToMovie(response)),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(() => new Error(error.message));
        })
      );
  }
  // getMovieVideos(id: string) {
  //   const url = `${environment.apiUrlTMDB}/movie/${id}/videos`;

  //   const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${environment.token}`)

  //   return this.http.get(url, { headers })
  //     .pipe(
  //       map((response: any) => response.results),
  //       map((videos: any[]) => (VideoMapper.mapTMDBVideosToTrailers(videos.filter(video => video.site === 'YouTube' && video.type === 'Trailer'))),
  //       catchError((error: HttpErrorResponse) => {
  //         console.error(error);
  //         return throwError(() => new Error(error.message));
  //       })
  //     ))
  // }

}
