import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FriendsSolicitationComponent } from 'src/app/components/friends/friends-solicitation/friends-solicitation.component';
import { FriendsService } from 'src/app/service/friends/friends.service';
import { FriendRequestComponent } from '../../components/friends/friend-request/friend-request.component';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  userId: any;
  listFriends: any;
  friendSolicitationList: any;


  constructor(private _bottomSheetRef: MatBottomSheetRef<FriendsListComponent>,
    private friendService: FriendsService,
    private toastrService: ToastrService,
    public dialog: MatDialog) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getAllFriends();
    this.getAllSolicitation();
  }

  openNewFriend() {
    const dialogRef = this.dialog.open(FriendRequestComponent, {
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllFriends();
      this.getAllSolicitation();
    });

  }

  openSolicitation() {
    const dialogRef = this.dialog.open(FriendsSolicitationComponent, {
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllFriends();
      this.getAllSolicitation();
    });

  }

  getAllFriends() {
    this.friendService.getAllFriends(this.userId).subscribe((res: any) => {
      this.listFriends = res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }

  deleteFriend(id: number) {
    this.friendService.deleteFriend(id).subscribe((res: any) => {
      this.toastrService.success('Sucesso', 'Amigo excluido com sucesso');
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar lista de amigos');
    })
  }

  getAllSolicitation() {
    this.friendService.getAllRequest(this.userId).subscribe((res: any) => {
      this.friendSolicitationList = res;
    }, (err) => {
      this.toastrService.error('Erro', 'Erro ao carregar convites de amizade');
    })
  }


}
