import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() secondsTimer: number;
  evenChanges: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.secondsTimer.currentValue % 2 === 0) {
      this.evenChanges.push(
        `Even change ${changes.secondsTimer.currentValue}`
      );
    }
  }
}
