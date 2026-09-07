import { Component } from '@angular/core';
import { NEWS } from '../../data';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-news-section',
  imports: [NewsCard],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSection {
  protected readonly news = NEWS;
}
