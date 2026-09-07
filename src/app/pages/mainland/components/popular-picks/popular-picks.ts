import { Component, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../data';
import { ProductTab } from '../../models';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-popular-picks',
  imports: [ProductCard],
  templateUrl: './popular-picks.html',
  styleUrl: './popular-picks.scss',
})
export class PopularPicks {
  protected readonly tabs: { id: ProductTab; label: string }[] = [
    { id: 'hot', label: '熱銷推薦' },
    { id: 'new', label: '最新上架' },
    { id: 'sale', label: '優惠商品' },
  ];
  protected readonly selected = signal<ProductTab>('hot');
  protected readonly products = computed(() =>
    PRODUCTS.filter((product) => product.tabs.includes(this.selected())).slice(0, 5),
  );
}
