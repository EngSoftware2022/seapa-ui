import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { FriendRequestComponent } from 'src/app/pages/friend-request/friend-request.component';
import { FriendsSolicitationComponent } from '../friends-solicitation/friends-solicitation.component';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/user/users.service';
import { ExtratosService } from 'src/app/service/extrato/extratos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userId!: any;
  showFiller = false;

  listFriends: any;
  user: any;
  wallet: any;

  constructor(public dialog: MatDialog,
    private router: Router,
    private toastrService: ToastrService,
    private userService: UsersService,
    private friendService: FriendsService,
    private walletService: ExtratosService) { }


  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
    if(this.userId) {
      this.getAllFriends();
      this.getCurrentUser();
      this.getCurrentMoney();
    }

  }

  getAllFriends() {
    this.friendService.getAllFriends(this.userId).subscribe((res:any) => {
        console.log(res);
        this.listFriends = res;
    },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }

  getCurrentUser() {
    this.userService.findUserById(this.userId).subscribe((res:any) => {
        console.log(res);
        this.user = res;

    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar usuário');

    })
  }

  getCurrentMoney() {
    this.walletService.getBalance(this.userId).subscribe((res:any) => {
        console.log(res);
        this.wallet= res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar saldo atual');
    })
  }


  openNewFriend() {
    const dialogRef = this.dialog.open(FriendRequestComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openSolicitation() {
    const dialogRef = this.dialog.open(FriendsSolicitationComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  logout() {
    localStorage.clear();
    location.reload();
  }



}
