import { Component, OnInit } from '@angular/core';

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
export class OtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
