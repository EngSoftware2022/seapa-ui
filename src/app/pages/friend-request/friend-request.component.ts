import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/user/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  friendList: any[] | undefined;
  formBusca: any;

  constructor(private formBuilder: FormBuilder, 
    private router:Router,
    private userService: UsersService) {

  }

  initForm() {
    this.formBusca =  this.formBuilder.group({
      userName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.initForm();

    // implementação para validar o acesso
    // if (localStorage.getItem('logged') === null) {
    //   this.router.navigate([''])
    // }

    this.friendList = [{
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 1
    },
    {
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 0
    }, {
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 2
    }]
  }

  onSubmit() {
    console.log(this.formBusca.userName)
    this.friendList?.forEach(this.friendList?.pop);
    this.friendList?.push(this.userService.findUser(this.formBusca.userName));
    }

}
