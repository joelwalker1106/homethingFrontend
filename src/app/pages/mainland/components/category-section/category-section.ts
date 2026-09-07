import { Component } from '@angular/core';
import { CATEGORIES } from '../../data';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.html',
  styleUrl: './category-section.scss',
})
export class CategorySection {
  protected readonly categories = CATEGORIES;
}
