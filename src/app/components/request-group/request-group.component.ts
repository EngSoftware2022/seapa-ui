import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-request-group',
  templateUrl: './request-group.component.html',
  styleUrls: ['./request-group.component.scss']
})
export class RequestGroupComponent implements OnInit {
  userId: any;
  requestList: any;

  constructor(    private groupService: GroupService,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')
    this.getRequestGroup();
  }

  getRequestGroup() {
    this.groupService.getAllInvites(this.userId).subscribe((res:any) => {
      console.log(res);
      this.requestList = res;
   },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de solicitações');
    })
  }

  sendResponseRequest(idGroup: number, isAcept: boolean) {
    this.groupService.aceptRequest(this.userId, idGroup, isAcept).subscribe((res:any) => {
      console.log(res);
      this.requestList = res;
   },(err)=> {
      this.toastrService.error('Erro', 'Erro ao carregar lista de solicitações');
    })
  }
}
