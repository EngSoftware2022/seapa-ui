import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-center-bets',
  templateUrl: './control-center-bets.component.html',
  styleUrls: ['./control-center-bets.component.scss']
})
export class ControlCenterBetsComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit() {
  }

}
