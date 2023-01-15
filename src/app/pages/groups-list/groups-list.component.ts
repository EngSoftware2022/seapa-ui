import { AddUserGroupComponent } from './../add-user-group/add-user-group.component';
import { NewModerateBetComponent } from '../../components/bets/new-moderate-bet/new-moderate-bet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupsFormComponent } from '../groups-form/groups-form.component';
import { GroupService } from 'src/app/service/group/group.service';
import { ToastrService } from 'ngx-toastr';
import { RequestGroupComponent } from 'src/app/components/request-group/request-group.component';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groupList: any;
  userId: any;
  requestList: any;

  constructor(public dialog: MatDialog,
    private groupService: GroupService,
    private toastrService: ToastrService,

    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getAllGroups();
    this.getRequestGroup();

  }

  openNewGroup() {
    const dialogRef = this.dialog.open(GroupsFormComponent, {
      width: '100%',
      height : 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllGroups();
    });
  }

  getAllGroups() {
    this.groupService.getAllParticipation(this.userId).subscribe((res:any) => {
        console.log(res);
        this.groupList = res;
    },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de grupos');
    })
  }

    openModalAddParticipante(idGroup: number) {
      const dialogRef = this.dialog.open(AddUserGroupComponent, {
        width: '100%',
        height : 'auto',
        data: {
          idGroup: idGroup
        },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.getAllGroups();
        this.getRequestGroup();
      });
    }

    getRequestGroup() {
      this.groupService.getAllInvites(this.userId).subscribe((res:any) => {
        console.log(res);
        this.requestList = res;
     },(err)=> {
        this.toastrService.error('Erro', 'Erro ao carregar lista de solicitações');
      })
    }

    showRequestGroup() {
      const dialogRef = this.dialog.open(RequestGroupComponent, {
        width: '100%',
        height : 'auto',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.getAllGroups();
      });
    }


}
