import { Component, input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Genre } from '../../interfaces/TMDBMovies.interface';


@Component({
  selector: 'cinema-movie-card',
  imports: [DecimalPipe,],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {

    movie = input.required<Movie>();
 }
