import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.css'
})
export class MovieDetailPageComponent {
  reviewText = '';
  reviewScore = 5;
}