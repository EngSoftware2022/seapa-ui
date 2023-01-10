import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/service/user/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fbLogin!: any;
  isLogin: any = false;
  hide = true;

  constructor(private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
    if (localStorage.getItem('userId')) {
      this.router.navigate(['group']);
    }
  }

  onSubmit() {
    console.log(this.fbLogin)
    this.userService.login(this.fbLogin.get('login').value, this.fbLogin.get('password').value).subscribe((res: any) => {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('userId', res);
      location.reload();
      this.isLogin = true;
      this.toastrService.success('Sucesso', 'Login realizado com sucesso!');
    }, (error) => {
      console.error(error)
      this.toastrService.error('Erro', 'Erro ao fazer login, tente novamente"');
    })

  }

  initForm() {
    this.fbLogin =  this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
    console.log(this.fbLogin)
  }

}
