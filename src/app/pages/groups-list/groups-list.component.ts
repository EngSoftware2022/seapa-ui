import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {

  groupList = [ {name: 'Time da empresa', team: ['julia', 'ana']}]

  constructor() { }

  ngOnInit(): void {
  }

}
