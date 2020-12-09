import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {

  votersNames = ["BMW", "BENZ", "AUDI"];
  singleVoterName = "Nissan";


  agreeCount: number = 0;
  disagreeCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countVotes(agreed:boolean) {
    agreed ? this.agreeCount ++ : this.disagreeCount ++;
  }

  changeSingleVoterName(){
    this.singleVoterName = "Toyota";
  }
}
