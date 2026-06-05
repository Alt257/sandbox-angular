import { Component } from '@angular/core';

@Component({
  selector: 'ldk-stars-field',
  imports: [],
  templateUrl: './stars-field.html',
  styleUrl: './stars-field.css',
})
export class StarsField {
  protected readonly stars: Star[] = Array.from(
    {
      length: 140,
    },
    () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.4 + 0.6,
      opacity: Math.random() * 0.75 + 0.25,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4,
    }),
  );
}
