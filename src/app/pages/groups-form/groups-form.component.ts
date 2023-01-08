import { UsersService } from './../../service/user/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FriendsService } from 'src/app/service/friends/friends.service';

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

  listFriends: any;
  userId!: any;

  constructor(private formBuilder: FormBuilder,
    private friendService: FriendsService ,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.initForm();
    this.userId = localStorage.getItem('userId')
    this.getAllFriends();
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

  getAllFriends() {
    this.userService.findUser(this.userId).subscribe((res:any) => {
        console.log(res);
        this.listFriends = res;
    })
  }

  saveGroup() {

  }


}
