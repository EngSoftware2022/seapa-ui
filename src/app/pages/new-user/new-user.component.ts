import { Component, OnInit } from '@angular/core';
import { User } from './user/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formNewUser: any;

  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }
  createNewUser(user: User) {
    this.formNewUser =  this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: ['', Validators.required],
      telephone: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.createNewUser(new User());
  }

  onSubmit() {
    console.log(this.formNewUser?.value)
    this.userService.createUser(this.formNewUser.value).subscribe((res) => {
      console.log(res);
    })
  }

}
