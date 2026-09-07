import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../data';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly links = NAV_LINKS;
  protected readonly lang = signal<'zh' | 'en'>('zh');
  protected readonly menuOpen = signal(false);

  protected prevent(event: Event): void {
    event.preventDefault();
  }
}
