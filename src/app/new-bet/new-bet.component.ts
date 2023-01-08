import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-bet',
  templateUrl: './new-bet.component.html',
  styleUrls: ['./new-bet.component.scss']
})
export class NewBetComponent implements OnInit {

  formBet: any;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formBet =  this.formBuilder.group({
      bet: ['', Validators.required],
      betValue: ['', Validators.required],
    });
  }
}
