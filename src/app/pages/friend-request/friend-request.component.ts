import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {


  friendList: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.friendList = [{
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 1
    },
    {
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 0
    }, {
      username: "aamgoulart",
      firstName: "Amanda",
      lastName: "Goulart",
      friend: 2
    }]
  }

}
