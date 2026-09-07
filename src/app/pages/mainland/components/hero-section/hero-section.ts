import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  protected readonly slide = signal(0);
  protected readonly dots = [0, 1, 2];
}
