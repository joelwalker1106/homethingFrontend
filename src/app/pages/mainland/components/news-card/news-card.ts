import { Component, input } from '@angular/core';
import { NewsItem } from '../../models';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
})
export class NewsCard {
  readonly item = input.required<NewsItem>();
}
