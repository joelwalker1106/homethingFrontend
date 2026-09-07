import { Component } from '@angular/core';
import { CategorySection } from './components/category-section/category-section';
import { FeatureBar } from './components/feature-bar/feature-bar';
import { HeroSection } from './components/hero-section/hero-section';
import { NewsSection } from './components/news-section/news-section';
import { PopularPicks } from './components/popular-picks/popular-picks';
import { PromoBanners } from './components/promo-banners/promo-banners';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';

@Component({
  selector: 'app-mainland',
  imports: [
    SiteHeader,
    HeroSection,
    FeatureBar,
    CategorySection,
    PopularPicks,
    PromoBanners,
    NewsSection,
    SiteFooter,
  ],
  templateUrl: './mainland.html',
  styleUrl: './mainland.scss',
})
export class Mainland {}
