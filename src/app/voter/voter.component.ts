import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  voted:boolean = false;
  
  @Input()
  name: string = "";
  
  @Output()
  onVoted = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  vote(agreed: boolean){
    this.voted = true;
    this.onVoted.emit(agreed);
  }

}
