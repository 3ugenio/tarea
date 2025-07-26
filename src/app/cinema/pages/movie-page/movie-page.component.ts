import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';
import { Movie, Trailer } from '../../interfaces/movie.interface';
import { DecimalPipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-page',
  imports: [DecimalPipe],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent implements OnInit {
  // Aquí puedes definir las propiedades y métodos necesarios para la página de película
  movieId: string | null = null;
  movie : Movie | null = null;
  trailer: Trailer | null = null;
  videoUrl: SafeResourceUrl | null = null;

  constructor( private route: ActivatedRoute, private cinemaService: CinemaService, private sanitizer: DomSanitizer) {
    // Inicialización del componente
  }

  ngOnInit(): void {

    this.movieId = this.route.snapshot.paramMap.get('id');

    if (this.movieId) {
      this.cinemaService.getMovieById(this.movieId).subscribe({
        next: (movie: Movie) => {
          this.movie = movie;

        },
        error: (error) => {
          console.error('Error Obteniendo los datos de la pelicula:', error);
        }
      });
    //   this.cinemaService.getMovieVideos(this.movieId).subscribe({
    //     next: (videos: Trailer[]) => {
    //       if (videos.length > 0) {
    //         this.trailer = videos[0];
    //         this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.trailer.key}`);


    //       } else {
    //         console.warn('No se encontraron tráileres para esta película.');
    //       }
    //     },
    //     error: (error) => {
    //       console.error('Error obteniendo los tráileres:', error);
    //     }
    //   });
    // } else {
    //   console.error('No se encontro el ID de la película en la ruta');
    // }

  }

}}
