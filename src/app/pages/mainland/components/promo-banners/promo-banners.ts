import { Component } from '@angular/core';
import { PROMOS } from '../../data';

@Component({
  selector: 'app-promo-banners',
  templateUrl: './promo-banners.html',
  styleUrl: './promo-banners.scss',
})
export class PromoBanners {
  protected readonly promos = PROMOS;
}
