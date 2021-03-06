import { Component, OnInit } from '@angular/core';
import { IPromise } from 'q';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  secondsTimer = 0;
  secondsTimerId: number;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.secondsTimerId = window.setInterval(
      this.incrementSecondsTimer.bind(this), 1000);
  }

  onEndGame() {
    window.clearInterval(this.secondsTimerId);
    this.secondsTimer = 0;
  }

  private incrementSecondsTimer() {
    this.secondsTimer++;
  }
}
