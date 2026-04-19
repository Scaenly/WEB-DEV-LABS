import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password });
  }

  logout(refresh: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout/`, { refresh });
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies/`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movies/${id}/`);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.apiUrl}/genres/`);
  }

  searchMovies(query: string, genreId: string, year: string): Observable<Movie[]> {
    let params = new HttpParams();

    if (query) params = params.set('query', query);
    if (genreId) params = params.set('genre_id', genreId);
    if (year) params = params.set('year', year);

    return this.http.get<Movie[]>(`${this.apiUrl}/movies/search/`, { params });
  }

  addToWatchlist(movie: number, status: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/watchlist/`, { movie, status });
  }

  toggleFavorite(movie: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorites/toggle/`, { movie });
  }
}