import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { FriendRequestComponent } from 'src/app/pages/friend-request/friend-request.component';
import { FriendsSolicitationComponent } from '../friends-solicitation/friends-solicitation.component';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userId!: any;
  showFiller = false;

  listFriends: any;

  constructor(public dialog: MatDialog,
    private router: Router,
    private friendService: FriendsService) { }


  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
    this.getAllFriends();
  }

  getAllFriends() {
    this.friendService.getAllFriends(this.userId).subscribe((res:any) => {
        console.log(res);
        this.listFriends = res;
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
