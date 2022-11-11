import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user/user';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/service/user/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  formNewUser: any;

  constructor(private formBuilder: FormBuilder, 
    private toastrService: ToastrService,
    private userService: UsersService) { }
  createNewUser(user: User) {
    this.formNewUser =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      passwordVerify: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.createNewUser(new User());
  }

  onSubmit() {
    if (this.formNewUser.get('password').value !== this.formNewUser.get('passwordVerify').value  ) {
      this.toastrService.error('Erro', 'Senha diferentes!');
      return;
    }
    this.userService.createUser(this.formNewUser.value).subscribe((res) => {
      this.toastrService.success('Sucesso', 'Usuário criado com sucesso');
    },  (err) => {
      console.log(err);
      this.toastrService.error('Erro', 'Erro ao tentar salvar usuário');
    });
    
  }

}
