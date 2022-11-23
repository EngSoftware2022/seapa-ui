import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-groups-form',
  templateUrl: './groups-form.component.html',
  styleUrls: ['./groups-form.component.scss']
})
export class GroupsFormComponent implements OnInit {

  formBusca: any;
  
  selectedCar: number | undefined;
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      nomeEquipe: ['', Validators.required],
      teams: ['']
    })
  }

  onSubmit() {
    console.log(this.formBusca.value)
  }



}
