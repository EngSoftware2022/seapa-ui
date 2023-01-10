import { NewModerateBetComponent } from './../../new-moderate-bet/new-moderate-bet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupsFormComponent } from '../groups-form/groups-form.component';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groupList = [ {name: 'Time da empresa', team: ['julia', 'ana'], id:1}]
  idUser: any;

  constructor(public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  openNewGroup() {
    const dialogRef = this.dialog.open(GroupsFormComponent, {
      width: '500px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
