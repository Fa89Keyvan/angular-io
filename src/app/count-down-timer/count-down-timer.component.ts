import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  template: `
    <b>{{min}}:{{sec}}</b>
  `,
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  @Input()
  durationInSeconds:number = 0;

  min:number = 0;
  sec:number = 0;

  toggleActionName: string = "Pause";

  intervalId:number = 0;

  constructor() { }

  start() : void{

    this.intervalId = window.setInterval(()=>{
      
      this.min = Math.floor(this.durationInSeconds / 60);
      this.sec = this.durationInSeconds % 60;

      if(--this.durationInSeconds === 0){
        window.clearInterval(this.intervalId);
      }

      

    },1000);

  }

  toggle(){

    if(this.toggleActionName === "Pause"){
      this.toggleActionName = "Resume";
      window.clearInterval(this.intervalId);
    }
    else{
      this.toggleActionName = "Pause";
      this.start();
    }

  }

  ngOnInit(): void {
  }

}
