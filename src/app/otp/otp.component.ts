import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountDownTimerComponent } from '../count-down-timer/count-down-timer.component';

@Component({
  selector: 'app-otp',
  template: `
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.toggle()">{{timer.toggleActionName}}</button>
    <div>
      <app-count-down-timer [durationInSeconds]="120" #timer></app-count-down-timer>
    </div>
    `,
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(CountDownTimerComponent)
  private timer!: CountDownTimerComponent;

  
  ngAfterViewInit(): void {
  
    this.timer.start();
    
  }

}
