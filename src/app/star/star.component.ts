import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StartComponent implements OnChanges {
  @Input()
  rating: number = 0;

  startWidth: number;

  ngOnChanges(): void {
    this.startWidth = (this.rating * 74) / 5;
  }
}
