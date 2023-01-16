import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/user/users.service';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  friendList: any[] | undefined;
  formBusca: any;
  userId: any;

  constructor(private formBuilder: FormBuilder, 
    private userService: UsersService,
    private toastrService: ToastrService,
    private friendService: FriendsService) {

  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      userName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.initForm();
    this.getAllUsers();

  }

  onSubmit() {
    console.log(this.formBusca.get('userName').value)
    this.userService.findUser(this.formBusca.get('userName').value).subscribe((res:any) => {
      this.friendList = res;
      console.log(res)
    })
  }

  getAllUsers() {
    this.userService.getAll().subscribe((res:any) => {
      this.friendList = res;
    });
  }

  sendRequestFriend(friendId: number) {
    this.friendService.sendRequestToUser(this.userId,friendId).subscribe((res:any) => {
      this.toastrService.success('Sucesso', 'Solicitação enviada com sucesso');
    }, (err)=> {
      this.toastrService.error('Erro', 'Erro ao enviar solitação');
    })
  }

}
