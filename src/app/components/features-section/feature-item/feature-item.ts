import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
export type FeatureBenefits = string[];
export type itemAlign = 'left' | 'right';

@Component({
  selector: 'app-feature-item',
  imports: [NgClass],
  templateUrl: './feature-item.html',
  styleUrl: './feature-item.scss',
})
export class FeatureItem {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() benefits: FeatureBenefits = [];
  @Input() itemAlign: itemAlign = 'left';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
}
