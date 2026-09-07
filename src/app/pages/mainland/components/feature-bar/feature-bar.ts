import { Component } from '@angular/core';
import { FEATURES } from '../../data';

@Component({
  selector: 'app-feature-bar',
  templateUrl: './feature-bar.html',
  styleUrl: './feature-bar.scss',
})
export class FeatureBar {
  protected readonly features = FEATURES;
}
