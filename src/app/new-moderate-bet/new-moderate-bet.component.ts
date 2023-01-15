import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moderate-bet',
  templateUrl: './new-moderate-bet.component.html',
  styleUrls: ['./new-moderate-bet.component.scss']
})
export class NewModerateBetComponent implements OnInit {

  formModerateBet: any;

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formModerateBet =  this.formBuilder.group({
      event: ['', Validators.required],
      dateInit: ['', Validators.required],
      dateEnd: ['', Validators.required],
      managementType: ['', Validators.required],
      tipoAposta: ['', Validators.required],
      range: [''],
    });
  }

}
