import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() secondsTimer: number;
  oddChanges: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.secondsTimer.currentValue % 2 !== 0) {
      this.oddChanges.push(
        `Odd change ${changes.secondsTimer.currentValue}`
      );
    }
  }
}
