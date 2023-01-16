import { GroupService } from './../../service/group/group.service';
import { UsersService } from './../../service/user/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService,
    private groupService: GroupService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.initForm();
    this.userId = localStorage.getItem('userId')
    this.getAllFriends();
  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      nomeEquipe: ['', Validators.required],
    })
  }



  getAllFriends() {
    this.friendService.getAllFriends(this.userId).subscribe((res:any) => {
        console.log(res);
        this.listFriends = res;
    },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }

  onSubmit() {
    const body = {
        "moderadorId": this.userId,
        "nomeGrupo": this.formBusca.get('nomeEquipe').value
    }
        this.groupService.createGroup(body).subscribe((res:any) => {
          console.log(res);
          this.listFriends = res;
      },(err)=> {
        this.toastrService.error('Erro', 'Erro ao criar grupo de amigos');
      })
  }

  // createCenterBet() {
  //   this.groupService.newCenter(body).subscribe((res:any) => {
  //     console.log(res);
  //     this.listFriends = res;
  // },(err)=> {
  //   this.toastrService.error('Erro', 'Erro ao criar grupo de amigos');
  // })



}
  


