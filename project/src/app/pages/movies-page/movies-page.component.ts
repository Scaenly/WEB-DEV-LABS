import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/moviehub.service';
import { Movie } from '../../models/movie';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = [];
  errorMessage = '';

  searchQuery = '';
  selectedGenre = '';
  selectedYear = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
    this.loadGenres();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => this.movies = data,
      error: () => this.errorMessage = 'Could not load movies'
    });
  }

  loadGenres() {
    this.movieService.getGenres().subscribe({
      next: (data: Genre[]) => this.genres = data,
      error: () => {}
    });
  }

  search() {
    this.errorMessage = '';
    this.movieService.searchMovies(this.searchQuery, this.selectedGenre, this.selectedYear).subscribe({
      next: (data: Movie[]) => this.movies = data,
      error: () => this.errorMessage = 'Search failed'
    });
  }

  addToWatchlist(movieId: number) {
    this.movieService.addToWatchlist(movieId, 'want_to_watch').subscribe({
      next: () => alert('Added to watchlist'),
      error: () => alert('Login required or action failed')
    });
  }

  toggleFavorite(movieId: number) {
    this.movieService.toggleFavorite(movieId).subscribe({
      next: (res: any) => alert(res.message),
      error: () => alert('Login required or action failed')
    });
  }
}