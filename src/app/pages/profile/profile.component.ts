import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/service/user/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  userId: any;

  constructor(    private toastrService: ToastrService,
    private userService: UsersService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.findUserById(this.userId).subscribe((res:any) => {
        console.log(res);
        this.user = res;

    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }

  deletePerson() {
    this.userService.findUserById(this.userId).subscribe((res:any) => {
      console.log(res);
      localStorage.clear();
      location.reload();
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao deletar usuário');
    })
  }
}
