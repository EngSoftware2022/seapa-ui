import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/service/friends/friends.service';

@Component({
  selector: 'app-friends-solicitation',
  templateUrl: './friends-solicitation.component.html',
  styleUrls: ['./friends-solicitation.component.scss']
})
export class FriendsSolicitationComponent implements OnInit {
  friendSolicitationList: any;
  userId: any;


  constructor( private friendService: FriendsService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getAllSolicitation();

  }

  getAllSolicitation() {
    this.friendService.getAllRequest(this.userId).subscribe((res:any) => {
      this.friendSolicitationList = res;
      console.log(res);
    })
  }

  acept(id: number) {
    this.friendService.aceptRequest(id).subscribe((res:any) => {
      console.log(res);
    })
  }

  reject(id: number) {
    this.friendService.rejectRequest(id).subscribe((res:any) => {
      console.log(res);
    })
  }
}
