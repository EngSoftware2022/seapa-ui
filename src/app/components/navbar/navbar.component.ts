import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import { FriendRequestComponent } from 'src/app/pages/friend-request/friend-request.component';
import { FriendsSolicitationComponent } from '../friends-solicitation/friends-solicitation.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userId!: any;
  showFiller = false;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    console.log(this.userId)
  }

  getAllFriends() {

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



}
