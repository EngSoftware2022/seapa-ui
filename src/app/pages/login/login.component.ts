import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fbLogin!: any;

  constructor(private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.fbLogin.value)

    localStorage.setItem('logged', 'true');
  }

  initForm() {
    this.fbLogin =  this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}
