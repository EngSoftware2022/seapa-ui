import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.scss']
})
export class AddUserGroupComponent implements OnInit {

  formBusca: any;
  listFriends: any;
  userId!: any;

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private friendService: FriendsService ,
    private groupService: GroupService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.initForm();
    this.userId = localStorage.getItem('userId')
    console.log(this.data)
    this.getAllFriends();
  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      teams: ['', Validators.required]
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
    this.sendAllRequest(this.data.idGroup);
  }

  addFriend(idUser: number, idGroup: number) {
    this.groupService.sendRequestToGroup(idUser, idGroup).subscribe((res:any) => {
      console.log(res);
  },(err)=> {
    this.toastrService.error('Erro', 'Erro ao criar grupo de amigos');
  })
  }

  sendAllRequest(idGroup: number) {
    this.formBusca.get('teams').value.forEach((element: any) => {
      this.addFriend(idGroup, element);
    });
  }


}
