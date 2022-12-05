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

  constructor(private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.fbLogin.value)
    this.userService.login(this.fbLogin.get('login').value, this.fbLogin.get('password').value).subscribe((res: any) => {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('userId', res);
      window.location.reload();
      this.router.navigate(['extrato']);
      this.isLogin = true;
    })

  }

  initForm() {
    this.fbLogin =  this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}
