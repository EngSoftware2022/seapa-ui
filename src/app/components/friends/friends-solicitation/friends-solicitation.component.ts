import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FriendsService } from 'src/app/service/friends/friends.service';

@Component({
  selector: 'app-friends-solicitation',
  templateUrl: './friends-solicitation.component.html',
  styleUrls: ['./friends-solicitation.component.scss']
})
export class FriendsSolicitationComponent implements OnInit {
  friendSolicitationList: any;
  userId: any;


  constructor( private friendService: FriendsService,
    private toastrService: ToastrService,

    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getAllSolicitation();

  }

  getAllSolicitation() {
    this.friendService.getAllRequest(this.userId).subscribe((res:any) => {
      this.friendSolicitationList = res;

      console.log(res);
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar convites de amizade');

    })
  }

  acept(id: number) {
    this.friendService.aceptRequest(id).subscribe((res:any) => {
      console.log(res);
    }, (err) => {
      // this.toastrService.error('Erro', 'Erro ao aceitar o convite de amizade');

    })
  }

  reject(id: number) {
    this.friendService.rejectRequest(id).subscribe((res:any) => {
      console.log(res);
    }, (err) => {
      // this.toastrService.error('Erro', 'Erro ao rejeitar o convite de amizade');
    })
  }
}
