import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnChanges {

  voted:boolean = false;
  
  @Input()
  name: string = "";
  
  @Output()
  onVoted = new EventEmitter<boolean>();

  constructor() { }

  // ngOnInit(): void {
  // }

  vote(agreed: boolean){
    this.voted = true;
    this.onVoted.emit(agreed);
  }

  ngOnChanges(changes: SimpleChanges) {
    
    console.log(changes);
    
  }

}
