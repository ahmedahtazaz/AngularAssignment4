import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output('onStartIncrement') onStartIncrement = new EventEmitter<number>();

  startIncrement: number = 0;
  incrementInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  onStart = () => {
    this.incrementInterval = setInterval(() => {
      this.onStartIncrement.emit(++this.startIncrement);
    },1000);
  }

  onStop = () => {
    clearInterval(this.incrementInterval);
  }
}
