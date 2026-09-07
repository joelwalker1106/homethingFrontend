import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOOTER_COLUMNS } from '../../data';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly columns = FOOTER_COLUMNS;
  protected readonly year = new Date().getFullYear();
}
